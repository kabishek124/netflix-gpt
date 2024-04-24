import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUpForm, setSignUpForm] = useState(false);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  //function to handle the sign up / sign in
  const handleSignUpForm = () => {
    setSignUpForm(!isSignUpForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg image"
        />
      </div>
      <form className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-black text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignUpForm ? "Sign up" : "Sign in "}
        </h1>
        {isSignUpForm && (
          <input
            className="p-4 my-4 w-full bg-gray-700"
            type="text"
            placeholder="Enter the name"
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="text"
          placeholder="Enter the email"
        />
        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="password"
          placeholder="Enter the password"
        />
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg">
          {isSignUpForm ? "Sign up" : "sign in"}
        </button>
        <div className="flex">
          <a className="mr-1 text-gray-500 text-base">
            {!isSignUpForm
              ? "Didn't have account?"
              : "Already have an account?"}
          </a>
          <p
            onClick={handleSignUpForm}
            className="cursor-pointer relative text-base text-white hover:underline"
          >
            {!isSignUpForm ? "Sign up here" : "Sign in here"}
          </p>
        </div>
        <div className="relative">
          <p className="mt-5 text-sm text-gray-500">
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
