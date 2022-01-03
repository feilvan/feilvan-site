import Link from "next/link";
import {
  FaBan,
  FaBomb,
  FaCheck,
  FaFlagUsa,
  FaHeartbeat,
  FaPlusCircle,
  FaPoo,
  FaRunning,
  FaSkull,
  FaSkullCrossbones,
  FaStar,
} from "react-icons/fa";

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
          <div className="relative -bottom-2 text-yellow-400">
            <FaStar />
          </div>{" "}
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
          check{" "}
          <div className="text-green-600">
            <FaCheck />
          </div>{" "}
          it I'm bougie
          <br />
          <span className="relative left-2 -top-3">
            flash bomb <FaBomb /> I'm blinding.
          </span>
        </p>
        <p className="relative top-16 -left-16">
          <span className="relative -top-2">Hands</span> above my{" "}
          <span className="relative top-2">
            <FaSkull />
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
          <div className="text-green-600">
            <FaHeartbeat />
          </div>
          .
          <br />
        </p>
        <p className="relative top-24">
          <span className="relative -top-4">camos</span> and Uzis{" "}
          <div className="text-lg relative -top-1">
            <FaFlagUsa />
          </div>
          <br />
          <span className="text-red-600 font-bold uppercase tracking-widest">
            bl<span className="text-xl">oo</span>d
          </span>
          ied <span className="text-xs">and</span> bruised me{" "}
          <div className="text-red-600 text-xl relative -left-2 top-2">
            <FaPlusCircle />
          </div>
          <br />
          <span className="uppercase font-bold tracking-widest">
            n<span className="relative -left-1 -top-1">o</span> way
          </span>{" "}
          <FaBan /> to get out
          <br />
          <span className="relative top-4">g</span>
          <span className="relative top-3">u</span>
          <span className="relative top-2">e</span>
          <span className="relative top-1">s</span>s I'm 'bout to{" "}
          <span className="font-bold text-red-600 uppercase tracking-tighter text-2xl relative top-1">
            die
          </span>{" "}
          <FaSkullCrossbones /> now.
          <br />
        </p>
        <p className="relative top-28">
          Holy{" "}
          <div className="text-red-500">
            <FaPoo />
          </div>
          , holy{" "}
          <div className="text-yellow-500 text-3xl relative top-3">
            <FaPoo />
          </div>
          , yeah I, gotta run{" "}
          <div className="relative left-16">
            <FaRunning />
          </div>
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
            Holy{" "}
            <div className="text-green-500">
              <FaPoo />
            </div>
            , holy{" "}
            <div className="text-blue-500">
              <FaPoo />
            </div>
            , it's a{" "}
            <span className="uppercase tracking-widest font-bold italic relative top-1 left-1">
              hit
            </span>
            and run{" "}
            <div className="relative left-12">
              <FaRunning />
            </div>
            <div className="relative">
              <FaRunning />
            </div>
          </span>
          <br />
          <span className="relative left-12 -top-2">Make a hit,</span> make a
          hit, like a machine gun{" "}
          <span className="text-xl relative top-3">
            <FaFlagUsa />
          </span>
          <br />
        </p>
      </div>
    </div>
  );
}
