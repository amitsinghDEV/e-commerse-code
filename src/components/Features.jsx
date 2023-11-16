import React from "react";

const Features = () => {
  return (
    <div
      data-aos='fade-up'
      data-aos-duration='600'
      className='max-w-[1640px] h-[100vh] px-4 md:px-24 mx-auto mt-12 md:mt-16  md:py-8  '
    >
      <div className='w-[100%] h-[100%] flex flex-col gap-8 md:flex-row justify-between items-center'>
        <div className='w-[100%] h-[100%] relative flex flex-col justify-center items-center   bg-[url("https://images.pexels.com/photos/952629/pexels-photo-952629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-cover bg-top '>
          <div className='w-[100%] h-[100%] bg-black/20 '></div>
          <h1 className='absolute  text-4xl md:text-5xl font-semibold text-yellow-500'>
            Sunglasses
          </h1>
        </div>
        <div className='w-[100%] h-[100%] relative  flex justify-center items-center  bg-[url("https://images.pexels.com/photos/5861344/pexels-photo-5861344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-cover bg-center '>
          <div className='w-[100%] h-[100%] bg-black/20 '></div>
          <h1 className=' absolute text-4xl md:text-5xl  font-semibold  text-yellow-500'>
            Shoes
          </h1>
        </div>
        <div className='w-[100%] h-[100%] relative  flex justify-center items-center  bg-[url("https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-cover bg-center'>
          <div className='w-[100%] h-[100%] bg-black/20 '></div>
          <h1 className=' absolute text-4xl md:text-5xl font-semibold  text-yellow-500'>
            Watches
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Features;
