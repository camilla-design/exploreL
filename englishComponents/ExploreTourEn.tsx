import React from "react";
import Link from "next/link";

type Props = {};

export default function ExploreTourEnglish({}: Props) {
  return (
    <article className="articleContainer  ">
      <div className="  border-2 border-black rounded-lg ">
        <div className="relative bg-[#ffa500] w-[100px] p-2 rounded-md">
          <p>5-6 Hours</p>
        </div>

        <div className=" mx-0 top-0 text-center overflow-hidden z-20 pt-5  ">
          <h1 className="text-3xl  text-[#ffa500] font-semibold ">
            Explore <span className="text-black font-bold">Leka</span>
          </h1>

          <p className="p-3 pb-0 text-sm text-left ">
          Walking towards the interior of the earth and stepping on 500 million year olds
             rocks, inwards on pieces of the American continent. To
             Nordtjønna, where we eat a good meal before we continue our journey up
             to Utsikten. Down to Nesvatnet, beyond the Lekafjord with the Heilhorns
             majestic behind. We see the ship anchoring North past Torghatten, Vega and
             the seven sisters. Then down to Møsmørklubban and over to Moho. Requires
             good balance and strong ankles in a magical, unique and whimsical way
             landscape.{" "}
          </p>
          <p className="p-1 text-sm pt-2 font-bold">
            Price: <span className="text-green-500">990 NOK</span> pr pers. +{" "}
            <span className="text-green-500">250 NOK</span>if desired
             arranged for food and drink.
          </p>
          <button className="ctoaButton text-black border-2 border-white">
          <Link href="#contactEn" >
            Contact us
          </Link>
          </button>
        </div>
        <div className="grid grid-cols-2  border-2 border-black mt-2  ">
          <div className="...">
            <img src="explore_1.jpg" className="   " />
          </div>
          <div className="...">
            <img src="explore_2.jpg" className="   " />
          </div>
          <div className="...">
            <img src="explore_3.jpg" className="  " />
          </div>
          <div className="...">
            <img src="explore_4.jpg" className=" " />
          </div>
        </div>
      </div>
    </article>
  );
}
