import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    id: 1,
    name: "Ronald Richards",
    text: "Without the system and the support, I would have been canoeing without a paddle! Thanks for being my paddle, UNINE. 😉👍💪",
    img: "https://picsum.photos/101/101",
    heading: "I paid off $24,000 first year",
    subtext: "First Years of using UNINE",
    rating: 4,
  },

  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed porro tempora incidunt culpa. Doloremque suscipit inventore.",
    img: "https://picsum.photos/102/102",
    heading: "Outstanding Experience",
    subtext: "2 Years with UNINE",
    rating: 5,
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "The platform's insights and tools have made a huge difference in my journey. Highly recommended!",
    img: "https://picsum.photos/103/103",
    heading: "Best Financial Decision",
    subtext: "3 Years with UNINE",
    rating: 4,
  },
  {
    id: 1,
    name: "Ronald Richards",
    text: "Without the system and the support, I would have been canoeing without a paddle! Thanks for being my paddle, UNINE. 😉👍💪",
    img: "https://picsum.photos/101/101",
    heading: "I paid off $24,000 first year",
    subtext: "First Years of using UNINE",
    rating: 4,
  },
];

function Review() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="text-center p-6 pb-4">
      <h2 className="text-3xl ">Our Customers Says</h2>
    <div className="p-8 pb-10">
      <Slider {...settings}>
        {TestimonialData.map((data) => (
          <div
            key={data.id}
            className="max-w-lg bg-white shadow-lg rounded-xl p-6 "
          >
            <div className="flex justify-between gap-4">
            <h2 className="  text-lg font-bold text-black">{data.heading}</h2>
            <p className="text-4xl text-gray-500">,,</p>
            </div>
            <span className="absolute text-gray-300 text-5xl top-6 right-6">
              &rdquo;
            </span>
            <p className="text-gray-600 mt-4 italic">{`"${data.text}"`}</p>
            <hr className="my-4 border-gray-200" />
            <div className="flex items-center gap-4">
              <img
                src={data.img}
                alt={`${data.name}'s profile`}
                className="w-12 h-12 rounded-full"
              />
              
              <div>
                <h3 className="text-sm font-bold">{data.name}</h3>
                <p className="text-xs text-gray-500">{data.subtext}</p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar
                  key={index}
                  className={`${
                    index < data.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            </div>
         
        ))}
      </Slider>
    </div>
    </div>
  );
}

export default Review;
