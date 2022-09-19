import { DownloadSimple } from "phosphor-react";
import { Button } from "./button";


export function MainContainer() {
    return (
        <div className="
            flex 
            flex-col 
            gap-4 
            h-[calc(100vh_-_15vh_-_60px)] 
            items-start 
            justify-center

            sm:h-[calc(100vh_-_20vh_-_64px)]
        ">
            <h1 className="
                flex 
                flex-col 
                text-left 
                text-5xl 
                text-zinc-900 
                leading-none 
                font-playFair 
                font-bold

                sm:text-8xl
            ">
                Hello!
                <span>I'm Nickolas</span>
            </h1>

            <div className="flex flex-col gap-12">

                <p className="
                    text-justify
                    text-zinc-500 
                    text-xs

                    sm:text-base
                    sm:w-[450px]
                ">
                    I'm was born in Brazil, analysis and systems development student and a <strong>web developer</strong> who loves learning new technologies and solve problems with my knowledge.
                </p>

                <div className="
                    flex 
                    flex-col-reverse 
                    gap-8

                    sm:flex-row
                ">
                    <Button
                        title="Contact me"
                        className="py-4 px-8 bg-slate-800 text-white transition-colors cursor-pointer font-normal hover:bg-slate-700 rounded"
                    />

                    <div className="flex items-center gap-1">
                        <DownloadSimple size={20} />
                        <Button
                            title="Download CV"
                            link="/Curriculo/NickolasRodrigues.pdf"
                            className="underline font-normal"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

// flex flex-col items-start justify-center h-[calc(85vh_-_72px)] gap-4

// flex items-center gap-4