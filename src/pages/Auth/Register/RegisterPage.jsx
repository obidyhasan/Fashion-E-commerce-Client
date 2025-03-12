import React from "react";
import SocialLoginCard from "../../../components/SocialLogin/SocialLoginCard";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="flex items-center justify-center py-16">
        <div className="w-full max-w-sm">
          <div className="card-body">
            <div className="flex items-center flex-col gap-3">
              <p className="text-blue-500 font-medium">Register</p>
              <div className="text-center">
                <h2 className="font-semibold text-3xl">Start For Free Today</h2>
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
              <label className="fieldset-label">Name</label>
              <input type="name" className="input w-full" placeholder="name" />
              <label className="fieldset-label">Upload Photo</label>
              <input type="file" className="file-input w-full" />
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

              <button className="btn btn-neutral mt-4">
                Submit & Register
              </button>
            </fieldset>
            <div>
              <p className=" text-center text-gray-500 space-x-2 my-1">
                <span>Already have an Account?</span>
                <Link to={"/login"} className="font-medium text-blue-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
