import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="relative w-max flex flex-row space-x-4 tracking-wider">
      <Link href="/portfolio">
        <a className="py-2 px-6 bg-brand text-white border-2 border-brand rounded hover:shadow-xl hover:shadow-brand/50 transition">
          Artwork
        </a>
      </Link>
      <Popover className="relative w-full flex flex-row">
        <Popover.Button className="py-2 px-6 bg-gray-100 text-brand border-2 border-brand rounded hover:shadow-lg hover:shadow-brand/30 transition">
          Contact
        </Popover.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Popover.Panel className="absolute flex flex-row space-x-8 z-10 ml-4 py-2 px-6 bg-gray-100 text-brand rounded border-2 border-gray-200 shadow-lg shadow-gray-200">
            <a href="mailto:feilanfeilvan@gmail.com">
              <FaEnvelope className="inline" />
            </a>
            <a href="/engagement">
              <FaInstagram className="inline" />
            </a>
            <a href="/security">
              <FaTwitter className="inline" />
            </a>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
