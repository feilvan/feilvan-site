import { cn } from "@/utils";

export default function Pill({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "w-fit rounded-full border border-neutral-500/20 bg-neutral-500/10 px-3 py-1 text-xs",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
