import React from "react";
import langConstants from "../utils/Constants/langConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const lang = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={langConstants[lang].Lookingforsomethingtowatch}
        />
        <button className="bg-red-700 text-white py-2 px-4 col-span-3 m-4 rounded-lg">
          {langConstants[lang].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
