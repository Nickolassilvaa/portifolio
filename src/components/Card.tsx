import { Eye, LinkIcon, Github } from "lucide-react";
import Link from "next/link";
import { RepoLanguages } from "./RepoLanguages";

interface CardProps {
  name: string;
  html_url: string;
  created_at: string;
  language: string;
  languages_url: string;
  homepage: string;
}

export function Card({
  name,
  html_url,
  language,
  created_at,
  languages_url,
  homepage,
}: CardProps) {
  return (
    <div className="dark:bg-zinc-800 bg-zinc-200 rounded-lg p-4 space-y-2 md:hover:shadow-xl md:hover:scale-105 transition-transform duration-200">
      <div className="flex items-center justify-between">
        <Link href={html_url} className="font-bold text-base md:text-xl flex items-center gap-1 hover:underline hover:underline-offset-2" target="_blank">
          {name}
          <LinkIcon size={12} name="Link para repositório"/>
        </Link>
          
        <div className="flex items-center justify-center gap-4">
          {homepage && (
            <Link
              href={homepage}
              target="_blank"
              className="hover:text-zinc-700 p-2 md:p-0"
            >
              <Eye size={18} name="Link para projeto publicado"/>
            </Link>
          )}
          <Link href={html_url} target="_blank" className="hover:text-zinc-700 p-2 md:p-0">
            <Github size={18} name="GitHub repositório" />
          </Link>
        </div>
      </div>
      <RepoLanguages url={languages_url} />
      <div className="flex items-center justify-start gap-2">
        <div className="w-2 h-2 rounded-full bg-sky-500" />
        <p className="text-xs font-semibold">
          {language ? language : "MarkDown"}
        </p>
      </div>
      <div className="text-xs flex items-center justify-start gap-2">
        <span>Criado em: </span>
        {new Date(created_at).toLocaleDateString()}
      </div>
    </div>
  );
}
