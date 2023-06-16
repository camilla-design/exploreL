import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function AboutEnglish({}: Props) {
  return (
    <div className="wrapperContainer">
      <img
        src="backround-hero.jpg"
        className="h-screen absolute inset-0 object-cover object-center mx-auto opacity-[30%]"
      />

      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.4,
        }}
        className="flex flex-col relative w-[300px] md:w-full  h-screen text-center md:text-left md:flex-row max-w-7xl px-18 justify-evenly mx-auto items-center"
      >
        <div className="px-0 md:px-10">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.4,
            }}
            viewport={{
              once: true,
            }}
            src="exploreleka-logo-color.png"
            className=" mb:mb-0 w-[200px] md:w-[300px] flex-shrink-0"
          />
        </div>
        <div className="">
          <h4 className="text-3xl md:text-4xl text-black font-bold">
          About<span className="font-thin">  Us</span>{" "}
          </h4>
          <p className="p-6 md:p-0 w-[360px] mx-auto md:w-[400] text-left text-sm md:text-base font-normal">
            Explore Leka –A company started by the two of us; Marieann Aune and Lene
             Reppen Grydeland, because we love to be out for a walk, and our hearts
             knocking hard and worm for Leka. This island is so beautiful, magical and
             unique! What we see and experience when we are out on a trip, THAT is what we want to contribute
             to show off to those of you who visit Leka. We want to share our joy of walking,
             our nature experiences and our love for Leka with you.
          </p>
          <div className="flex justify-evenly mx-auto items-center">
            <div>
              <img src="marieann.jpg" className="w-32 h-32 rounded-full p-3 " />
              <p>Marianne Aune</p>
              <SocialIcon
                url="https://www.facebook.com/exploreleka.no"
                fgColor="black"
                bgColor="transparent"
              />
            </div>
            <div>
              <img
                src="lenereppen.jpg"
                className="w-32 h-32 rounded-full p-3"
              />
              <p>Lene Reppen Grydeland</p>
              <SocialIcon
                url="https://www.facebook.com/exploreleka.no"
                fgColor="black"
                bgColor="transparent"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
