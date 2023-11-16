import React from "react";
import { BsShopWindow } from "react-icons/bs";
import { TbShoppingBagCheck } from "react-icons/tb";
import { RiMenu4Line } from "react-icons/ri";
import { BiLogoPlayStore } from "react-icons/bi";
import { DiAppstore } from "react-icons/di";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [Nav, setNav] = useState(false);

  return (
    <div
      className='max-w-[1640px]  overflow-hidden w-full   mx-auto '
      data-aos='fade-down'
    >
      <div className='w-full bg-black flex md:flex-col flex-row justify-between md:justify-center items-center py-8 md:py-1 px-8 md:px-0  mx-auto border-b-2'>
        <Link
          to={"/eCommerse"}
          className='flex md:flex-col justify-between md:justify-center items-center'
        >
          <BsShopWindow className='text-4xl md:text-6xl text-white' />
          <h1 className='text-2xl md:text-2xl font-semibold font-[Pacifico]  text-white'>
            TARA
          </h1>
        </Link>
        <div className='md:hidden flex items-center gap-8 '>
          <Link to='/ShoppingCart'>
            <TbShoppingBagCheck className='hover:scale-105 duration-100 text-4xl text-white ' />
          </Link>
          <RiMenu4Line
            onClick={() => setNav(!Nav)}
            className='hover:scale-105 duration-100 text-4xl text-white '
          />
        </div>
      </div>
      {/* main nav */}
      <nav className='w-full bg-white  hidden md:flex  md:justify-between md:items-center py-1 md:px-24 mx-auto font-semibold shadow-md'>
        <Link
          to={"/eCommerse"}
          className='hover:scale-105 duration-100 text-lg'
          href='#'
        >
          HOME
        </Link>
        <Link
          to={"/eCommerse"}
          className='hover:scale-105 duration-100 text-lg'
          href='#'
        >
          MEN
        </Link>
        <Link
          to={"/eCommerse"}
          className='hover:scale-105 duration-100 text-lg'
          href='#'
        >
          WOMEN
        </Link>
        <Link
          to={"/eCommerse"}
          className='hover:scale-105 duration-100 text-lg'
          href='#'
        >
          KIDS
        </Link>
        <Link
          to={"/eCommerse"}
          className='hover:scale-105 duration-100 text-lg'
          href='#'
        >
          CATEGORIES
        </Link>
        <Link
          to={"/eCommerse"}
          className='hover:scale-105 duration-100 text-lg'
          href='#'
        >
          ACCESSORIES
        </Link>
        <Link
          to={"/eCommerse"}
          className='hover:scale-105 duration-100 text-lg'
          href='#'
        >
          ABOUT
        </Link>
        <Link
          to='/ShoppingCart'
          className='hover:scale-105 duration-100 text-3xl'
        >
          <TbShoppingBagCheck />
        </Link>
        <Link
          to='/Login'
          className=' bg-black/90 text-white p-2 px-4 rounded-full hover:scale-105 duration-105 ease-in-out text-lg'
        >
          SIGN IN
        </Link>
      </nav>

      {/* mobile menu */}
      <div
        className={
          Nav
            ? "fixed w-full h-full bg-white z-10 top-0 left-0 duration-500"
            : "fixed w-full h-full bg-white z-10 top-0 left-[-100%] duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!Nav)}
          className='text-4xl text-black z-10 absolute top-2 right-4'
        />

        <nav className='md:hidden flex flex-col justify-center items-center gap-4 mt-20  text-2xl font-semibold '>
          <Link to={"/"} className='hover:scale-105 duration-150' href='#'>
            HOME
          </Link>
          <Link to={"/"} className='hover:scale-105 duration-150' href='#'>
            MEN
          </Link>
          <Link to={"/"} className='hover:scale-105 duration-150' href='#'>
            WOMEN
          </Link>
          <Link to={"/"} className='hover:scale-105 duration-150' href='#'>
            KIDS
          </Link>
          <Link to={"/"} className='hover:scale-105 duration-150' href='#'>
            CATEGORIES
          </Link>
          <Link to={"/"} className='hover:scale-105 duration-150' href='#'>
            ACCESSORIES
          </Link>
          <Link to={"/"} className='hover:scale-105 duration-150' href='#'>
            ABOUT
          </Link>
          <button className='flex  w-[60%] mt-8 justify-center items-center  gap-2 bg-black text-white px-4 py-4 rounded-full'>
            <DiAppstore className='text-5xl' /> APP STORE
          </button>
          <button className='flex  w-[60%] justify-center items-center gap-2   bg-black text-white px-4 py-4 rounded-full'>
            <BiLogoPlayStore className='text-5xl' />
            PLAY STORE
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
