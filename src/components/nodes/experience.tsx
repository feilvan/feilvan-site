type Exp = {
  title: string;
  place: string;
  period: string;
  techs: string[];
};

const exps: Exp[] = [
  {
    title: "Front-End Developer Intern",
    place:
      "Badan Pendidikan dan Pelatihan Keuangan, Kementerian Keuangan Republik Indonesia",
    period: "Feb 2023 - Jun 2023",
    techs: ["React", "Next,js"],
  },
];

export default function Experience() {
  return (
    <div class="flex flex-col p-4 gap-4 w-[360px]">
      {exps.map((exp, i) => (
        <div key={exp.title} class="flex justify-start gap-4">
          <span class="font-mono text-gray-400">{i + 1}</span>
          <div>
            <h3 className="font-semibold">{exp.title}</h3>
            <p className="text-sm text-gray-400">{exp.place}</p>
            <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
            <div className="flex gap-2 flex-wrap">
              {exp.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-0.5 font-mono text-xs text-gray-400 rounded-full border border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
