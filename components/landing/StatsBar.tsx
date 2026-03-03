"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const stats = [
  { value: "1,000+", label: "Active Vendors" },
  { value: "2,000+", label: "Customers Managed" },
  { value: "3", label: "Languages Supported" },
  { value: "4.8★", label: "Average Rating" },
];

function Counter({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number and suffix (like "+", "★")
  const numericValue = parseFloat(value.replace(/,/g, ""));
  const suffix = value.replace(/[0-9,.]/g, "");
  const hasComma = value.includes(",");
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const val = numericValue % 1 === 0 ? Math.floor(latest) : latest.toFixed(1);
    const formatted = hasComma ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : val;
    return formatted + suffix;
  });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
      });
      return animation.stop;
    }
  }, [isInView, numericValue, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function StatsBar() {
  return (
    <section className="py-10 border-y bg-background border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y lg:divide-y-0 divide-border">
          {stats.map((s) => (
            <div key={s.label} className="stat-card border-border">
              <div className="font-display text-4xl md:text-5xl font-bold mb-1 text-brand-violet">
                <Counter value={s.value} />
              </div>
              <div className="text-sm md:text-base font-medium text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
