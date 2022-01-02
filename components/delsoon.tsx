import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Delsoon() {
  return (
    <div>
      <h1 className="flex flex-col items-center py-4 bg-red-300">
        tutorial leftover. will delete soon.{" "}
        <FontAwesomeIcon icon={faArrowDown} />
      </h1>
    </div>
  );
}
