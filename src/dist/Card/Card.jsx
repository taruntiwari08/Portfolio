import React from "react";
import "./Arrow.css";

function Card({ title, content, pic, link, deployLink }) {
  return (
    <div className="flex flex-wrap-reverse lg:h-[300px] lg:w-[1200px] h-auto w-auto  justify-evenly dark:bg-black  bg-slate-100 rounded-xl mx-4 shadow-xl lg:shadow-none py-3">
      <div className=" flex-col dark:text-slate-100  lg:mt-2">
        <a href={link}>
          <div className="font-semibold lg:text-2xl text-xl  mt-4 mb-2 mx-[10px] cursor-pointer">
            {" "}
            {title}
          </div>
        </a>

        <div className="max-w-lg mx-auto p-2">
          <div
            className="text-justify lg:text-base text-sm leading-relaxed dark:text-gray-400 text-gray-700"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <a href={deployLink} target="_blank" rel="noopener noreferrer">
          <span className="font-semibold mx-2 my-2 text-blue-600 font-roboto cursor-pointer">
            {" "}
            Check it out
            <span className="arrow-right"></span>
          </span>
        </a>
      </div>

      <div className=" lg:w-[400px] lg:h-[260px] my-4 mx-3 ">
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
