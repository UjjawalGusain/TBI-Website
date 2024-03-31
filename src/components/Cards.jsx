import Card from "./Card";

function Cards(){
    const experts = [
        {
            imgLink: "https://raw.githubusercontent.com/UjjawalGusain/TBI-Website/main/assets/sachinghai.jpeg",
            name: "Sachin Ghain",
            position: "Director",
            onLinkedin: true,
            link: "https://www.linkedin.com/in/sachin-ghai-078b831a/"
        },
        {
            imgLink: "https://raw.githubusercontent.com/UjjawalGusain/TBI-Website/main/assets/dk.jpg",
            name: "Dr. Deepak Kaushal",
            position: "Asst Manager, Operations",
            onLinkedin: false,
            link: ""
        },
        {
            imgLink: "https://raw.githubusercontent.com/UjjawalGusain/TBI-Website/main/assets/vp.jpg",
            name: "Dr. Varij Panwar",
            position: "IPR co-ordinator",
            onLinkedin: true,
            link: "https://www.linkedin.com/in/varij-panwar-75bb2028/"
        },
        
    ]


    return (
        <>
            {experts.map((expert) => (
                <Card imgLink={expert.imgLink} name={expert.name} position={expert.position} onLinkedin={expert.onLinkedin} link={expert.link}/>
            ))}
        </>
    )
}

export default Cards;