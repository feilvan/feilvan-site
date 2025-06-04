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
  return <Carousel slides={slides} options={{ loop: true }} />;
}
