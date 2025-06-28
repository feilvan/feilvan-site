export default function AboutSite() {
  const deps = [
    "vite",
    "preact",
    "typescript",
    "unocss",
    "react-flow",
    "lucide",
    "radix-ui",
  ];

  return (
    <div class="p-2 font-mono text-xs text-gray-400 flex flex-col whitespace-pre">
      <span>name</span>
      <span>{"  feilvan-site"}</span>
      <span>version</span>
      <span>{"  202506"}</span>
      <span>dependencies</span>
      {deps.map((dep, i) => (
        <span key={i}>{"  " + dep}</span>
      ))}
    </div>
  );
}
