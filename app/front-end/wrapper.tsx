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
    <div className="flex flex-col items-center font-sans">
      <div className="mb-8 mt-16 w-full max-w-lg px-4 font-mono">
        <h1 className="text-2xl">{title}</h1>
        {tags && (
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="mr-2 mt-2 rounded-full bg-gray-100 px-2 py-1 text-xs dark:bg-neutral-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {description && <div className="mt-4 text-sm">{description}</div>}
      </div>
      {children}
    </div>
  );
}
