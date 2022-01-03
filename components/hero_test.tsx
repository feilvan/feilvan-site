import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="h-screen grid place-items-center">
        <Image
          alt="Person in the middle of flower field"
          src="/images/banner.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="relative text-center">
          <h1 className="font-readex font-[200] uppercase text-4xl tracking-widest text-white">
            Reality Reimagined
          </h1>
          <h1>feilvan</h1>
        </div>
      </div>
    </div>
  );
}
