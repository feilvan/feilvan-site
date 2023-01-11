import Tab from "../components/tab";

export default function Home() {
  return (
    <>
      <Introduction />
      <Tab />
    </>
  );
}

function Introduction() {
  return (
    <>
      <div className=" space-y-1 my-8">
        <div className=" text-neutral-600">Hello! 👋</div>
        <div className=" text-neutral-600">
          {" "}
          My name is{" "}
          <span className=" font-medium text-black">Fuad Elhasan Irfani</span>
        </div>
        <div className=" text-neutral-600">
          I'm a{" "}
          <span className=" font-medium text-black">
            Digital Imaging Artist
          </span>{" "}
          and a{" "}
          <span className=" font-medium text-black">Frontend Developer</span>
        </div>
      </div>
    </>
  );
}
