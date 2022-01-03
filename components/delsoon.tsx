import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Delsoon() {
  return (
    <div className="flex flex-col items-center bg-red-300 py-4 my-4">
      <h1 className="text-center">
        tutorial leftover. keeping it for a while, just in case. will delete
        soon.
        <br />
        <FontAwesomeIcon icon={faArrowDown} />
      </h1>
    </div>
  );
}
