import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div className="px-4 py-8 bg-brand/20">
      <div></div>
      <h1 className="font-readex font-bold text-4xl tracking-tighter">
        feilvan <FontAwesomeIcon icon={faUndo} />
      </h1>
    </div>
  );
}
