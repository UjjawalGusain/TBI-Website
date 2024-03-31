import { useState } from "react";
import Navbar from "./components/Navbar";
import Carousal from "./components/Carousal";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Navbar />
      <section className="flex flex-grow flex-shrink items-center flex-col w-full h-full">
        <div className="w-[80vw] flex flex-col items-center">
          <h1 className="font-abc font-semibold text-4xl md:text-6xl  text-center">
            Technology Business Incubator
          </h1>
          <img
            src="https://raw.githubusercontent.com/UjjawalGusain/TBI-Website/main/assets/logo2.png"
            className="max-h-[600px] mb-10 mt-6 w-[300px] md:h-[300px] md:w-[500px] xl:w-[600px] xl:h-[400px]"
          />
          <h1 className="font-abc font-semibold text-4xl md:text-6xl lg:text-6xl mb-12 text-center">
            Let's Grow Together
          </h1>
          <p className="text-center text-base pb-14 border-b-2 border-red-600 md:text-xl">
            An Incubator's main goal is to produce successful firms that will
            leave the program financially viable and freestanding. These
            incubator graduates have the potential to create jobs, revitalize
            neighborhoods, commercialize new technologies, and strengthen local
            and national economies. Technology Business Incubator-GEU was
            established in 2015 by the government of India's Department of
            Science and Technology. In 2018, it became the first incubator to be
            recognized within the state of Uttarakhand.
          </p>
        </div>
      </section>

      <section className="flex flex-grow flex-shrink items-center flex-col w-full h-full">
        <div className="w-[90vw] md:w-[80vw] flex justify-between flex-col gap-10">
          <div className="flex justify-around items-center flex-col md:flex-row">
            <div className="w-[80%] lg:w-[40%]">
              <h1 className="font-abc text-4xl font-medium mb-3 border-b-2 mt-5">
                Goal
              </h1>
              <p className="text-lg">
                The goal of the TBI-GEU is to build and share resources with
                other like-minded individuals, so they can support start-ups and
                SMEs. The scope of support includes office space,
                infrastructure, and training programs.
              </p>
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/UjjawalGusain/TBI-Website/main/assets/goal.png"
                className="w-90 h-80 border-2 m-3 mt-5"
              />
            </div>
          </div>
          <div className="flex justify-around items-center flex-col md:flex-row">
            <div className="block md:hidden w-[80%] lg:w-[40%]">
              <h1 className="font-abc text-5xl font-medium mb-3 border-b-2 w-full">
                Mission
              </h1>
              <p className="text-lg">
                The mission of the TBI-GEU is to support and encourage
                entrepreneurship and innovation in the state of Uttarakhand. It
                provides the necessary support to help budding entrepreneurs
                scale up their ventures.
              </p>
            </div>
            <img
              src="https://raw.githubusercontent.com/UjjawalGusain/TBI-Website/main/assets/mission.png"
              className="w-96 h-80 border-2 m-3"
            />
            <div className="w-[70%] lg:w-[40%] md:block hidden">
              <h1 className="font-abc text-5xl font-medium mb-3 border-b-2 md:block hidden ml-10">
                Mission
              </h1>
              <p className="text-lg">
                The mission of the TBI-GEU is to support and encourage
                entrepreneurship and innovation in the state of Uttarakhand. It
                provides the necessary support to help budding entrepreneurs
                scale up their ventures.
              </p>
            </div>
          </div>
          <div className="flex justify-around items-center flex-col md:flex-row">
            <div className="w-[80%] lg:w-[40%]">
              <h1 className="font-abc text-5xl font-medium mb-3 border-b-2">
                Visionary{" "}
              </h1>
              <h1 className="font-abc text-3xl font-medium mb-3 text-slate-500 ">
                Prof. Kamal Ghanshala
              </h1>
              <p className="text-base text-center text-gray-400">
                "We strive to create a learning environment for students where
                they unfold their potential and closely interact with the
                practitioners from the corporate world"
              </p>
            </div>
            <img
              src="https://raw.githubusercontent.com/UjjawalGusain/TBI-Website/main/assets/vision.png"
              alt=""
              className="h-[300px] md:h-[400px] border-2 m-3"
            />
          </div>
        </div>
      </section>
      <section className="h-[700px] bg-[#DC5F00] flex justify-center">
        <Carousal />
      </section>
      <section className="min-h-[400px] bg-[#f6f6f6] flex justify-center items-center pt-10 pb-10">
        <div className="font-bold font-abc text-4xl">
          <h1 className="text-center mb-14">Our Services</h1>
          <div className="flex items-center justify-center gap-10 md:flex-row flex-col">
            <div className="w-52 h-36 rounded-xl bg-white p-2 flex flex-col justify-evenly border-2 border-[#DC5F00] transition duration-300 ease-in-out hover:bg-gray-100">
              <p className="text-base text-center border-b-2 border-b-[#DC5F00]">
                Venture Development
              </p>
              <p className="text-xs font-light text-center">
                Venture Development by TBI GEU, It promise to create significant
                entrepreneurial wealth and jobs.
              </p>
            </div>
            <div className="w-52 h-36 rounded-xl bg-white p-2 flex flex-col justify-evenly border-2 border-[#DC5F00] transition duration-300 ease-in-out hover:bg-gray-100">
              <p className="text-base text-center border-b-2 border-b-[#DC5F00]">
                Mentorship
              </p>
              <p className="text-xs font-light text-center">
                Mentorship is a relationship in which a more experienced or more
                knowledgeable person helps to guide a less experienced or less
                knowledgeable person.
              </p>
            </div>
            <div className="w-52 h-36 rounded-xl bg-white p-2 flex flex-col justify-evenly border-2 border-[#DC5F00] transition duration-300 ease-in-out hover:bg-gray-100">
              <p className="text-base text-center border-b-2 border-b-[#DC5F00]">
                Incubation
              </p>
              <p className="text-xs font-light text-center">
                Incubator support includes providing technological facilities
                and advice, initial growth funds, network and linkages,
                co-working spaces, lab facilities, mentoring and advisory
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[600px] bg-white flex justify-center items-center">
        <div className="font-bold font-abc text-4xl pb-10 border-b-2 border-black lg:w-[80%]">
          <h1 className="text-center mt-10 mb-10">Some of the Experts</h1>
          <div className="flex gap-3 md:flex-row flex-col items-center flex-wrap md:justify-center">
            <Cards />
          </div>
        </div>
      </section>
      <section className="flex flex-grow flex-shrink justify-center flex-row w-full h-full">
        <div className="w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw]">
          <h1 className="font-abc font-semibold text-4xl md:text-6xl text-center mb-10">
            Contact Us
          </h1>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-600 flex-grow transition duration-300 ease-in-out hover:bg-gray-100"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-600 flex-grow transition duration-300 ease-in-out hover:bg-gray-100"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="6"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-600 resize-none transition duration-300 ease-in-out hover:bg-gray-100"
            ></textarea>
            <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors duration-300">
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-8 mt-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col items-center md:items-start">
            <p>
              &copy; 2024 Technology Business Incubator-GEU. All rights
              reserved.
            </p>
            <p>Contact: contact@tbi-geu.com | Phone: +91 1234567890</p>
          </div>
          <div className="flex mt-4 md:mt-0">
            <a
              href="#"
              className="mx-4 hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Disclaimer
            </a>
            <a
              href="#"
              className="mx-4 hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="mx-4 hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
