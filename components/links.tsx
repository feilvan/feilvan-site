import { FaYoutube, FaShoppingCart } from "react-icons/fa";

export default function Links() {
  return (
    <div className="grid place-items-center mt-8 space-y-3">
      <a
        href="https://www.youtube.com/feilvan"
        target="_blank"
        className=" hover:no-underline"
      >
        <div
          className="flex flex-row justify-between w-[90vw] sm:w-[36rem] px-4 py-4 bg-neutral-900 hover:bg-transparent rounded-md border border-transparent
        hover:border-neutral-500 transition"
        >
          <div className="space-y-1">
            <div className="font-herosBold">Editing Process</div>
            <div className="uppercase text-neutral-400 text-xs tracking-widest">
              Youtube
            </div>
          </div>
          <div className="my-auto">
            <FaYoutube size={28} />
          </div>
        </div>
      </a>

      <a
        href="https://www.teepublic.com/user/feilvan"
        target="_blank"
        className=" hover:no-underline"
      >
        <div
          className="flex flex-row justify-between w-[90vw] sm:w-[36rem] px-4 py-4 bg-neutral-900 hover:bg-transparent rounded-md border border-transparent
        hover:border-neutral-500 transition"
        >
          <div className="space-y-1">
            <div className="font-herosBold">T-shirt, phone cases, and more</div>
            <div className="uppercase text-neutral-400 text-xs tracking-widest">
              TeePublic
            </div>
          </div>
          <div className="my-auto">
            <FaShoppingCart size={28} />
          </div>
        </div>
      </a>
    </div>
  );
}
