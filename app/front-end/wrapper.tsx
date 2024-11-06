import Pill from "@/components/pill";

export default function Wrapper({
  children,
  title,
  tags,
  description,
}: {
  children: React.ReactNode;
  title: string;
  tags?: string[];
  description?: React.ReactNode;
}) {
  return (
    <div className="flex flex-grow flex-col items-center font-sans">
      <div className="mb-8 mt-16 w-full px-4 font-mono">
        <h1 className="text-2xl">{title}</h1>
        {tags && (
          <div className="mt-2 flex flex-wrap gap-x-2">
            {tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
        )}
        {description && <div className="mt-4 text-sm">{description}</div>}
      </div>
      <div className="grid min-h-full flex-grow place-items-center">
        {children}
      </div>
    </div>
  );
}
