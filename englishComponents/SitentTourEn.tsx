import React from "react";
import Link from "next/link";

type Props = {};

export default function SilentTourEnglish({}: Props) {
  return (
    <article className=" articleContainer  ">
      <div className="  border-2 border-black rounded-lg ">
        <div className="relative bg-[#ffa500] w-[100px] p-2 rounded-md">
          <p>2-3 Hours</p>
        </div>

        <div className=" mx-0 top-0 text-center overflow-hidden z-20 pt-5  ">
          <h1 className="text-3xl  text-[#ffa500] font-semibold ">
            Silent <span className="text-black font-bold">In The Night</span>
          </h1>

          <p className="p-3 pb-0 text-sm text-left ">
          Lower your shoulders along with the sun setting into the sea, let the stress go
             everyday pursuits fly away with the sound of birdsong, let the heart
             find the rhythm in the lapping of the waves against the rock... Just breathe and enjoy.
             Allow yourself to just be.{" "}
          </p>
          <p className="p-3 pb-3 text-sm text-left">
          We wander out towards the sea to Buøyoddan. On the trip, we pass the queen's grave and other stone piles.
             About 40 minutes to walk each way, calculate plenty of time out there.
          </p>
          <p className="p-1 text-sm pt-2 font-bold">
            Pris: <span className="text-green-500">490 NOK</span> pr pers. +{" "}
            <span className="text-green-500">250 NOK</span> if desired
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
            <img src="silent_1.jpg" className="   " />
          </div>
          <div className="...">
            <img src="silent_2.jpg" className="   " />
          </div>
          <div className="...">
            <img src="silent_3.jpg" className="  " />
          </div>
          <div className="...">
            <img src="silent_4.jpg" className=" " />
          </div>
        </div>
      </div>
    </article>
  );
}
