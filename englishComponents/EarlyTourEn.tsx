import React from "react";
import Link from "next/link";

type Props = {};

export default function EarlyTourEnglish({}: Props) {
  return (
    <article className=" articleContainer  ">
      <div
        className="  border-2 border-black rounded-lg "
      >
        <div className="relative bg-[#ffa500] w-[100px] p-2 rounded-md">
          <p>Needs and wishes</p>
        </div>

        <div className=" mx-0 top-0 text-center overflow-hidden z-20 pt-5  ">
          <h1 className="text-3xl  text-[#ffa500] font-semibold ">
            Early <span className="text-black font-bold">Bird</span>
          </h1>

          <p className="p-3 pb-0 text-sm text-left ">
          Early-trip by bike to Skeisnesset to have breakfast,
             photography etc. Hike out to the north end of Leka, among others
             coastal heather, burial mounds, birds and wild sheep to watch the morning sun
             get up. Breakfast and morning sun in peaceful surroundings, for us who
             wish you an extra beautiful start to the day.{" "}
          </p>
          <p className="text-sm text-left p-3">
          The trip is well suited for morning yoga, meditation or photography
             poem inspiration.
          </p>
          <p className="p-1 text-sm pt-2 font-bold">
            Price: <span className="text-green-500">490 NOK</span> pr pers. +{" "}
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
            <img src="early_1.jpg" className="   " />
          </div>
          <div className="...">
            <img src="early_2.jpg" className="   " />
          </div>
          <div className="...">
            <img src="early_3.jpg" className="  " />
          </div>
          <div className="...">
            <img src="early_4.jpg" className=" " />
          </div>
        </div>
      </div>
    </article>
  );
}
