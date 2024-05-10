import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/Stores/userSlice";
import { LOGO } from "../utils/Constants/constants";
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

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

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

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  return (
    <div className=" absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          <img src={user?.photoURL} alt="usericon" className="w-12 h-12" />
          <button className="text-white font-bold" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
