import Logo from "../../public/logo.svg"
import Image from "next/image"

export function Footer(){
    return(
        <footer className="flex flex-col items-center gap-6  bg-white">
            <div className="bg-black w-full h-[1px]">
            </div>
            <Image src={Logo} alt="logo"/>
            <span className="">Provisional website for my projects, working on my final website...</span>
            <span className="mb-4">© 2024 by Felipe Rey Dev All Rights Reserved</span>
        </footer>
    )
}