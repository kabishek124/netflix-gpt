import React, { useRef, useState } from "react";
import Header from "./Header";
import validation from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/stores/userSlice";
import { BGIMAGE, PHOTOURL } from "../utils/Constants/constants";

const Login = () => {
  const [isSignUpForm, setSignUpForm] = useState(false);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [validateMessage, setValidateMessage] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  //function to handle the sign up / sign in
  const handleSignUpForm = () => {
    setSignUpForm(!isSignUpForm);
  };

  //function to validate the form
  const handleFormValidation = () => {
    //validation();
    const data = validation(email.current.value, password.current.value);

    if (data === null) {
      //Sign in the user using firebase api method
      if (!isSignUpForm) {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((error) => {
            setValidateMessage(error.code + " " + error.message);
          });
      } else {
        //Create the user
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: { PHOTOURL },
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                setValidateMessage(error.message);
              });
          })
          .catch((error) => {
            setValidateMessage(error.code + " " + error.message);
          });
      }
    } else {
      setValidateMessage(data);
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BGIMAGE} alt="bg image" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-black text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignUpForm ? "Sign up" : "Sign in "}
        </h1>
        {isSignUpForm && (
          <input
            ref={name}
            className="p-4 my-4 w-full bg-gray-700"
            type="text"
            placeholder="Enter the name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-700"
          type="text"
          placeholder="Enter the email"
        />
        <input
          ref={password}
          className="p-4 my-4 w-full bg-gray-700"
          type="password"
          placeholder="Enter the password"
        />
        <p>{validateMessage}</p>
        <button
          className="p-4 my-6 bg-red-600 w-full rounded-lg"
          onClick={handleFormValidation}
          type="submit"
        >
          {isSignUpForm ? "Sign up" : "sign in"}
        </button>
        <div className="flex ">
          <a className="mr-1 text-gray-500 text-base ">
            {!isSignUpForm
              ? "Didn't have account?"
              : "Already have an account?"}
          </a>
          <p
            onClick={handleSignUpForm}
            className="cursor-pointer relative   text-base text-white hover:underline"
          >
            {!isSignUpForm ? "Sign up here" : "Sign in here"}
          </p>
        </div>
        <div className="relative">
          <p className="mt-5 text-sm text-gray-500 antialiased">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
          {!showAdditionalInfo && (
            <a
              className="mt-1 hover:underline text-blue-500 cursor-pointer text-sm"
              onClick={() => {
                setShowAdditionalInfo(true);
              }}
            >
              Learn more.
            </a>
          )}
          {showAdditionalInfo && (
            <p className="mt-3 text-sm text-gray-500">
              The information collected by Google reCAPTCHA is subject to the
              Google Privacy Policy and Terms of Service, and is used for
              providing, maintaining, and improving the reCAPTCHA service and
              for general security purposes (it is not used for personalized
              advertising by Google).
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
