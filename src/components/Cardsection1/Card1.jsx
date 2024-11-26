import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";



const Card1 = () => {
  return (
    <div className="  flex flex-col md:flex-row  items-center justify-center md:justify-around bg-white p-8 rounded-lg space-y-6 md:space-y-0 md:space-x-5 ">
      {/* Bank Account Info Box */}
      <div
  className="mt-7 bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col gap-4 items-start w-auto md:w-1/2 h-auto"
  style={{
    backgroundImage: "url('/assets/Card/bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <h2 className="text-lg font-semibold mb-1">Bank Accounts</h2>
  <p className="text-gray-600 mb-2">
    High interest, FDIC insured checking for individuals and businesses
  </p>
  <button className="flex items-center pb-16 ">
  <FaArrowCircleRight className='text-green-600 text-3xl'/>
    <span className="ml-2 text-black text-xl">Learn more</span>
    
  <div className="pl-28  p-4">
    <div className="rounded-xl bg-gray-200 shadow-2xl">
      <p className="text-gray-500 text-sm ml-2 mt-2 mb-2 pl-2 pr-3 pt-2">Balance After Payout</p>
      <p className="text-2xl font-semibold ml-3 pb-2 pl-2 card">$3,150.00</p>
    </div>
  </div>
  </button>
</div>

      {/* Description Section */}
      <div className="text-center md:text-left w-96 md:w-96">
        <h2 className="text-2xl font-semibold mb-2 mt-4">Keep your cash flow clear and keep increasing 🚀</h2>
        <p className="text-gray-600 mb-4 mt-8">
          See it all at a glance when you link your cash accounts, credit cards, investments, and bills.
        </p>
        <button className="bg-green-500 mt-4 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition">
          Try for now &rarr;
        </button>
      </div>
    </div>
  );
};

export default Card1;
