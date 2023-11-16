import React, { useContext, useState } from "react";
import { data } from "./Data/Data.js";
import { cartContext } from "../Context/Context.jsx";

const Products = () => {
  const [prod, setprod] = useState(data);
  const filterType = (category) => {
    setprod(
      data.filter((items) => {
        return items.category === category;
      })
    );
  };
  // filter Price
  const filterPrice = (price) => {
    setprod(
      data.filter((items) => {
        return items.price === price;
      })
    );
  };
  const GlobalState = useContext(cartContext);
  const dispatch = GlobalState.dispatch;

  return (
    <div className='max-w-[1640px] py-4 px-4 md:px-24 mx-auto bg-white overflow-hidden'>
      <h1 className='text-6xl font-bold text-center py-4'>
        <span className='font-[pacifico] text-yellow-400'> TARA </span> 2023
        Collection
      </h1>

      {/* filter section by product */}
      <div className='max-w-[100%] flex flex-col gap-4 md:flex-row justify-center md:justify-between items-center mt-8  mx-auto'>
        <div>
          <button
            onClick={() => setprod(data)}
            type='button'
            className='focus:outline-none text-white bg-black hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900'
          >
            All
          </button>

          <button
            onClick={() => filterType("Men")}
            type='button'
            className='focus:outline-none text-white bg-black hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900'
          >
            Men
          </button>
          <button
            onClick={() => filterType("Women")}
            type='button'
            className='focus:outline-none text-white bg-black hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900'
          >
            Women
          </button>
          <button
            onClick={() => filterType("kids")}
            type='button'
            className='focus:outline-none text-white bg-black hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900'
          >
            Kids
          </button>
          <button
            onClick={() => filterType("shoes")}
            type='button'
            className='focus:outline-none text-white bg-black hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900'
          >
            Shoes
          </button>
          <button
            onClick={() => filterType("watch")}
            type='button'
            className='focus:outline-none text-white bg-black hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900'
          >
            Watches
          </button>
        </div>

        {/* filter by price */}
        <div>
          <button
            onClick={() => filterPrice("1")}
            type='button'
            className='focus:outline-none text-white bg-black hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900'
          >
            1$
          </button>

          <button
            onClick={() => filterPrice("2")}
            type='button'
            className='focus:outline-none text-white bg-black hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900'
          >
            $2
          </button>

          <button
            onClick={() => filterPrice("3")}
            type='button'
            className='focus:outline-none text-white bg-black hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900'
          >
            $3
          </button>

          <button
            onClick={() => filterPrice("4")}
            type='button'
            className='focus:outline-none text-white bg-black hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900'
          >
            $4
          </button>
        </div>
      </div>

      <div
        data-aos='fade-up'
        data-aos-duration='200'
        className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 mt-4'
      >
        {prod.map((items, index) => {
          items.quantity = 1;
          return (
            <div
              className='border bg-white shadow-md hover:scale-105 duration-300 rounded-lg'
              key={index}
            >
              <img
                className='w-full h-[300px] object-cover rounded-lg'
                src={items.image}
                alt=''
              />
              <p className='font-bold text-black text-md'>{items.name}</p>
              <h3 className='text-black font-bold p-1'>${items.price}</h3>
              <button
                className=' w-[95%] rounded-md py-2 px-1 font-bold text-white bg-black/90 hover:bg-yellow-300 '
                onClick={() => dispatch({ type: "ADD", payload: items })}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
