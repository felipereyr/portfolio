export function Buttons({children}: {children:string}){
    return(
        <>
        <a target="_blank" className="text-center text-white uppercase text-[16px] px-[44px] py-[17px] cursor-pointer bg-[linear-gradient(-45deg,_#000000,_#848484)]  hover:bg-[linear-gradient(-45deg,_#266078,_#131B24)]">
            {children}
        </a>
        </>
    )
}