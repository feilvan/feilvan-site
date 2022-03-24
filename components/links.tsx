import { FaYoutube, FaShoppingCart } from "react-icons/fa";
import Example from "./popover_example";

const list = [
  {
    title: "Editing Process",
    subtitle: "YouTube",
    href: "https://www.youtube.com/feilvan",
    icon: <FaYoutube size={28} />,
  },
  {
    title: "T-shirt, phone cases, and more",
    subtitle: "TeePublic",
    href: "https://www.teepublic.com/user/feilvan",
    icon: <FaShoppingCart size={28} />,
  },
];

export default function Links() {
  return (
    <div className="grid place-items-center mt-8 space-y-3">
      {list.map((item) => (
        <a href={item.href} target="_blank" className=" hover:no-underline">
          <div
            className="flex flex-row justify-between w-[90vw] sm:w-[36rem] px-4 py-4 bg-neutral-900 hover:bg-transparent rounded-md border border-transparent
        hover:border-neutral-500 transition"
          >
            <div className="space-y-1">
              <div className="font-herosBold">{item.title}</div>
              <div className="uppercase text-neutral-400 text-xs tracking-widest">
                {item.subtitle}
              </div>
            </div>
            <div className="my-auto">{item.icon}</div>
          </div>
        </a>
      ))}

      <Example />
    </div>
  );
}
