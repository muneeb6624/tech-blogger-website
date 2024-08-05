import React from 'react'
import CustomCard from '../../../components/custom/card'

function PopularPosts() {
  const cards = [
    { heading: "What are blockchain transaction fees?", para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.", subtitle: "Cryptocurrency", src: "https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=600",  },
    { heading: "Best Places to Download HTML Templates", para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.", subtitle: "Technologies", src: "https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=600",  },
    { heading: "5 Best Samsung Galaxy Buds Pro Settings", para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.", subtitle: "Programming", src: "https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=600",  },
  ];

  return (
    <div className='bg-white mt-48 flex flex-col justify-center items-center text-center'>
      <h1 className=' text-5xl mb-11 font-extrabold'> Popular Posts </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1  gap-4'>
        {cards.map((card, index) => (
          <CustomCard
            key={index}
            heading={card.heading}
            para={card.para}
            src={card.src}
            subtitle = {card.subtitle}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularPosts;
