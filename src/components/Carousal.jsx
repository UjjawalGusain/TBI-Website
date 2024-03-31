import { useState, useEffect } from "react";
import CarousalCard from "./CarousalCard";

function Carousal(){
    const slides = [
        {src: "https://raw.githubusercontent.com/UjjawalGusain/TBI-Website/main/assets/sunfox.png", title: "Welcome to Sunfox", description: "Sunfox is an R&D lab committed to developing cutting-edge healthcare technologies for the digital era. Our aim is to create affordable and accessible technologies, products, and services to empower individuals and communities worldwide. Our innovations are designed to deliver advanced health technologies by breaking down barriers, bridging gaps, and reaching remote and neglected areas. We aspire to fulfill the right to healthcare for everyone, irrespective of their location or circumstances.", link: "https://sunfox.in/"},
        {src: "https://raw.githubusercontent.com/UjjawalGusain/TBI-Website/main/assets/dtr.png", title: "Engineering the future with Dtown Robotic", description: "DTR is a leading technology company specializing in the design, development, and manufacturing of drones, robotics, and Unmanned Ground Vehicles (UGVs). With a strong focus on research and development, DTR is dedicated to creating futuristic products and custom solutions to address the evolving needs of various industries, including the government and defense sectors.", link: "https://sunfox.in/"},
        {src: "https://raw.githubusercontent.com/UjjawalGusain/TBI-Website/main/assets/webinux.png", title: "Hello! This is Webixun Infoways Pvt. Ltd.", description: "Webixun Infoways Pvt Ltd is a web solutions IT company established in 2017 with a focus on providing quality services in various domains, including digital marketing, website designing, software, and app development. The company's goal is to deliver premium quality services at reasonable prices while prioritizing customer satisfaction. With its dedication to excellence, Webixun Infoways is emerging as one of the best website designing and development companies in the cities of Dehradun, Rishikesh, and Haridwar.", link: "https://sunfox.in/"},
      ]

    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);


    const goToNext = () => {
        setActiveIndex((activeIndex) => 
          (activeIndex == slides.length - 1 ? 0 : activeIndex + 1)
        )
    }

    const goToPrev = () => {
      setActiveIndex((activeIndex) => 
        (activeIndex == 0 ? slides.length - 1 : activeIndex - 1)
      )
  }

  const handlePauseToggle = () => {
    setIsPaused((prevState) => !prevState);
  };

  

  
  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(goToNext, 8000); // Change slide every 3 seconds
    }
    return () => clearInterval(interval); // Clear the interval on component unmount or when paused
  }, [activeIndex, isPaused]); // Re-run effect when activeIndex or isPaused changes


    return (
        <>
          <div className='w-[80vw] flex flex-col pt-8 items-center'>
            <h1 className='font-abc text-2xl md:text-4xl text-black h-[20%] flex w-full '>A glimpse to our startups incubated</h1>
            <CarousalCard src={slides[activeIndex].src} title={slides[activeIndex].title} description={slides[activeIndex].description} link={slides[activeIndex].link}/>
            <div className="flex justify-evenly mt-5 w-[80%] h-14">
              <button className="w-1/3 bg-white rounded-s-full border-2 hover:bg-gray-100 flex justify-center items-center size-12 " onClick={goToPrev}><img src="./../../assets/icons8-left-50.png" className="w-10 h-10"/></button>
              <button className={`w-1/3 bg-white border-2 hover:bg-gray-100 flex justify-center items-center size-12 ${isPaused ? "hover:bg-white bg-gray-100" : ""}`} onClick={handlePauseToggle}>{isPaused ? "Resume" : "Stop"}</button>
              <button className="w-1/3 bg-white rounded-e-full border-2 hover:bg-gray-100 flex justify-center items-center size-12"onClick={goToNext}><img src="./../../assets/icons8-right-50.png" className="w-10 h-10"/></button>
            </div>
          </div>
        </>
    )
}

export default Carousal;
// transition-opacity duration-700 hover:opacity-0