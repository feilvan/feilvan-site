import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.fog.min";

export default function Background() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          highlightColor: 0x137daa,
          midtoneColor: 0x9b259b,
          lowlightColor: 0xbe1717,
          baseColor: 0x0,
          blurFactor: 0.9,
          speed: 3.0,
          zoom: 0.4,
        })
      );
    }
  }, [vantaEffect]);

  return (
    <div
      className="fixed top-0 left-0 h-screen w-screen -z-50"
      ref={vantaRef}
    ></div>
  );
}
