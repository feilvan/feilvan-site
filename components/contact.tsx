import { FaExternalLinkAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div id="contact" className=" flex flex-col items-center my-20">
      <div className=" flex flex-row max-w-7xl w-full">
        <div className=" basis-3/4 font-herosBold text-6xl">Contact</div>
        <div className=" basis-1/4 flex flex-col space-y-8 children:w-max">
          <a
            href="https://www.instagram.com/feilvan/"
            className=" flex flex-row"
          >
            Instagram
            <FaExternalLinkAlt className=" ml-4 my-auto" />
          </a>
          <a href="https://www.behance.net/feilvan" className=" flex flex-row">
            Behance
            <FaExternalLinkAlt className=" ml-4 my-auto" />
          </a>
          <a href="https://www.youtube.com/feilvan/" className=" flex flex-row">
            YouTube
            <FaExternalLinkAlt className=" ml-4 my-auto" />
          </a>
        </div>
      </div>
    </div>
  );
}
