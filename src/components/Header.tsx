import Image from 'next/image'
import { ToggleTheme } from "./ToggleTheme";
import { Github, Linkedin, Paperclip } from 'lucide-react';
import Link from 'next/link';

const getData = async () => {
  const response = await fetch('https://api.github.com/users/Nickolassilvaa', {
    cache: 'force-cache'
  })
  return response.json();
}

export async function Header() {
  const avatar = await getData()

  return (
    <div className='2xl:max-w-[1080px] max-w-[768px] w-full mx-auto py-4 flex items-center justify-between px-2'>
      <div className='flex items-center justify-center gap-2'>
        <Image src={avatar.avatar_url} alt="Avatar" width={100} height={100} className="w-10 h-10 rounded-full ring-1 ring-zinc-800"/>
        <span className='hidden md:block font-semibold text-sm'>{avatar.name}</span>
      </div>
      <div className='flex items-center justify-center gap-6'>
        <div className='flex items-center justify-center gap-4'>
          <Link className='flex items-center justify-center gap-2 p-1 border-2 border-transparent hover:text-zinc-500 dark:hover:text-zinc-300 hover:transition-colors' href="/nickolas_rodrigues.pdf" target='_blank'>
            <span className='underline underline-offset-4'>Docs</span>
            <Paperclip size={16} />
          </Link>
          <Link className='text-sky-600 p-1 border-2 border-transparent hover:text-sky-800 transition-colors' href="https://www.linkedin.com/in/nickolasrodrigues" target='_blank'>
            <Linkedin size={20} />
          </Link>
          <Link className='p-1 border-2 border-transparent' href="https://github.com/Nickolassilvaa" target='_blank'>
            <Github size={20}/>
          </Link>
        </div>
        <ToggleTheme />
      </div>
    </div>
  )
}
