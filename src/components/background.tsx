import { useEffect, useRef } from "react";

// credit: https://codepen.io/nicoptere/pen/vXoxJz

type PRNGType = {
  MT: Uint32Array;
  index: number;
  setSeed: (seed: number) => void;
  extractNumber: () => number;
  generateNumbers: () => void;
  random: () => number;
};

const PRNG: PRNGType = (function () {
  const exports: Partial<PRNGType> = {};

  function setSeed(seed: number) {
    exports.MT = new Uint32Array(624);
    exports.index = 0;
    exports.MT[0] = seed >>> 0;
    for (let i = 1; i < 624; i++) {
      exports.MT[i] =
        (1812433253 *
          ((exports.MT[i - 1]! ^ (exports.MT[i - 1]! >>> 30)) + i)) >>>
        0;
    }
  }

  function extractNumber() {
    if (exports.index === 0) {
      exports.generateNumbers!();
    }

    let y = exports.MT![exports.index!];
    y = y ^ (y >>> 11);
    y = y ^ ((y << 7) & 2636928640);
    y = y ^ ((y << 15) & 4022730752);
    y = y ^ (y >>> 18);

    exports.index = (exports.index! + 1) % 624;
    return y >>> 0;
  }

  function generateNumbers() {
    for (let i = 0; i < 624; i++) {
      const y =
        (exports.MT![i] & 0x80000000) +
        (exports.MT![(i + 1) % 624] & 0x7fffffff);
      exports.MT![i] = exports.MT![(i + 397) % 624] ^ (y >>> 1);
      if (y % 2 !== 0) {
        exports.MT![i] = exports.MT![i] ^ 2567483615;
      }
    }
  }

  function random() {
    return exports.extractNumber!() / 0x7fffffff;
  }

  exports.setSeed = setSeed;
  exports.extractNumber = extractNumber;
  exports.generateNumbers = generateNumbers;
  exports.random = random;

  setSeed(0);

  return exports as PRNGType;
})();

function squareDistance(v1: number[], v2: number[]) {
  var dx = v2[0] - v1[0];
  var dy = v2[1] - v1[1];
  return dx * dx + dy * dy;
}
function norm(t: number, a: number, b: number) {
  return (t - a) / (b - a);
}

let vertices: number[][];

function yolo(
  ctx: CanvasRenderingContext2D,
  vertices: number[][],
  size: number,
  _w: number,
  _h: number
) {
  //measures of an equilateral triangle
  var sides = 3;
  var l = 2 * Math.sin(Math.PI / sides); //side length
  var a = l / (2 * Math.tan(Math.PI / sides)); //apothem
  var h = 1 + a; //radius + apothem

  size = size || 1;
  l *= size;
  h *= size;

  var mx = 2 * Math.ceil(_w / l);
  var my = Math.ceil(_h / h);

  var fills: number[][] = [];
  ctx.beginPath();
  vertices.forEach(function (v) {
    var cell_x = Math.round(norm(v[0], 0, _w) * mx);
    var cell_y = Math.round(norm(v[1], 0, _h) * my);

    var md = Number.POSITIVE_INFINITY,
      d,
      x,
      y,
      ix,
      iy,
      ps = [];
    for (var i = cell_x - 2; i < cell_x + 2; i++) {
      for (var j = cell_y - 2; j < cell_y + 2; j++) {
        if (
          (Math.abs(i) % 2 == 1 && Math.abs(j) % 2 == 0) ||
          (Math.abs(i) % 2 == 0 && Math.abs(j) % 2 == 1)
        ) {
          ix = (i * l) / 2;
          iy = j * h;

          d = squareDistance([ix, iy], v);
          if (d < md) {
            md = d;
            x = (i * l) / 2;
            y = j * h;
            ps.unshift(x, y);
          }
        }
      }
    }
    if (PRNG.random() > 0.5) {
      ctx.moveTo(v[0], v[1]);
      ctx.lineTo(ps[0], ps[1]);
    } else {
      ctx.moveTo(ps[0], ps[1]);
      ctx.lineTo(ps[2], ps[3]);
      if (PRNG.random() > 0.95) {
        fills.push(ps);
      }
    }
  });
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = "#FFF";
  fills.forEach(function (ps) {
    ctx.moveTo(ps[0], ps[1]);
    ctx.lineTo(ps[2], ps[3]);
    ctx.lineTo(ps[4], ps[5]);
    ctx.lineTo(ps[0], ps[1]);
  });
  ctx.fill();
}

function runAnimation(canvas: HTMLCanvasElement, container: HTMLDivElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  function update() {
    PRNG.setSeed(3);

    let r, a, v, o;
    const count = 20;
    const spawn = 40;
    const offset = 100;
    vertices = [];
    for (let i = 0; i < count; i++) {
      r = ((PRNG.random() - 0.5) * container.offsetWidth) / 2;
      a =
        (i % 2 == 0 ? 1 : -1) * Date.now() * 0.0001 +
        PRNG.random() * Math.PI * 2;
      v = [Math.cos(a) * r, Math.sin(a) * r];
      vertices.unshift(v);

      for (let j = 0; j < spawn * (0.5 + PRNG.random()); j++) {
        r = PRNG.random() * offset;
        a =
          (j % 2 == 0 ? 1 : -1) * Date.now() * 0.0002 +
          PRNG.random() * Math.PI * 2;
        o = vertices[0];
        v = [o[0] + Math.cos(a % r) * r, o[1] + Math.sin((a % r) * 2) * r];
        vertices.push(v);
      }
    }
    if (!ctx) return;
    ctx.restore();
    ctx.save();

    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    ctx.globalAlpha = 1;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.translate(canvas.width / 2, canvas.height / 2);

    ctx.strokeStyle = "#FFF";
    const m = 1024 / 8;
    for (let i = 8; i <= m; i *= 2) {
      ctx.globalAlpha = (1 - i / m) * 0.1;
      yolo(ctx, vertices, i, canvas.width, canvas.height);
    }
    requestAnimationFrame(update);
  }

  update();
}

export default function Background() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let canvas = canvasRef.current;

    if (!container) return;

    if (!canvas) {
      canvas = document.createElement("canvas");
      canvasRef.current = canvas;
      container.appendChild(canvas);
    }

    // Set canvas style to fill the container
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "-1";
    canvas.style.opacity = "0.4";

    function resizeCanvas() {
      if (!canvas || !container) return;
      const dpr = window.devicePixelRatio || 1;
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resizeCanvas();

    function handleResize() {
      resizeCanvas();
    }

    window.addEventListener("resize", handleResize);

    runAnimation(canvas, container);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvas && canvas.parentNode === container) {
        container.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-1 w-full h-full"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    ></div>
  );
}
