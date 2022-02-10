export default function NewHeroStatusbar() {
  return (
    <div>
      <div className="relative lg:absolute text-center w-full flex flex-row py-4 justify-between visible lg:invisible">
        <div className="uppercase">Available for freelance work</div>
      </div>
      <div className="absolute lg:relative flex flex-row py-4 justify-between invisible lg:visible">
        <div>[clock]</div>
        <div className="uppercase">Available for freelance work</div>
      </div>
    </div>
  );
}
