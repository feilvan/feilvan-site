import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUndo,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div className="h-[36rem] overflow-hidden md:overflow-visible relative">
      <div className="text-gray-200">
        <div className="absolute -top-24 -right-16 text-[18rem] text-clip">
          <FontAwesomeIcon icon={faArrowUp} />
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
        <FontAwesomeIcon
          icon={faUndo}
          className="absolute top-64 -right-20 text-[18rem] text-clip"
        />
      </div>
      <div className="absolute -bottom-3 flex flex-col items-center w-full">
        <h1 className="uppercase font-readex font-[300] text-gray-200 text-4xl tracking-widest">
          realityreimagined
        </h1>
      </div>
      <div className="absolute bottom-20 left-6">
        <h1 className="font-readex font-bold text-brand text-8xl tracking-tighter">
          feilvan
        </h1>
        <div className="mt-4  tracking-widest font-inter font text-sm text-gray-600 space-y-1">
          <h1>digital imaging</h1>
          <h1>3d environment</h1>
          <h1>front-end</h1>
        </div>
      </div>
    </div>
  );
}
