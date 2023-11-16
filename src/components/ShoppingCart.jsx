import React, { useContext } from "react";
import { cartContext } from "../Context/Context";

const ShoppingCart = () => {
  const Globalstate = useContext(cartContext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, items) => {
    return total + items.price * items.quantity;
  }, 0);
  return (
    <div className='max-w-[1640px] mx-auto px-4 '>
      <h1 className='text-4xl md:text-2xl text-center font-bold font-[Pacifico]'>
        YOUR CART
      </h1>
      <div>
        <div className='w-full'>
          {state.map((items, index) => {
            return (
              <div
                className='w-[100%] flex justify-between items-center  '
                key={index}
              >
                <img
                  className=' w-[100px] md:w-[150px] h-[100px] md:h-[150px] object-cover rounded-sm'
                  src={items.image}
                  alt=''
                />
                <p className='font-bold'>{items.name}</p>
                <p className='font-semibold'>
                  $ {items.quantity * items.price}
                </p>
                <div className='text-xl md:2xl'>
                  <button
                    className='cursor-pointers'
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: items })
                    }
                  >
                    +
                  </button>
                  <p>{items.quantity}</p>
                  <button
                    className='cursor-pointers'
                    onClick={() => {
                      if (items.quantity > 1) {
                        dispatch({ type: "DECREASE", payload: items });
                      } else {
                        dispatch({ type: "REMOVE", payload: items });
                      }
                    }}
                  >
                    -
                  </button>
                </div>
                <h2
                  className='text-2xl cursor-pointers'
                  onClick={() => dispatch({ type: "REMOVE", payload: items })}
                >
                  x
                </h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className='text-4xl md:text-2xl font-bold flex flex-col justify-center items-center'>
        Total
        {state.length > 0 && (
          <div className='total'>
            <h2>${total}</h2>
          </div>
        )}
        <button className='   rounded-md py-2 px-4 font-bold text-white bg-black/90 hover:bg-yellow-200 hover:text-black mb-4'>
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
