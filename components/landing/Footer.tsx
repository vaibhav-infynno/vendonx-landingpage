import { ArrowRight, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Download", href: "/#download" },
  ],
  Support: [
    { label: "FAQ", href: "/#faq" },
    { label: "Contact Us", href: "/#contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-and-conditions" },
  ],
};

const socials = [
  { icon: MessageCircle, href: "https://wa.me/", label: "WhatsApp" },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@vendonx.in", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark">
      <div className="container mx-auto px-6 pt-14 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Link href="#" className="inline-block mb-5">
              <Image src="/vendonx-logo-dark.svg"
              width={120}
              height={36}
              alt="VendoNX"  priority />
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-sm text-white/55">
              The all-in-one mobile app for Indian service professionals. Manage customers, AMC plans, invoices, and earnings — smarter.
            </p>

            {/* Newsletter-style CTA */}
            <div className="flex max-w-sm rounded-xl overflow-hidden border border-white/10 bg-white/5 text-white/80 focus-within:ring-2 focus-within:ring-brand-purple/50 transition-all">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-sm outline-none bg-transparent"
              />
              <button
                className="px-4 flex items-center justify-center transition-colors bg-brand-purple text-white hover:bg-brand-purple-hover"
                aria-label="Subscribe">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="font-display font-bold text-sm mb-4 text-white/90">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}
                      className="text-sm transition-colors duration-200 text-white/50 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social + Download column */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-sm mb-4 text-white/90">
              Connect With Us
            </h4>
            <div className="flex items-center gap-2 mb-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
                  aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <Link href="/#download"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 bg-white/10 text-white/80 border border-white/10 hover:bg-white/20 hover:text-white">
              Download App
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Divider + Bottom */}
        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-white/10">
          <p className="text-xs text-white/35">
            © 2026 Infynno Solutions LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs transition-colors hover:text-white text-white/35">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-xs transition-colors hover:text-white text-white/35">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
