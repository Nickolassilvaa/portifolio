export function AboutContent() {
  const staks = ["Next.js","ReactJS","Angular","HTML5","CSS","JavaScript",
    "TypeScript","Tailwind CSS","Styled-Components","SASS","Git","Oracle",
    "API Rest",
  ];

  return (
    <div className="text-justify space-y-4 md:text-lg">
      <p>
        💼 Sou um Analista Desenvolvedor que cria soluções inovadoras e
        eficientes. Desenvolvedor frontend com experiência em desenvolvimento e
        manutenção de aplicações web. Minhas Power skills: colaboração em
        equipe, resolução de problemas, comunicação clara, adaptabilidade e
        orientação para o cliente.
      </p>

      <div className="space-y-2 max-w-2xl text-sm md:text-base">
        <h2 className="text-xl font-semibold">🚀 Habilidades Técnicas:</h2>
        <div className="w-full flex justify-stretch items-center gap-2 flex-wrap">
          {staks.map((stack, index) => (
            <div key={index} className="min-w-fit w-fit py-2 px-4 rounded bg-purple-200 text-sm font-bold text-purple-800">
              <p>{stack}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
