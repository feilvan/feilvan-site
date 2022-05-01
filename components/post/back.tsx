import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function Back() {
  return (
    <div>
      <Link href="/" passHref>
        <a className=" fixed w-8 h-8 border z-10 text-neutral-500 overflow-hidden">
          <FontAwesomeIcon icon={faChevronLeft} size={"xs"} />
        </a>
      </Link>
    </div>
  );
}
