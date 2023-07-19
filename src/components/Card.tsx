import { Link2 } from "lucide-react";
import Link from "next/link";
import { RepoLanguages } from "./RepoLanguages";

interface CardProps {
  name: string;
  html_url: string;
  created_at: string;
  language: string;
  languages_url?: string;
}

export function Card({name, html_url, language, created_at, languages_url}: CardProps) {
  return (
    <div className="dark:bg-zinc-800 bg-zinc-200 rounded-lg p-4 space-y-2 md:hover:shadow-xl md:hover:scale-105 transition-transform duration-200">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-base md:text-xl">{name}</h2>
        <Link href={html_url} target="_blank" className="hover:text-zinc-700">
          <Link2 size={18}/>
        </Link>
      </div>
      <RepoLanguages url={languages_url} />
      <div className="flex items-center justify-start gap-2">
        <div className="w-3 h-3 rounded-full bg-green-700"/>
        <p className="text-xs font-semibold">{language ? language : 'MarkDown'}</p>
      </div>
      <div className="text-xs flex items-center justify-start gap-2">
        <span>Criado em: </span>
        {new Date(created_at).toLocaleDateString()}
      </div>
    </div>
  )
}
