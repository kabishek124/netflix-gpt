import React from "react";
import { Icon } from "@iconify/react";

const VideoInfo = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-xl py-6 font-bold  w-1/4">{title}</h1>
      <p className="py-1 text-lg w-2/4 pb-8">{overview}</p>
      <div className="">
        {/* <Icon className="bg-white ml-1" icon="mingcute:play-line" /> */}
        <button className="font-bold text-lg bg-black text-white w-22 px-8 py-2 bg-opacity-90 rounded-lg">
          Play
        </button>
        <button className="font-bold text-lg bg-black text-white w-22 px-4 py-2 bg-opacity-90 rounded-lg mx-2">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
