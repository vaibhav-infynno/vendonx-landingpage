"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Why Us", href: "/#pain-points" },
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1, ease: "easeIn" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen ? "py-2" : "py-4"
        }`}
        style={{
          background: scrolled || mobileOpen ? "hsl(var(--background) / 0.85)" : "transparent",
          backdropFilter: scrolled || mobileOpen ? "blur(12px) saturate(180%)" : "none",
          boxShadow: scrolled || mobileOpen ? "0 1px 12px hsl(0 0% 0% / 0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={scrollToTop}>
            <Image
              src="/vendonx-logo.svg"
              alt="Vendonx Logo"
              width={120}
              height={36}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-[hsl(var(--brand-purple)/0.06)]"
                style={{ color: "hsl(var(--foreground) / 0.7)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#download"
              className="btn-orange px-5 py-2.5 text-sm rounded-xl"
            >
              <Download size={16} />
              Download App
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "hsl(var(--brand-dark))" }}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <nav className="container mx-auto flex flex-col py-3 gap-0.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="py-3 px-4 text-base font-medium rounded-xl transition-colors hover:bg-[hsl(var(--brand-purple)/0.06)]"
                    style={{ color: "hsl(var(--foreground) / 0.8)" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="px-4 pt-4 pb-2">
                  <Link href="/#download" className="btn-orange w-full py-3.5 text-base rounded-xl flex items-center justify-center gap-2">
                    <Download size={18} />
                    Download App
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}