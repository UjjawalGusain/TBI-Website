import React from 'react';

function CarousalCard({ src, title, description, link }) {
  return (
    
    <div className=' w-[90%] h-96 bg-white rounded-3xl flex items-center justify-center text-center p-4 flex-col md:flex-row'>
      <div>
        <img src={src} alt={title} className='md:m-5 md:ml-2 md:w-80 md:h-80 w-32 h-32 border-slate-300 rounded-xl' />
      </div>
      <div className='relative w-[60%] h-[95%] m-5 mr-2 rounded-xl overflow-hidden'>
        <h1 className='font-abc text-2xl md:text-4xl font-medium mb-1 border-b-2'>{title}</h1>
        <p className='p-3 leading-7 text-gray-500 md:block hidden md:text-ellipsis'>{description}</p> 
        <p className='md:hidden block m-5 text-gray-400 hover:text-gray-800'><a href={link}>Visit and read about us</a></p>
        <a href={link}><img src="./../../assets/icons8-link-48.png" className='hidden bottom-0 right-0 size-8 opacity-20 hover:opacity-40 border-2 border-black m-1 absolute md:block'/></a>
      </div>
    </div>

  );
}

export default CarousalCard;
