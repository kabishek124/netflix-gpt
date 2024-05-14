import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/Stores/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/Constants/constants";
import {
  removeMovieTrailer,
  removeNowPlayingMovies,
  removePopularMovies,
  removeTopRatedMovies,
  removeUpcomingMovies,
} from "../utils/Stores/movieSlice";
import {
  removeAiringSeries,
  removeOnTheAirSeries,
  removePopularSeries,
  removeTopRatedSeries,
} from "../utils/Stores/seriesSlice";
import { disablePersistentCacheIndexAutoCreation } from "firebase/firestore";
import { isToggled } from "../utils/Stores/gptSlice";
import { setLang } from "../utils/Stores/configSlice";
import langConstants from "../utils/Constants/langConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showMessage, setShowMessage] = useState(false);

  const showGptSearch = useSelector((store) => store.gpt.searchButton);

  const user = useSelector((store) => store.user);

  const lang = useSelector((store) => store.config.lang);

  //Handle the routing, Because header will render in all pages
  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        dispatch(removeMovieTrailer());
        dispatch(removeNowPlayingMovies());
        dispatch(removePopularMovies());
        dispatch(removeTopRatedMovies());
        dispatch(removeUpcomingMovies());
        dispatch(removeAiringSeries());
        dispatch(removeOnTheAirSeries());
        dispatch(removeTopRatedSeries());
        dispatch(removePopularSeries());
        navigate("/");
      }
    });
    return () => unSuscribe();
  }, []);

  const handleButtonClick = () => {
    dispatch(isToggled());
    //console.log("ki");
  };
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  const handleLangDisplay = () => {
    setShowMessage(true);
  };

  const handleLangOut = () => {
    setShowMessage(false);
  };

  const handleLanguage = (e) => {
    dispatch(setLang(e.target.value));
  };

  return (
    <div className=" absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={LOGO} alt="logo" />
      <div className="overflow-y-auto">
        <select
          className="bg-gray-900 text-white p-2 m-2 rounded-lg cursor-pointer"
          onMouseEnter={handleLangDisplay}
          onMouseLeave={handleLangOut}
          onChange={handleLanguage}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option
              key={lang.identifier}
              value={lang.identifier}
              onMouseEnter={handleLangOut}
            >
              {lang.name}
            </option>
          ))}
        </select>
        {showMessage && (
          <div className="absolute top-15 right-1/2 p-2 bg-gray-900 text-white rounded-md">
            Please select the language
          </div>
        )}
      </div>
      {user && (
        <div className="flex p-2">
          <button
            className="text-white bg-red-700 mr-4 rounded-lg px-2 py-0 h-12"
            onClick={handleButtonClick}
            autoFocus="autofocus"
          >
            {showGptSearch
              ? langConstants[lang].Homepage
              : langConstants[lang].Search}
          </button>
          <img
            src={user?.photoURL}
            alt="usericon"
            className="w-12 h-12 rounded-lg"
          />
          <button className="text-white font-bold" onClick={handleSignOut}>
            {langConstants[lang].SignOut}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
