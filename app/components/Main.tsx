import Image from "next/image"
import MainImg from "../../public/Home__img.svg"
import Link from "next/link"
import { Buttons } from "./utils/Buttons"

export function Main(){
    return(
        <main className=" bg-cover bg-center" style={{backgroundImage: "url(./main-bg.png)"}}>
            <h3 className="text-center text-[40px] font-bold pt-10">My projects</h3>
            <div className="flex flex-col  items-center gap-16 mt-[100px]">
                <div className="flex flex-col justify-end items-center gap-6 w-[1000px] h-[450px] bg-cover bg-center rounded-[25px] pb-6" style={{backgroundImage: "url(./bg-project1.png)"}}>
                    <div className="flex gap-6">
                        <Link legacyBehavior href="https://felipereyr.github.io/Vision/">
                            <Buttons>VISIT</Buttons>
                        </Link>
                        <Link legacyBehavior href="https://github.com/felipereyr/Vision">
                            <Buttons>DETAILS</Buttons>
                        </Link>
                    </div>
                </div> 
                <div className="flex flex-col justify-end items-center gap-6 w-[1000px] h-[450px] bg-cover bg-center rounded-[25px] pb-6" style={{backgroundImage: "url(./ejemplo.png)"}}>
                    <div className="flex gap-6">
                        <Link legacyBehavior href="https://felipereyr.github.io/CH-Valquirias/">
                            <Buttons>VISIT</Buttons>
                        </Link>
                        <Link legacyBehavior href="https://github.com/felipereyr/CH-Valquirias">
                            <Buttons>DETAILS</Buttons>
                        </Link>
                    </div>
                </div> 
                <div className="flex flex-col justify-end items-center gap-6 w-[1000px] h-[450px] bg-cover bg-center rounded-[25px] mb-16 pb-6" style={{backgroundImage: "url(./bg-soon.webp)"}}>
                    <div className="flex gap-6">
                        <Buttons>VISIT</Buttons>
                        <Buttons>DETAILS</Buttons>
                    </div>
                </div> 
            </div>
        </main>
    )
}