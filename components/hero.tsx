export default function Hero() {
  return (
    <div className=" flex flex-col h-screen bg-gradient-to-t from-black via-transparent to-transparent">
      <div className="absolute h-full w-full grid place-items-center">
        <div>
          <div className="font-herosBold text-[13vw] leading-[11vw] border-b-2 pb-[4vw]">
            Reality
            <br />
            Reimagined
          </div>
          <div className=" flex flex-row justify-between mt-2 md:mt-4 font-herosItalic">
            <div>Freelance Digital Imaging Artist</div>
            <div className=" hidden md:block">
              Based in Banyuwangi, Indonesia
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
