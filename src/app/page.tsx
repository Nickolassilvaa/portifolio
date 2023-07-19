import { AboutContent } from "@/components/AboutContent";
import { Header } from "@/components/Header";
import { RepoContent } from "@/components/RepoContent";
import { TitleContent } from "@/components/TitleContent";

export default async function Home() {
  return (
    <div className=" dark:divide-zinc-700">
      <div className="divide-y">
        <Header />
        <section className="2xl:max-w-[1080px] max-w-[768px] w-full mx-auto px-2 py-10 space-y-10">
          <div className="space-y-3">
            <TitleContent />
            <AboutContent />
          </div>

          <div className="space-y-5">
            <h2 className="text-4xl font-bold">Repositórios</h2>
            <RepoContent />
          </div>
        </section>
      </div>
      <footer className="flex items-center justify-center pt-5 pb-10">
        <span>Criado por &copy;<span className="font-bold">Nickolas Rodrigues</span> 🚀</span>
      </footer>
    </div>
  );
}
