import React from "react";

const Hero = () => {
  return (
    <div className='max-w-[1640px]   h-[100vh] md:h-[80dvh] mx-auto overflow-hidden flex justify-between px-4 md:px-24 mt-4 md:mt-8 gap-4 text-black '>
      <div
        data-aos='zoom-in'
        data-aos-delay='300'
        className='w-[70%] md:w-[50%] h[100%] flex flex-col gap-6  justify-center'
      >
        <h1 className='max-w-[90%] py-4 text-2xl md:text-4xl font-semibold leading-normal'>
          Discover New Styles <br />
          <span className='text-yellow-500'>Every Week!</span> From our
          <span className='text-3xl font-[Pacifico]'> TARA </span>
          Exclusive Collection
        </h1>
        <h3 className=' max-w-[90%] text-xl'>
          Use Coupon <span className='text-yellow-400'>"New30"</span> For 30%
          discount on your Purchase
        </h3>
        <button className='w-32 h-12 mt-4 md:mt-16 bg-black text-white rounded-full'>
          Shop Now!
        </button>
      </div>
      <div className='w-[50%] h-[100%] flex  gap-1 '>
        <img
          className='w-[100%] md:w-[40%] h-[100%] object-cover'
          data-aos='fade-up'
          data-aos-delay='400'
          src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80'
          alt=''
        />
        <div
          className=' flex-col gap-1 hidden md:flex'
          data-aos='fade-left'
          data-aos-delay='400'
        >
          <img
            className='w-[100%] h-[50%] object-cover'
            src='https://cdn.justluxe.com/articles/galleries/103772.jpg'
            alt=''
          />
          <img
            className='w-[100%] h-[50%] object-cover'
            src='https://cdn0.weddingwire.in/article/7742/3_2/1280/jpg/52477-new-saree-design-anita-dongre-lead-image.webp'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
