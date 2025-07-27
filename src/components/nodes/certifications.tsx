type Certs = {
  title: string;
  issuer: string;
  issueDate: string;
  link: string;
};

const certs: Certs[] = [
  {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    issueDate: "May 2025",
    link: "https://www.freecodecamp.org/certification/FuadElhasanIrfani/front-end-development-libraries",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issueDate: "May 2025",
    link: "https://www.freecodecamp.org/certification/FuadElhasanIrfani/responsive-web-design",
  },
  {
    title: "C1 TOEFL ITP",
    issuer: "ETS",
    issueDate: "May 2025",
    link: "https://feilvan.art/misc/TOEFL%20ITP.pdf",
  },
];

export default function Certifications() {
  return (
    <div class="flex flex-col p-4 gap-4">
      {certs.map((cert, i) => (
        <div key={i} class="flex justify-start gap-4">
          <span class="font-mono text-gray-400">{i + 1}</span>
          <div class="flex flex-col">
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold underline"
            >
              {cert.title}
            </a>
            <span class="text-sm text-gray-400">{cert.issuer}</span>
            <span class="text-sm text-gray-400">{cert.issueDate}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
