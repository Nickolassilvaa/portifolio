const getData = async (url: string) => {
  const response = await fetch(url, { cache: 'force-cache' });
  return response.json();
};

export async function RepoLanguages({ url }: { url?: string }) {
  if(!url) return null  
  
  const response = await getData(url);
  const languages = Object.keys(response);

  return (
    <div className="flex items-center justify-start gap-2 text-xs cursor-default">
      {languages.length > 0 ? languages.map((language, index) => (
        <span key={index} className="p-1 bg-purple-200 text-purple-800 font-bold rounded">{language}</span>
      )) : <span className="p-1 bg-purple-200 text-purple-800 font-bold rounded">MD</span>}
    </div>
  );
}
