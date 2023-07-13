import * as React from "react";
import { Component } from "react";
import logo from "../../assets/autometry-logo.svg";

const SignInForm = () => {
  return (
    <div className="grid grid-cols-5 gap4">
      <div className="col-span-2 border-r border-grey">
        <div className="flex h-screen w-full justify-center items-center">
          <img src={logo} alt="logo" />
        </div>
        <img src={logo} alt="logo" />
      </div>
      <div className="login-form bg-blue col-span-3">
        <div className="flex h-screen w-full justify-center items-center">
          <form className="px-8 pt-6 pb-8 mb-4 w-1/2">
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2 text-left"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-black text-sm font-bold mb-2 text-left"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
             
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
