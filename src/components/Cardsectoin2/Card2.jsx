import React from "react";
import { FaSackDollar } from "react-icons/fa6";
import { IoGlobeSharp } from "react-icons/io5";
import { FaBalanceScaleRight } from "react-icons/fa";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import "../Css/Card2.css";

const Card2 = () => {
  return (
    <div className=" mt-20 flex flex-col md:flex-row  items-center justify-center md:justify-around bg-white p-8 rounded-lg space-y-6 md:space-y-0 md:space-x-5 ">
      {/* Description Section */}
      <div className="text-center md:text-left w-96 md:w-96">
        <h2 className="text-2xl font-semibold mb-2 ">
          Keep your cash flow clear and keep increasing 🚀
        </h2>
        <div className="flex justify-between gap-4  box">
          <div className="mt-6">
            <IoGlobeSharp className="ml-2 text-3xl" />
            <h2 className="text-2xl font-semibold mt-4">Galobity</h2>
            <p className="mt-4">
              Lorem, ipsum dolor ipsum dolor sit amet consectetur adipisicing
              elit.{" "}
            </p>
          </div>
          <div className="mt-6">
            <IoGlobeSharp className=" ml-2 text-3xl" />
            <h2 className="text-2xl font-semibold mt-4">Intergrate</h2>
            <p className="mt-4">
              Lorem, ipsum dolor ipsum dolor sit amet consectetur adipisicing
              elit.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* Bank Account Info Box */}
      <div
        className="mt-7 bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col gap-4 items-start w-auto md:w-1/2 h-auto"
        style={{
          backgroundImage: "url('/assets/Card/images.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-lg font-semibold mb-1">Payments</h2>
        <p className="text-black mb-2 pr-4 pt-2">
          High interest, FDIC insured checking for individuals and
          businessesHigh interest,FDIC insured checking for individuals and
          businesses
        </p>
        <div className="flex gap-6 pb-8">
          <div className=" w-fit h-fit p-2 pl-6 pr-6 bg-black rounded-2xl">
            <a href="">
              <FaSackDollar className="text-white text-2xl ml-1 flex justify-center items-center flex-col " />
              <h2 className="text-white  text-x font-semibold">Save</h2>
            </a>
          </div>
          <div className="w-fit h-fit p-2 pl-4 pr-4 bg-white rounded-2xl">
            <a href="">
              <FaBalanceScaleRight className="text-black text-2xl ml-1 flex justify-center items-center flex-col " />
              <h2 className="text-black  text-x font-semibold">Ballance</h2>
            </a>
          </div>
          <div className="w-fit h-fit p-2 pl-6 pr-6 bg-green-500 rounded-2xl">
            <a href="">
              <RiMoneyDollarBoxLine className="text-balck text-2xl ml-1 flex justify-center items-center flex-col " />
              <h2 className=" text-black  text-x font-semibold">Sent</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
