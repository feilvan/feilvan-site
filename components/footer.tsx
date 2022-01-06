import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row text-2xl space-x-3 px-3 pt-6 border-t-2 border-gray-200">
        <a
          href="mailto:feilanfeilvan@gmail.com"
          target="_blank"
          className="hover:text-brand transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.instagram.com/feilvan"
          target="_blank"
          className="hover:text-brand transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/feilvan"
          target="_blank"
          className="hover:text-brand transition"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.twitter.com/feilvan"
          target="_blank"
          className="hover:text-brand transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/fuad-elhasan-irfani/"
          target="_blank"
          className="hover:text-brand transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/feilvan"
          target="_blank"
          className="hover:text-brand transition"
        >
          <FaGithub />
        </a>
      </div>
      <div className="mt-4 mb-8">
        <h1 className="font-inter text-sm text-gray-400 tracking-wide">
          © Fuad Elhasan Irfani 2022
        </h1>
      </div>
    </div>
  );
}
