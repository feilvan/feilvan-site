import Image from "next/image";
import Link from "next/link";

import art220710_2 from "../public/images/art/220710_2.png";
import art220702 from "../public/images/art/220702.png";
import art220102_0 from "../public/images/art/220102_0.jpg";
import art210622_0 from "../public/images/art/210622_0.jpg";
import art210327 from "../public/images/art/210327.jpg";
import art210306 from "../public/images/art/210306.jpg";
import art210217 from "../public/images/art/210217.jpg";
import art210131 from "../public/images/art/210131.jpg";
import art201115 from "../public/images/art/201115.jpg";
import art201024 from "../public/images/art/201024.jpg";
import art201010 from "../public/images/art/201010.jpg";
import art200919 from "../public/images/art/200919.jpg";
import art200827 from "../public/images/art/200827.jpg";
import art200805 from "../public/images/art/200805.jpg";
import art200713 from "../public/images/art/200713.jpg";
import art200523 from "../public/images/art/200523.jpg";
import art200509 from "../public/images/art/200509.jpg";
import art200315 from "../public/images/art/200315.jpg";

export default function DigitalImaging() {
  return (
    <>
      <div className=" flex flex-row flex-wrap">
        <Item
          image={art220710_2}
          href="https://www.instagram.com/p/Cf33Y5JLNXr/"
          title="Strayed"
        />
        <Item
          image={art220702}
          href="https://www.instagram.com/p/CfjTWCnhQ8q/"
          title="Untouched"
        />
        <Item
          image={art220102_0}
          href="https://www.instagram.com/p/CYT0L33hGmZ/"
          title="Flux"
        />
        <Item
          image={art210622_0}
          href="https://www.instagram.com/p/CQlbnOAr4um/"
          title="Over"
        />
        <Item
          image={art210327}
          href="https://www.instagram.com/p/CM9sCVGHR_a/"
          title="Revolve"
        />
        <Item
          image={art210306}
          href="https://www.instagram.com/p/CMFCiIyDb3D/"
          title="Beneath"
        />
        <Item
          image={art210217}
          href="https://www.instagram.com/p/CLjkL4Znr_q/"
          title="Desire"
        />
        <Item
          image={art210131}
          href="https://www.instagram.com/p/CK88PROnuMI/"
          title="Spellbind"
        />
        <Item
          image={art201115}
          href="https://www.instagram.com/p/CHpzETdHZFa/"
          title="Figment"
        />
        <Item
          image={art201024}
          href="https://www.instagram.com/p/CGxJjsXnf93/"
          title="Solitude"
        />
        <Item
          image={art201010}
          href="https://www.instagram.com/p/CGPrN3VHXA2/"
          title="Polar"
        />
        <Item
          image={art200919}
          href="https://www.instagram.com/p/CFXBw5Uneba/"
          title="Space Station"
        />
        <Item
          image={art200827}
          href="https://www.instagram.com/p/CEeYPdmnCKD/"
          title="Guide"
        />
        <Item
          image={art200805}
          href="https://www.instagram.com/p/CDoTjzuH0uB/"
          title="Myth"
        />
        <Item
          image={art200713}
          href="https://www.instagram.com/p/CC3YdBinFkI/"
          title="Heat"
        />
        <Item
          image={art200523}
          href="https://www.instagram.com/p/CAiCVrtHlrU/"
          title="Serene"
        />
        <Item
          image={art200509}
          href="https://www.instagram.com/p/B_9_OJTn7-U/"
          title="Twin"
        />
        <Item
          image={art200315}
          href="https://www.instagram.com/p/B_Z8GjxHe-F/"
          title="Essence"
        />
      </div>
    </>
  );
}

function Item({ image, href, title }) {
  return (
    <>
      <Link
        href={href}
        target="_blank"
        className=" relative w-full sm:w-1/2 md:w-1/3 overflow-hidden"
      >
        <Image src={image} placeholder="blur" alt="Art by FEILVAN" />
        <div className=" absolute top-0 left-0 w-full h-full bg-transparent hover:bg-black/60 text-transparent hover:text-white transition-all scale-125 hover:scale-100 flex">
          <span className=" mx-auto my-auto uppercase text-sm">{title}</span>
        </div>
      </Link>
    </>
  );
}
