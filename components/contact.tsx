import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="relative w-max flex flex-row space-x-4 tracking-wider">
      <Link href="/portfolio">
        <a className="py-2 px-6 bg-brand text-white border-2 border-brand rounded-md hover:shadow-xl hover:shadow-brand/50 transition">
          Artwork
        </a>
      </Link>
      <Popover className="relative w-full flex flex-col sm:flex-row">
        <Popover.Button className="py-2 px-6 bg-gray-100 text-brand border-2 border-brand rounded-md hover:shadow-lg hover:shadow-brand/30 transition">
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
          <div className="visible sm:invisible">
            <Pop />
          </div>
          <div className="invisible sm:visible">
            <PopSm />
          </div>
        </Transition>
      </Popover>
    </div>
  );
}

function Pop() {
  return (
    <Popover.Panel className="absolute flex flex-col w-[90vw] sm:w-max z-10 ml-0 sm:ml-4 mt-2 sm:-mt-16 py-2 px-2 bg-gray-100 rounded-md border-2 border-gray-200 shadow-lg shadow-gray-200">
      <div className="py-2 px-4">For business inquiry I prefer via email.</div>
      <PopBtn />
    </Popover.Panel>
  );
}

function PopSm() {
  return (
    <Popover.Panel className="absolute flex flex-col w-[90vw] sm:w-max z-10 ml-0 sm:ml-4 mt-2 sm:-mt-16 py-2 px-2 bg-gray-100 rounded-md border-2 border-gray-200 shadow-lg shadow-gray-200">
      <div className="py-2 px-4">For business inquiry I prefer via email.</div>
      <PopBtn />
    </Popover.Panel>
  );
}

function PopBtn() {
  return (
    <div>
      <a
        href="mailto:feilanfeilvan@gmail.com"
        className="contact-btn hover:contact-hover"
      >
        <FaEnvelope className="contact-icon" />
        Email
      </a>
      <a href="/engagement" className="contact-btn hover:contact-hover">
        <FaInstagram className="contact-icon" />
        Instagram
      </a>
      <a href="/security" className="contact-btn hover:contact-hover">
        <FaTwitter className="contact-icon" />
        Twitter
      </a>
    </div>
  );
}
