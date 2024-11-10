import { CgSpinnerTwoAlt } from "react-icons/cg";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 dark:bg-neutral-950 dark:bg-opacity-90">
      <div className="animate-pulse">
        <CgSpinnerTwoAlt className="h-6 w-6 animate-spin text-neutral-300 dark:text-neutral-700" />
      </div>
    </div>
  );
}
