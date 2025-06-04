import { type ReactNode } from "react";

export default function OldTVEffect({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden brightness-110 contrast-120">
      {children}

      {/* Scan lines overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 z-10"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(255,255,255,0.1) 4px, rgba(255,255,255,0.1) 8px)",
          animation: "scanlines 0.1s linear infinite",
        }}
      />

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.4) 90%,  rgba(0, 0, 0, 0.8) 100%)",
        }}
      />

      {/* Slight screen glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0, 255, 0, 0.3) 0%, transparent 70%)",
          animation: "glow 2s ease-in-out infinite alternate",
        }}
      />
    </div>
  );
}
