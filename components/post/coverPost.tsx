import Image from "next/image";

export default function CoverPost({ title, src }) {
  return (
    <div className="relative h-[40rem] w-full">
      <Image src={src} alt={title} layout="fill" objectFit="cover" />
    </div>
  );
}
