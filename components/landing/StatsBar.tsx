export const stats = [
  { value: "1,000+", label: "Active Vendors" },
  { value: "2,000+", label: "Customers Managed" },
  { value: "3", label: "Languages Supported" },
  { value: "4.8★", label: "Average Rating" },
];

export default function StatsBar() {
  return (
    <section className="py-10 border-y bg-background border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y lg:divide-y-0 divide-border border-border">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center p-6 text-center border-border">
              <div
                className="font-display text-4xl md:text-5xl font-bold mb-1 bg-gradient-orange bg-clip-text text-transparent"
              >
                {s.value}
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
