export default function About() {
  return (
    <div className=" flex relative h-screen w-screen">
      <div className=" h-full w-full grid place-items-center">
        <div className=" flex flex-col space-y-8 italic text-xl ">
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1"
          >
            Hello! I&apos;m FEILVAN, a self-taught Digital Imaging Artist since
            2017
          </div>
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-1"
          >
            Currently learning 3DCG, Graphic Design, and Front-End Web
            Development
          </div>
        </div>
      </div>
    </div>
  );
}
