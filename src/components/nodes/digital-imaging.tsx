import { Globe } from "lucide-preact";
import Folder from "../folder";

const items = [
  {
    title: "200329",
    image: "/images/digital-imaging/200329.webp",
  },
  {
    title: "200424",
    image: "/images/digital-imaging/200424.webp",
  },
  {
    title: "200509",
    image: "/images/digital-imaging/200509.webp",
  },
  {
    title: "200523",
    image: "/images/digital-imaging/200523.webp",
  },
  {
    title: "201115",
    image: "/images/digital-imaging/201115.webp",
  },
  {
    title: "210327",
    image: "/images/digital-imaging/210327.webp",
  },
];

export default function DigitalImaging() {
  return (
    <>
      <div class="flex flex-col gap-4 p-4">
        <a
          href="https://www.instagram.com/feilvan/"
          target="_blank"
          rel="noopener noreferrer"
          class="border border-gray-600/20 hover:border-gray-600 bg-gray-800/80 hover:bg-gray-800 text-sm text-gray-400 py-2 px-3 rounded-lg flex items-center gap-2 transition"
        >
          <Globe size={16} />
          <span>https://www.instagram.com/feilvan/</span>
        </a>
        <Folder items={items} />
      </div>
    </>
  );
}
