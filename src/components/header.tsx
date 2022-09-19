import { Briefcase } from "phosphor-react";
import { Button } from "./button";


export function Header() {
    return (
        <header className="
            flex 
            justify-between 
            items-center 
            text-zinc-900 
            pt-6
        ">
            <h1><Briefcase size={32} weight="bold" /></h1>

            <ul className="
                hidden 
                cursor-pointer
                
                sm:flex 
                sm:gap-4 
                sm:text-base
            ">
                
                <li><a href="#about">About</a></li>
                <li><a href="#projects" >Projects</a></li>
                <li><a href="#tech" >Technologies</a></li>
            </ul>

            <Button
                // logo={() => { return <LinkedinLogo/>}}
                title='LinkedIn'
                link="https://www.linkedin.com/in/nickolasrodrigues/"
                className="
                    py-2 px-6 
                    bg-slate-800 
                    hover:bg-slate-700 
                    text-white  
                    cursor-pointer 
                    font-normal 
                    transition-colors 
                    text-sm 
                    rounded

                    sm:text-base
                "
            />
            
        </header>
    )
}

// flex items-center justify-between py-4