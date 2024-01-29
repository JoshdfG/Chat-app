"use client";
import { useState, useRef, useEffect, SetStateAction } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { signIn } from "next-auth/react";
import Link from "next/link";
import { auth } from "../firebase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signup = async () => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log(res.user.uid);
  };

  return (
    <form className="max-w-sm mx-auto  bg-slate-950 hover:shadow-lg flex flex-col justify-center items-center py-12 mt-28  border-gray-400 rounded-lg p-8">
      <div className="mb-5  ">
        <div>
          <h1 className=" capitalize text-center font-bold text-xl mb-12">
            sign up
          </h1>
        </div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium  dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="shadow-sm bg-black border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="name@flowbite.com"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium  dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          className="shadow-sm bg-black border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="repeat-password"
          className="block mb-2 text-sm font-medium  dark:text-white"
        >
          Confirm password
        </label>
        <input
          type="password"
          id="repeat-password"
          name="password"
          autoComplete="current-password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="shadow-sm bg-black border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <div className="flex items-start mb-5">
        <div>
          <p className="text-sm tracking-wider">
            Already have an account?{" "}
            <Link href="/login" className=" text-blue-400 hover:text-blue-200">
              Login
            </Link>
          </p>
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        disabled={
          !email ||
          !password ||
          !confirmPassword ||
          password !== confirmPassword
        }
        onClick={(e) => {
          e.preventDefault();
          signup();
        }}
      >
        Register new account
      </button>
    </form>
  );
}
