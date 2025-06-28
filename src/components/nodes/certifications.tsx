type Certs = {
  title: string;
  issuer: string;
  issueDate: string;
};

const certs: Certs[] = [
  {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    issueDate: "May 2025",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issueDate: "May 2025",
  },
  {
    title: "C1 TOEFL ITP",
    issuer: "ETS",
    issueDate: "May 2025",
  },
];

export default function Certifications() {
  return (
    <div class="flex flex-col p-4 gap-4">
      {certs.map((cert, i) => (
        <div key={i} class="flex justify-start gap-4">
          <span class="font-mono text-gray-400">{i + 1}</span>
          <div class="flex flex-col">
            <span class="font-semibold">{cert.title}</span>
            <span class="text-sm text-gray-400">{cert.issuer}</span>
            <span class="text-sm text-gray-400">{cert.issueDate}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
