import { Suspense } from "react";
import { Card } from "./Card";
import { CardSkeleton } from "./skeletons/CardSkeleton";

type RepositoriesType = {
  id: number;
  name: string;
  html_url: string;
  created_at: string;
  language: string;
  languages_url: string;
  homepage: string;
};

const getRepositories = async () => {
  const response = await fetch(
    "https://api.github.com/users/Nickolassilvaa/repos?sort=created_at"
  );
  return response.json();
};

export async function RepoContent() {
  const repositories: RepositoriesType[] = await getRepositories();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
      <Suspense
        fallback={
          <>
            {[...Array(9)].map((_, index) => (
              <CardSkeleton key={index}/>
            ))}
          </>
        }
      >
        {repositories.map((repo) => (
          <Card
            key={repo.id}
            languages_url={repo.languages_url}
            name={repo.name}
            html_url={repo.html_url}
            language={repo.language}
            created_at={repo.created_at}
            homepage={repo.homepage}
          />
        ))}
      </Suspense>
    </div>
  );
}
