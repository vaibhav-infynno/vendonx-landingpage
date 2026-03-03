import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F17]">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <Link href="#" className="flex items-center gap-2 font-display font-bold text-lg">
            <Image 
              src="/vendonx-logo-dark.svg" 
              alt="VendoNX" 
              width={120}
              height={36}
              priority 
            />
          </Link>

          <div className="flex flex-wrap gap-5 justify-center">
            {["Features", "How It Works", "Pricing", "FAQ", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white/60 text-xs transition-opacity hover:opacity-100 hover:text-white"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {[
              { icon: MessageCircle, href: "https://wa.me/", label: "WhatsApp" },
              { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
              { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:hello@vendonx.in", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-colors"
                aria-label={label}>
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 text-center text-xs text-white/40">
          © 2026 Infynno Solutions LLP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
