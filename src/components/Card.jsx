function Card({imgLink, name, position, onLinkedin, link}){
    return (
        <>
            <div className=" sm:w-60 sm:h-80 md:w-72 md:h-96 rounded-3xl border-2 flex p-3 flex-col items-center justify-evenly">
                <div><img src={imgLink} className="size-48 rounded-full"/></div>
                <div className="flex flex-col items-center justify-evenly">
                <div>
                    <p className="text-2xl text-[#2FAC66]">{name}</p>
                </div>
                <div>
                    <p className="text-lg text-black">{position}</p>
                </div>
                <div>
                    <a href={link}><img src="https://raw.githubusercontent.com/UjjawalGusain/TBI-Website/main/assets/icons8-linkedin-50.png" className={`hover:bg-red-400 bg-red-200 rounded-[2rem] ${!onLinkedin ? "hidden" : ""}`}/></a>
                </div>
                </div>
            </div>
        </>
    )
}

export default Card;