import React from "react";
import Image from "next/image";

interface CardProps {
  src: string;
  heading: string;
  para: string;
  subtitle: string;
}

const CustomCard: React.FC<CardProps> = ({ src, heading, para, subtitle }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md cursor-pointer hover:bg-slate-300 transition ease-in-out duration-300">
      <Image
        width= {500}
        height={500}
        src={src}
        alt="Image"
        className=" h-64"
      />
      <div className="px-6 py-4">
      <div className="text-green-500 font-bold text-sm mb-2 font-sans">{subtitle}</div>
        <div className="font-extrabold text-2xl mb-2 font-montserrat">{heading}</div>
        <p className="text-gray-700 text-base font-sans">{para}</p>
      </div>
    </div>
  );
}

export default CustomCard;
