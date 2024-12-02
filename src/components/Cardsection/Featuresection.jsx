import React from "react";
import FeatureCard from "./FeatureCard";
import { FiShield, FiGift, FiDollarSign, FiTruck } from "react-icons/fi";

function FeatureSection() {
  return (
    <section
      className=" py-12 md:px-8 lg:px-16 bg-white/50 text-gray-800"
      // style={{
      //   backgroundImage: "url('/assets/Card1/card.jpg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <h2 className="text-2xl font-bold text-center mt-4 mb-4">
        Safe & Convenient Transaction in a safe place
      </h2>
      <p className="text-center text-gray-600 mb-8 mt-4">
        Want to pay anything so easy with the touch of a finger. Through UNINE,
        you can make practically any transaction.
      </p>
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4 mt-8">
        <FeatureCard
          icon={<FiShield />}
          title="Always Protected"
          description="Shopping with UNINE is even more secure thanks to Buyer Protection."
          bgColor="bg-white"
        />
        <FeatureCard
          icon={<FiGift />}
          title="Get Reward"
          description="Shopping with UNINE is even more secure thanks to Buyer Protection."
          bgColor="bg-green-100"
        />
        <FeatureCard
          icon={<FiDollarSign />}
          title="No Hidden Fees"
          description="Shopping with UNINE is even more secure thanks to Buyer Protection."
          bgColor="bg-white"
        />
        <FeatureCard
          icon={<FiTruck />}
          title="Free Shipping"
          description="Shopping with UNINE is even more secure thanks to Buyer Protection."
          bgColor="bg-white"
        />
      </div>
    </section>
  );
}

export default FeatureSection;
