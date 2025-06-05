import Carousel from "../carousel";

const slides = [
  "/images/digital-imaging/200329.webp",
  "/images/digital-imaging/200424.webp",
  "/images/digital-imaging/200509.webp",
  "/images/digital-imaging/200523.webp",
  "/images/digital-imaging/201115.webp",
  "/images/digital-imaging/210327.webp",
];

export default function DigitalImaging() {
  return (
    <>
      <Carousel slides={slides} options={{ loop: true }} />
      <div class="flex justify-center text-sm mb-4 text-gray-400 whitespace-pre">
        <span>{"More on "}</span>
        <a
          href="https://www.instagram.com/feilvan/"
          target="_blank"
          rel="noopener noreferrer"
          class="underline"
        >
          Instagram
        </a>
      </div>
    </>
  );
}
