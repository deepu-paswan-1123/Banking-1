import React from "react";
import googleplay from '../../../public/assets/download/googleplay.png'
import app from '../../../public/assets/download/app.png'
import Hero from '../../../public/assets/hero/Hero.png'

const Herosection = () => {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-16 md:flex items-center">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000">
            More Payment Options <br /> Better than Cash
          </h1>
          <p className="text-gray-300 text-lg" data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="800">
            With UNINE, you can access more than 240 million customers out
            there, as well as offering management tools, options, and payment
            methods.
          </p>
          <div className="flex items-center gap-6 max-w-[300px]  max-h-[100px] ">
            <a
              href="#"
              className="flex items-center bg-white text-black  rounded-lg shadow-md hover:bg-gray-200"
              data-aos="fade-up"
              data-aos-duration="1400"
              data-aos-delay="600"
            >
              <img
                src={googleplay}
                alt="App Store"
                className=""
              />
           
            </a>
            <a
              href="#"
              className="flex items-center bg-white text-black  rounded-lg shadow-md hover:bg-gray-200"
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-delay="400"
            >
              <img
                src={app}
                alt="Google Play"
                
              />
              
            </a>
          </div>
          <p className="text-sm text-gray-400" data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="800">
            Excellent <span className="text-green-400 font-bold">4.9 out of 5</span>{" "}
            ⭐⭐⭐⭐⭐
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <div className="relative w-80 h-auto" data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="600">
            {/* Mockup Image */}
            <img
              src={Hero}
              alt="Mobile App"
              className="rounded-lg shadow-lg"
            />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
