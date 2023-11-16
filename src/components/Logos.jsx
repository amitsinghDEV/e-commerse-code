import React from "react";

const Logos = () => {
  return (
    <div className='max-w-[1640px] py-4 px-4 md:px-24 mx-auto mt-12 md:mt-16  md:py-4 overflow-hidden'>
      <h4
        data-aos='zoom-in'
        data-aos-duration='100'
        className=' w-full text-center text-4xl md:text-5xl px-4 mt-8 md:mt-12 font-semibold'
      >
        <span className='text-red-600'>Hottest</span> Deals From Brands Like
      </h4>
      <div
        data-aos='zoom-in'
        data-aos-duration='100'
        className=' flex justify-around items-center mt-8 md:mt-24'
      >
        <img
          className='h-[50px] md:h-[70px] hover:scale-105 duration-150'
          src='https://bcassetcdn.com/public/blog/wp-content/uploads/2021/11/10190851/Louis-Vuitton-1.png'
          alt=''
        />
        <img
          className='h-[50px] md:h-[70px] hover:scale-105 duration-150'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5Rl8qyBD_N6d61LRaOFGRJ5u5dJ0zEXGo9ZbKseRW54nTfXfC1itoKp3D8NMnCtQ15s&usqp=CAU'
          alt=''
        />
        <img
          className='h-[50px] md:h-[70px] hover:scale-105 duration-150'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLYQw_qbzi6UTLer42klVKP1xmurb6sBKd-Q&usqp=CAU'
          alt=''
        />
      </div>
      <div
        data-aos='zoom-in'
        data-aos-duration='100'
        className='flex justify-around items-center mt-8 md:mt-24'
      >
        <img
          className='h-[50px] md:h-[70px] hover:scale-105 duration-150'
          src='data:image/png;base64,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'
          alt=''
        />
        <img
          className='h-[50px] md:h-[70px] hover:scale-105 duration-150'
          src='https://1000logos.net/wp-content/uploads/2021/06/Ray-Ban-logo.png'
        />
        <img
          className='h-[50px] md:h-[70px] hover:scale-105 duration-150'
          src='data:image/png;base64,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'
          alt=''
        />
      </div>
    </div>
  );
};

export default Logos;
