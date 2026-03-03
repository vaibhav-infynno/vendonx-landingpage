"use client";

import { motion } from "framer-motion";
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

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1, ease: "easeIn" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen ? "py-3 backdrop-blur-xl bg-background/70 shadow-md" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/vendonx-logo.svg"
              alt="Vendonx Logo"
              width={120}
              height={36}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/#download"
              className="bg-gradient-to-r from-brand-purple to-brand-violet text-white px-7 py-2.5 rounded-2xl text-[15px] font-semibold flex items-center gap-2.5 shadow-orange hover:opacity-90 hover:scale-[1.02] transition-all"
            >
              <Download size={18} strokeWidth={2} />
              Download App
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden grid transition-all duration-300 ease-in-out ${
            mobileOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <nav className="overflow-hidden">
            <div className="px-6 pb-6 pt-2 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/#download"
              className="bg-gradient-to-r from-brand-purple to-brand-violet text-white px-7 py-3.5 rounded-2xl text-base font-semibold flex items-center justify-center gap-2.5 shadow-orange hover:opacity-90 hover:scale-[1.02] transition-all"
            >
              <Download size={20} strokeWidth={2} />
              Download App
            </Link>
          </div>
          </nav>
        </div>
      </motion.header>
    </>
  );
}