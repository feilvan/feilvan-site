export default function SectionName({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" font-semibold text-neutral-500 uppercase tracking-widest text-sm">
      {children}
    </div>
  );
}
