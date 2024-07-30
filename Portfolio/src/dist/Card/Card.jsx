import React from "react";
import "./Arrow.css";

function Card({ title, content, pic, link, deployLink }) {
  return (
    <div className="flex flex-wrap-reverse md:h-[300px] md:w-[1200px] h-auto w-auto  justify-evenly  bg-slate-100 rounded-xl mx-4 shadow-xl md:shadow-none py-3">
      <div className=" flex-col md:mt-2">
        <a href={link}>
          <div className="font-semibold md:text-2xl text-xl  mt-4 mb-2 mx-[10px] cursor-pointer">
            {" "}
            {title}
          </div>
        </a>

        <div className="max-w-lg mx-auto p-2">
          <p className="text-justify md:text-base text-sm leading-relaxed text-gray-700">
            {" "}
            {content}
          </p>
        </div>
        <a href={deployLink} target="_blank" rel="noopener noreferrer">
          <span className="font-semibold mx-2 my-2 text-blue-600 font-roboto cursor-pointer">
            {" "}
            Check it out
            <span className="arrow-right"></span>
          </span>
        </a>
      </div>

      <div className=" md:w-[400px] md:h-[260px] my-4 mx-3 ">
        <img
          className="rounded-lg  w-full h-full object-cover"
          src={pic}
          alt="loading"
        />
      </div>
    </div>
  );
}

export default Card;
