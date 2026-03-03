import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

/* ================= Fonts ================= */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

/* ================= SEO Metadata ================= */

export const metadata: Metadata = {
  title: {
    default: "VendoNX | Smart Vending Solutions",
    template: "%s | VendoNX",
  },
  description:
    "VendoNX provides smart vending machine solutions to automate and scale your retail business with AI-powered insights.",
  keywords: [
    "smart vending machines",
    "automated retail",
    "AI vending solutions",
    "cashless vending",
  ],
  metadataBase: new URL("https://yourdomain.com"), // ⚠️ change later
  openGraph: {
    title: "VendoNX | Smart Vending Solutions",
    description:
      "Scale your retail business with VendoNX smart vending machine solutions.",
    url: "https://yourdomain.com", // ⚠️ change later
    siteName: "VendoNX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VendoNX | Smart Vending Solutions",
    description:
      "Scale your retail business with AI-powered vending machines.",
  },
};

/* ================= Layout ================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}