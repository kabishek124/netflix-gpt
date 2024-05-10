import React from "react";
import { Icon } from "@iconify/react";

const VideoInfo = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute top-0 left-0 text-white bg-gradient-to-r from-black pt-[20%] px-24">
      <h1 className="text-4xl py-6 font-bold  w-1/4">{title}</h1>
      <p className="py-1 text-lg w-2/4 pb-8">{overview}</p>
      <div className="">
        {/* <Icon className="bg-white ml-1" icon="mingcute:play-line" /> */}
        <button className="font-bold text-lg bg-white text-black w-22 px-8 py-2 hover:bg-opacity-70 rounded-lg">
          Play
        </button>
        <button className="font-bold text-lg bg-gray-500 text-white w-22 px-4 py-2 bg-opacity-50 rounded-lg mx-2">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
