import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

export default function Hero({}: Props) {
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
          <h2 className="pt-1 font-medium text-3xl text-black">Leka med oss</h2>
          <p className="pt-2 sm text-white">
            Bli med oss og utforsk denne vakkre øya med erfarene guider.{" "}
          </p>
          <p className="pt-2 text-white">
            Vi tilbyr privat guidet tur tilpasset deg!
          </p>
          <button className="ctoaButton text-black border-2 border-white">
            Kontakt Oss
          </button>
        </div>
      </motion.div>
      <div className="z-10 absolute text-center font-bold">
        <Link href="#">
          <button className="heroButton">Turer</button>
        </Link>
        <Link href="#">
          <button className="heroButton">Om oss</button>
        </Link>
        <Link href="#">
          <button className="heroButton">Kontakt</button>
        </Link>
      </div>
    </div>
  );
}


