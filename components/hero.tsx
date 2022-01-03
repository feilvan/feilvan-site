import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUndo,
  faArrowDown,
  faArrowUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div className="h-screen  relative">
      <div className="text-gray-200 text-[18rem] sm:text-[22rem] lg:text-[24rem]">
        <div className="absolute -top-16 -right-16 text-clip">
          <FontAwesomeIcon icon={faArrowUp} />
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
        <FontAwesomeIcon
          icon={faUndo}
          className="absolute top-72 sm:top-[22rem] lg:top-[24rem] -right-20 text-clip"
        />
      </div>
      <div className="flex flex-col absolute -left-3 top-20 text-gray-200 text-[6rem]">
        <FontAwesomeIcon icon={faTimes} />
        <FontAwesomeIcon icon={faTimes} />
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className="absolute bottom-40 left-6">
        <p className="qt pl-12 mb-4 text-xl text-gray-500 tracking-wider">
          feilvan
        </p>
        <h1 className="font-readex font-bold text-brand text-7xl sm:text-8xl lg:text-9xl tracking-tighter">
          Reality
          <br />
          Reimagined
        </h1>
        <div className="mt-8  tracking-widest font-inter font text-sm text-gray-600 space-y-1">
          <p>digital imaging</p>
          <p>3d environment</p>
          <p>front-end</p>
        </div>
      </div>
    </div>
  );
}
