import React from "react";
import SocialLoginCard from "../../../components/SocialLogin/SocialLoginCard";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="flex items-center justify-center py-20">
        <div className="w-full max-w-sm">
          <div className="card-body">
            <div className="flex items-center flex-col gap-3">
              <p className="text-blue-500 font-medium">Welcome back!</p>
              <div className="text-center">
                <h2 className="font-semibold text-3xl">Member Login</h2>
                <p className="text-gray-500 text-xs mt-2">
                  Access to all features. No credit card require.
                </p>
              </div>
              <div className="w-full my-2">
                <SocialLoginCard></SocialLoginCard>
              </div>
            </div>
            <div className="flex items-center my-2">
              <div className="h-[1px] border-t-[1px] flex-1 border-base-300"></div>
              <p className=" text-gray-500 text-center">Or continue with</p>
              <div className="h-[1px] border-t-[1px] flex-1 border-base-300"></div>
            </div>
            <fieldset className="fieldset flex flex-col gap-3">
              <label className="fieldset-label">Email Address</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <div>
              <p className=" text-center text-gray-500 space-x-2 my-1">
                <span>Don't have an Account?</span>
                <Link to={"/register"} className="font-medium text-blue-500">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
