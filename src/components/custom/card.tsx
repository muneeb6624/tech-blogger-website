import React from "react";

interface CardProps {
  src: string;
  heading: string;
  para: string;
  subtitle: string;
}

const CustomCard: React.FC<CardProps> = ({ src, heading, para, subtitle }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-sm cursor-pointer shadow-black hover:bg-slate-300 transition ease-in-out duration-300">
      <img
        className="w-full"
        src={src}
        alt="Image"
      />
      <div className="px-6 py-4">
      <div className="text-green-500 text-sm mb-2">{subtitle}</div>
        <div className="font-bold text-xl mb-2">{heading}</div>
        <p className="text-gray-700 text-base">{para}</p>
      </div>
    </div>
  );
}

export default CustomCard;
