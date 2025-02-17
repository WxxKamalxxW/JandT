

"use client";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <section className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl w-full">
        {/* Login Form Section */}
        <div className="md:w-1/2 px-5">
          <h2 className="text-2xl font-bold text-[#002D74]">Login</h2>
          <p className="text-sm mt-4 text-[#002D74]">
            If you have an account, please login
          </p>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none text-black"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none text-black"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              Log In
            </button>
          </form>

          <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-500" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-500" />
          </div>

          {/* Register Button in place of Google Login */}
          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-black">
            Register
          </button>
        </div>

        {/* Right Side Image */}
        {/* Right Side Image */}
<div className="w-1/2 md:flex hidden items-center justify-center">
  <Image
    src="/jandt.jpg"
    alt="Login Image"
    width={600}
    height={600}
    className="rounded-2xl self-center"
  />
</div>

      </div>
    </section>
  );
}
