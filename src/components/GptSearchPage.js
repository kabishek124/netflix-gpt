import React from "react";
import { BGIMAGE } from "../utils/Constants/constants";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div className="">
      <div className="absolute -z-10">
        <img src={BGIMAGE} alt="Bg image" className="" />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearchPage;
