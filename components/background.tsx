import Image from "next/image";
import banner from "../public/images/banner2.jpg";

export default function Background() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen -z-50">
      <Image
        data-scroll
        data-scroll-speed="-4"
        src={banner}
        placeholder="blur"
        layout="fill"
        objectFit="cover"
        alt=""
      />
    </div>
  );
}
