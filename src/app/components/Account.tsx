"use client";

import { useState } from "react";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const Account: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSocialLogin = (provider: string) => {
    // Placeholder for actual OAuth implementation
    alert(`Login with ${provider} clicked`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 grid md:grid-cols-2 gap-6">
        {/* Login or Register Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">{isLogin ? "Log In" : "Register"}</h2>
          {isLogin ? (
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="block font-medium mb-2">
                  Username or email address
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username or email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block font-medium mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>
              <div className="mb-4 flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="mr-2 h-4 w-4 text-yellow-500 focus:ring-yellow-400"
                />
                <label htmlFor="remember-me" className="text-sm">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
              >
                Log In
              </button>
              <p className="mt-4 text-center text-sm">
                <a href="#" className="text-blue-500 hover:underline">
                  Lost Your Password?
                </a>
              </p>
            </form>
          ) : (
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>
              <p className="text-sm mb-4">
                A link to set a new password will be sent to your email address. Your personal
                data will be used to support your experience throughout this website, to manage
                access to your account, and for other purposes described in our{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  privacy policy
                </a>
                .
              </p>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
              >
                Register
              </button>
            </form>
          )}

          {/* Social Media Login Buttons */}
          <div className="mt-6">
            <p className="text-center font-medium mb-4">Or sign in with</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => handleSocialLogin("Google")}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition"
                aria-label="Login with Google"
              >
                <FaGoogle className="text-xl" />
              </button>
              <button
                onClick={() => handleSocialLogin("Facebook")}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition"
                aria-label="Login with Facebook"
              >
                <FaFacebook className="text-xl" />
              </button>
              <button
                onClick={() => handleSocialLogin("GitHub")}
                className="bg-gray-800 hover:bg-black text-white p-2 rounded-full transition"
                aria-label="Login with GitHub"
              >
                <FaGithub className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Switch Between Forms */}
        <div className="flex flex-col justify-center">
          <button
            onClick={toggleForm}
            className="text-blue-500 underline text-center transition hover:text-blue-700"
          >
            {isLogin ? "Need an account? Register" : "Already have an account? Log In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
