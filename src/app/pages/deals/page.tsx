import React from 'react'
import CustomCard from '@/components/custom/card';
import Featured from '@/sections/(home)/featured/page';

function Deals() {
  const cards = [
    { heading: "What are blockchain transaction fees?", para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.", subtitle: "Cryptocurrency", src: "https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=600",  },
    { heading: "Best Places to Download HTML Templates", para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.", subtitle: "Technologies", src: "https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=600",  },
    { heading: "5 Best Samsung Galaxy Buds Pro Settings", para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.", subtitle: "Programming", src: "https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=600",  },
    { heading: "What are blockchain transaction fees?", para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.", subtitle: "Cryptocurrency", src: "https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=600",  },
    { heading: "Best Places to Download HTML Templates", para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.", subtitle: "Technologies", src: "https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=600",  },
    { heading: "5 Best Samsung Galaxy Buds Pro Settings", para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.", subtitle: "Programming", src: "https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=600",  },

  ];
  return (
    <div>
<div className=' bg-none bg-transparent flex justify-center mt-28 '> 
  <h1 className=' text-white font-extrabold text-5xl '>Deals</h1>
</div>
 <div className='bg-white mt-28 flex flex-col justify-center items-center text-center mb-6'>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1  gap-4 gap-y-11 mt-10 mb-28'>
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
    <Featured />
  </div>
    </div>
   
  )
}

export default Deals