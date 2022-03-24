import { FaHome, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaArrowUp, FaArrowDown, FaUndo } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="mt-8 flex flex-row space-x-5">
        <a
          href="https://www.feilvan.art/"
          target="_blank"
          className="my-auto hover:-translate-y-1 transition"
        >
          <FaHome size={28} />
        </a>
        <a
          href="https://www.instagram.com/feilvan/"
          target="_blank"
          className="my-auto hover:-translate-y-1 transition"
        >
          <FaInstagram size={28} />
        </a>
        <a
          href="mailto:feilvanfeilvan@gmail.com"
          target="_blank"
          className="my-auto hover:-translate-y-1 transition"
        >
          <FaEnvelope size={28} />
        </a>
      </div>

      <div className=" absolute bottom-4 space-x-1 flex flex-row text-neutral-500">
        <div>© {new Date().getFullYear()} - </div>
        <div className="my-auto flex flex-row">
          <FaArrowUp size={15} />
          <FaArrowDown size={15} />
          <FaUndo size={15} />
        </div>
      </div>
    </div>
  );
}
