import React from "react";
import CustomCard from "../../../components/custom/card";

function PopularPosts() {
  const cards = [
    {
      heading: "What are blockchain transaction fees?",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.",
      subtitle: "Cryptocurrency",
      src: "https://images.pexels.com/photos/5980736/pexels-photo-5980736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      heading: "Best Places to Download HTML Templates",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.",
      subtitle: "Technologies",
      src: "https://images.pexels.com/photos/3401402/pexels-photo-3401402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      heading: "5 Best Samsung Galaxy Buds Pro Settings",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.",
      subtitle: "Programming",
      src: "https://images.pexels.com/photos/257923/pexels-photo-257923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      heading: "What are blockchain transaction fees?",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.",
      subtitle: "Cryptocurrency",
      src: "https://images.pexels.com/photos/5980736/pexels-photo-5980736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      heading: "Best Places to Download HTML Templates",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.",
      subtitle: "Technologies",
      src: "https://images.pexels.com/photos/3401402/pexels-photo-3401402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      heading: "5 Best Samsung Galaxy Buds Pro Settings",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.",
      subtitle: "Programming",
      src: "https://images.pexels.com/photos/257923/pexels-photo-257923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="bg-white mt-28 flex flex-col justify-center ">
      <h1 className=" text-5xl mb-11 font-extrabold"> Latest Posts </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1  gap-4 gap-y-11">
        {cards.map((card, index) => (
          <CustomCard
            key={index}
            heading={card.heading}
            para={card.para}
            src={card.src}
            subtitle={card.subtitle}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularPosts;
