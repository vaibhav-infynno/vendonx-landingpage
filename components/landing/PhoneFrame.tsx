import Image from "next/image";

interface PhoneFrameProps {
  size?: "lg" | "md" | "sm";
  alt?: string;
  className?: string;
  glow?: boolean;
}

export default function PhoneFrame({
  size = "md",
  alt = "VendoNX App",
  className = "",
  glow = false,
}: PhoneFrameProps) {
  const sizeClasses = {
    lg: "w-[320px]",
    md: "w-[250px]",
    sm: "w-[200px]",
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      
      {/* Glow Effect (optional) */}
      {glow && (
        <div className="absolute -inset-10 bg-gradient-to-br from-purple-500/30 to-sky-400/30 blur-3xl opacity-50 rounded-full pointer-events-none" />
      )}

      {/* Phone Image Only */}
      <div className="relative drop-shadow-2xl">
        <Image
          src="/phone-mockup.png"
          alt={alt}
          width={500}
          height={1000}
          className="w-full h-auto object-contain"
          priority={false}
        />
      </div>
    </div>
  );
}