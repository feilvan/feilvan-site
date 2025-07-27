import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { useStore } from "../util/state";

gsap.registerPlugin(useGSAP);

export default function Loading() {
  const { preloadedCount } = useStore();
  const gridRefs = useRef<(HTMLDivElement | null)[][]>(
    Array.from({ length: 10 }, () => Array(10).fill(null))
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useGSAP(() => {
    if (preloadedCount === 2) {
      // Fade out grid squares in random order, quicker
      const squares: HTMLDivElement[] = [];
      for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
          const ref = gridRefs.current[row][col];
          if (ref) squares.push(ref);
        }
      }
      // Shuffle squares array for random order
      for (let i = squares.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [squares[i], squares[j]] = [squares[j], squares[i]];
      }
      gsap.to(squares, {
        opacity: 0,
        stagger: 0.015, // quicker stagger
        duration: 0.18, // quicker fade
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => setHidden(true),
          });
        },
      });
    }
  }, [preloadedCount]);

  if (hidden) return null;

  return (
    <div
      ref={containerRef}
      className="w-[100svw] h-[100svh] flex flex-col justify-center items-center text-white absolute top-0 left-0"
    >
      <div className="w-full h-full absolute top-0 left-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, row) =>
          Array.from({ length: 10 }).map((_, col) => (
            <div
              key={`${row}-${col}`}
              ref={(el) => (gridRefs.current[row][col] = el)}
              style={{
                left: `${col * 10}%`,
                top: `${row * 10}%`,
              }}
              className="absolute w-[10%] h-[10%] bg-gray-900 box-border"
            />
          ))
        )}
      </div>
    </div>
  );
}
