function Navbar() {
  return (
    <>
      <div className="flex justify-evenly pt-4 sticky top-0 right-0 left-0 bg-white mb-3 z-10">
        <div className="flex w-[87vw] border-b-[1px] border-black pb-5 pt-3">
          <div className="flex flex-grow justify-between">
            <div className="flex w-[20%] items-center">
              <img src="https://tbi.geu.ac.in/assets/img/logo.png" className="w-12 h-12"/>
              <div className="font-abc ml-1 font-extrabold w-36 text-sm sm:block hidden">
                <div>Technology Business Incubator</div>
              </div>
            </div>
            <ul className="flex font-normal justify-evenly gap-[3vw] items-center">
              <li className="hidden xl:block"><a href="#" className="hover:text-gray-600 transition duration-300">The Projects</a></li>
              <li className="hidden xl:block"><a href="#" className="hover:text-gray-600 transition duration-300">How it works</a></li>
              <li className="hidden xl:block"><a href="#" className="hover:text-gray-600 transition duration-300">Success Stories</a></li>
              <li className="hidden xl:block"><a href="#" className="hover:text-gray-600 transition duration-300">Partners</a></li>
              <li className="hidden xl:block"><a href="#" className="hover:text-gray-600 transition duration-300">The Experts</a></li>
              <li><button className="bg-black p-3 rounded-lg pr-4 pl-4 md:pr-8 md:pl-8 text-white md:font-medium font-normal flex flex-shrink hover:bg-gray-800 transition duration-300 ease-in-out">Info</button></li>
              <li><button className="bg-[#DC5F00] p-3 rounded-lg pr-4 pl-4 md:pr-8 md:pl-8 text-white md:font-medium font-normal flex flex-shrink hover:bg-[#f28000] transition duration-300 ease-in-out">Apply</button></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
