export default function BpHelper() {
  return (
    <div
      data-scroll
      data-scroll-sticky
      data-scroll-target="main"
      className="flex flex-row justify-center w-screen absolute bottom-4"
    >
      <div className="  z-50 border rounded-md py-1 px-6 bg-black/50">
        <div className=" block sm:hidden">{"<"}SM</div>
        <div className=" hidden sm:block md:hidden">SM</div>
        <div className=" hidden md:block lg:hidden">MD</div>
        <div className=" hidden lg:block xl:hidden">LG</div>
        <div className=" hidden xl:block 2xl:hidden">XL</div>
        <div className=" hidden 2xl:block">2XL</div>
      </div>
    </div>
  );
}
