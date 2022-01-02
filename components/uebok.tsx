import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faBomb,
  faCheck,
  faFlagUsa,
  faHeartbeat,
  faPlusCircle,
  faPoo,
  faRunning,
  faSkull,
  faSkullCrossbones,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function Uebok() {
  return (
    <div>
      <div className="flex flex-col items-center font-inter w-screen">
        <Link href="https://youtu.be/DFQNOFM8ftA">
          <a className="underline align-middle tracking-widest text-brand">
            uebok (ymir rmx)
          </a>
        </Link>
        <p className="relative top-8 -left-12">
          Luck doesn't like me
          <br />
          <span className="absolute -left-16">
            They trynna{" "}
            <span className="text-red-500 font-bold uppercase tracking-widest relative -top-1">
              wipe
            </span>{" "}
            me
          </span>
          <br />5{" "}
          <FontAwesomeIcon
            icon={faStar}
            className="relative -bottom-2 text-yellow-400"
          />{" "}
          I'm wanted
          <br />
          f*ck it I'm h<span className="relative top-1">a</span>
          <span className="relative top-2">u</span>
          <span className="relative top-3">n</span>
          <span className="relative top-4">ted.</span>
        </p>
        <p className="relative top-16 left-16">
          Stole from <span className="relative top-2">Swarovsky</span>
          <br />
          <span className="relative -top-1">they</span> brought the{" "}
          <span className="uppercase tracking-wider text-blue-500 font-bold">
            <span className="text-red-500 relative -top-1">sw</span>at
          </span>{" "}
          team
          <br />
          check <FontAwesomeIcon icon={faCheck} className="text-green-600" /> it
          I'm bougie
          <br />
          <span className="relative left-2 -top-3">
            flash bomb <FontAwesomeIcon icon={faBomb} /> I'm blinding.
          </span>
        </p>
        <p className="relative top-16 -left-16">
          <span className="relative -top-2">Hands</span> above my{" "}
          <span>
            <FontAwesomeIcon icon={faSkull} className="relative top-2" />
          </span>{" "}
          now
          <br />
          <span className="relative left-20 top-3">
            guns to my chest{" "}
            <span className="uppercase font-bold tracking-widest">ow</span>
          </span>
          <br />
          <span className="relative left-12">
            eyes on my neck<span className="relative top-1">piece</span>
          </span>
          <br />
          <span className="relative top-1">skipping</span> them heartbeats{" "}
          <FontAwesomeIcon icon={faHeartbeat} className="text-green-600" />.
          <br />
        </p>
        <p className="relative top-24">
          <span className="relative -top-4">camos</span> and Uzis{" "}
          <FontAwesomeIcon
            icon={faFlagUsa}
            className="text-lg relative -top-1"
          />
          <br />
          <span className="text-red-600 font-bold uppercase tracking-widest">
            bl<span className="text-xl">oo</span>d
          </span>
          ied <span className="text-xs">and</span> bruised me{" "}
          <FontAwesomeIcon
            icon={faPlusCircle}
            className="text-red-600 text-xl relative -left-2 top-2"
          />
          <br />
          <span className="uppercase font-bold tracking-widest">
            n<span className="relative -left-1 -top-1">o</span> way
          </span>{" "}
          <FontAwesomeIcon icon={faBan} /> to get out
          <br />
          <span className="relative top-4">g</span>
          <span className="relative top-3">u</span>
          <span className="relative top-2">e</span>
          <span className="relative top-1">s</span>s I'm 'bout to{" "}
          <span className="font-bold text-red-600 uppercase tracking-tighter text-2xl relative top-1">
            die
          </span>{" "}
          <FontAwesomeIcon icon={faSkullCrossbones} /> now.
          <br />
        </p>
        <p className="relative top-28">
          Holy <FontAwesomeIcon icon={faPoo} className="text-red-500" />, holy{" "}
          <FontAwesomeIcon
            icon={faPoo}
            className="text-yellow-500 text-3xl relative top-3"
          />
          , yeah I, gotta run{" "}
          <FontAwesomeIcon icon={faRunning} className="relative left-16" />
          <br />
          Make a hit,{" "}
          <span className="relative -left-16 top-1">make a hit,</span>
          <span className="relative -left-12">
            {" "}
            we're here for{" "}
            <span className="uppercase italic underline font-bold">
              <span className="relative top-1">f</span>u
              <span className="relative -top-1">n</span>
            </span>
          </span>
          <br />
          <span className="relative -left-8">
            Holy <FontAwesomeIcon icon={faPoo} className="text-green-500" />,
            holy <FontAwesomeIcon icon={faPoo} className="text-blue-500" />,
            it's a{" "}
            <span className="uppercase tracking-widest font-bold italic relative top-1 left-1">
              hit
            </span>
            and run{" "}
            <FontAwesomeIcon icon={faRunning} className="relative left-12" />
            <FontAwesomeIcon icon={faRunning} className="relative" />
          </span>
          <br />
          <span className="relative left-12 -top-2">Make a hit,</span> make a
          hit, like a machine gun{" "}
          <span>
            <FontAwesomeIcon
              icon={faFlagUsa}
              className="text-xl relative top-3"
            />
          </span>
          <br />
        </p>
      </div>
    </div>
  );
}
