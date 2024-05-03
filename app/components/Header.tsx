import Image from "next/image";
import Logo from "../../public/logo.svg"

export function Header(){
    return(
        <main className="bg-white flex justify-center">
            <div className="p-8">
                <Image src={Logo} alt="logo" width={200}/>
            </div>
        </main>
    )
}