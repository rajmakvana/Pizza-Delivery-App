import React from "react";

const OrderCart = () => {
  return (
    <div className="w-1/2 mt-10">
      <div className="flex items-center border-b-2 border-slate-300 pb-5 gap-3 ">
        <img src="/img/cart-black.png" alt="cart-logo" />
        <h1 className="text-2xl">Order Summary</h1>
      </div>
      <div className="flex items-center justify-between my-5">
        <img src="/img/pizza.png" alt="pizza-image" className="w-25" />
        <div className="flex flex-col">
          <h2 className="font-semibold">Marghrita</h2>
          <span className="text-sm">SMALL</span>
        </div>
        <span>1 &nbsp;Psc</span>
        <span>₹250</span>
      </div>
      <div className="flex items-center justify-between my-5">
        <img src="/img/pizza.png" alt="pizza-image" className="w-25" />
        <div className="flex flex-col">
          <h2 className="font-semibold">Marghrita</h2>
          <span className="text-sm">SMALL</span>
        </div>
        <span>1 &nbsp;Psc</span>
        <span>₹250</span>
      </div>

      <div className="text-end border-t-2 border-slate-300 pt-5 mt-5">
        <div>
          <span className="text-lg font-semibold">Total Amount : </span> &nbsp;
          &nbsp;
          <span className="text-lg text-[#FE5F1E] font-semibold">₹250</span>
        </div>
        
        <div>
          <form className="flex flex-col items-end gap-3 mt-5">
            <input
              type="text"
              placeholder="Enter your Address"
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm
    focus:outline-none focus:ring-[#FE5F1E] focus:border-[#FE5F1E] w-80"
            />
            <input
              type="text"
              placeholder="Enter your Phone number"
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm
    focus:outline-none focus:ring-[#FE5F1E] focus:border-[#FE5F1E] w-80"
            />
            {/* <button className="bg-[#FE5F1E] mt-2 hover:bg-[#b2330185] text-white px-6 py-2 rounded-2xl text-md">
              Order Now
            </button> */}
          </form>

        </div>

        <div>
            <button className="bg-[#FE5F1E] mt-4 hover:bg-[#b2330185] text-white px-6 py-2 rounded-2xl text-md">
                Login to continue
            </button>
        </div>
      </div>



    </div>
  );
};

export default OrderCart;
