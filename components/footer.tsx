import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="flex flex-col items-center mt-6 py-6 border-t-2">
      <div className="flex flex-row text-2xl space-x-3">
        <a
          href="https://www.instagram.com/feilvan"
          target="_blank"
          className="hover:text-brand transition"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.youtube.com/feilvan"
          target="_blank"
          className="hover:text-brand transition"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          href="https://www.twitter.com/feilvan"
          target="_blank"
          className="hover:text-brand transition"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.instagram.com/feilvan"
          target="_blank"
          className="hover:text-brand transition"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="mt-2">
        <h1 className="font-inter text-sm text-gray-400 tracking-wide">
          Made with **** by feilvan
        </h1>
      </div>
    </div>
  );
}
