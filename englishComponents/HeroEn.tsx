import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

export default function HeroEnglish({}: Props) {
  return (
    <div className="containerStyle ">
      <div>
        <img
          src="background-hero.jpg "
          className="heroBackgroundImg  z-0  relative  "
        />
      </div>

      <motion.div
        initial={{
          y: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="flex absolute top-20 w-[350px] mx-auto  overflow-hidden  text-left flex-row max-w-full justify-evenly   z-10"
      >
        <div className=" p-5 mx-0 text-center overflow-hidden z-20  ">
          <h1 className="font-bold text-5xl text-[#ffa500] ">Explore</h1>
          <h2 className="pt-1 font-medium text-3xl text-black">Leka with us</h2>
          <p className="pt-2 sm text-white">
          Join us and explore this beautiful island with experienced guides.{" "}
          </p>
          <p className="pt-2 text-white">
          We offer a private guided tour created for you!
          </p>
          <button className="ctoaButton text-black border-2 border-white">
            <Link href="#contactEn">
              Contact us
            </Link>
          </button>
        </div>
      </motion.div>
      <div className="z-10 absolute text-center font-bold">
        <Link href="#toursEn">
          <button className="heroButton">Tours</button>
        </Link>
        <Link href="#aboutEn">
          <button className="heroButton">About us</button>
        </Link>
        <Link href="#contactEn">
          <button className="heroButton">Contact</button>
        </Link>
      </div>
    </div>
  );
}


