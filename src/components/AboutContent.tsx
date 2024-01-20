export function AboutContent() {
  const staks = ["Next.js","ReactJS","JavaScript",
    "TypeScript","Git","Oracle", "SQL Server",
    "API Rest", "PL/SQL", ".NET", "ASP.NET"
  ];

  return (
    <div className="text-justify space-y-4 md:text-lg">
      <p>
        💼 Atualmente, trabalho com desenvolvimento de ERP e 
        APIs em um ambiente completamente Microsoft, utilizando o pacote .NET 
        e SQL Server. Além disso, presto consultoria de desenvolvimento para 
        empresas que buscam otimizar seus processos e implementar soluções 
        inovadoras.
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
