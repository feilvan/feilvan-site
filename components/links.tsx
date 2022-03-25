import { FaYoutube, FaShoppingCart, FaInfoCircle } from "react-icons/fa";

const list = [
  {
    title: "Editing Process",
    subtitle: "YouTube",
    href: "https://www.youtube.com/feilvan",
    icon: <FaYoutube size={28} />,
    noinfo: " ",
  },
  {
    title: "T-shirt, phone cases, and more",
    subtitle: "TeePublic",
    href: "https://www.teepublic.com/user/feilvan",
    icon: <FaShoppingCart size={28} />,
    info: "I haven't updated the catalog for a while",
  },
];

export default function Links() {
  let isInfo = "";
  return (
    <div className="grid place-items-center mt-8 space-y-3">
      {list.map((item) => (
        <a
          href={item.href}
          target="_blank"
          className="w-[90vw] sm:w-[36rem] px-4 py-3 bg-neutral-900 hover:bg-transparent rounded-md border border-neutral-700
        hover:border-neutral-500 transition hover:no-underline "
        >
          {(isInfo = item.noinfo)}
          <div className="flex flex-row justify-between">
            <div className="w-[80%] space-y-1">
              <div className="font-herosBold">{item.title}</div>
              <div className="uppercase text-neutral-400 text-xs tracking-widest">
                {item.subtitle}
              </div>
            </div>
            <div className="my-auto">{item.icon}</div>
          </div>
          {!isInfo && (
            <div className="flex flex-row px-2 py-2 mt-2 bg-white/10 rounded-md tracking-wide text-xs">
              <FaInfoCircle className="my-auto mr-2" />
              {item.info}
            </div>
          )}
        </a>
      ))}
    </div>
  );
}
