export default function NewHeroStatusbar() {
  return (
    <div>
      <div className="relative lg:absolute flex flex-row py-4 justify-between visible lg:invisible">
        <div className="text-center w-full uppercase">
          Available for freelance work
        </div>
      </div>
      <div className="absolute lg:relative flex flex-row py-4 justify-between invisible lg:visible">
        <div>[clock]</div>
        <div className="uppercase">Available for freelance work</div>
      </div>
    </div>
  );
}
