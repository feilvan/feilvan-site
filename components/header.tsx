import Image from "next/image";
import profile from "../public/images/profile.jpg";

export default function Header() {
  return (
    <div className="mt-12">
      <div className="grid place-items-center">
        <div className=" w-[10rem]">
          <Image
            src={profile}
            layout="responsive"
            placeholder="blur"
            className=" rounded-full"
          />
        </div>
        <div className=" mt-8 font-herosBoldItalic text-3xl tracking-widest">
          FEILVAN
        </div>
        <div className=" mt-1 tracking-wide">Digital Imaging Artist</div>
      </div>
    </div>
  );
}
