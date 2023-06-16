import React from "react";
import Link from "next/link";

type Props = {};

export default function SilentTour({}: Props) {
  return (
    <article className=" articleContainer  ">
      <div className="  border-2 border-black rounded-lg ">
        <div className="relative bg-[#ffa500] w-[100px] p-2 rounded-md">
          <p>2-3 timer</p>
        </div>

        <div className=" mx-0 top-0 text-center overflow-hidden z-20 pt-5  ">
          <h1 className="text-3xl  text-[#ffa500] font-semibold ">
            Silent <span className="text-black font-bold">In The Night</span>
          </h1>

          <p className="p-3 pb-0 text-sm text-left ">
            Senk skuldrene sammen med sola som går ned i havet, la stresset og
            hverdagssysler fly avsted med lyden av fuglenes sang, la hjertet
            finne rytmen i bølgenes skvulp mot svaberget... Bare puste og nyte.
            Tillat deg selv å bare være.{" "}
          </p>
          <p className="p-3 pb-3 text-sm text-left">
            Vi vandrer ut mot havet til Buøyoddan med sine fine jettegryter og
            svaberg. På turen går vi forbi dronninggraven og andre steinrøyser.
            Ca 40 min å gå hver vei, beregner god tid der ute.
          </p>
          <p className="p-1 text-sm pt-2 font-bold">
            Pris: <span className="text-green-500">490,-</span> pr pers. +{" "}
            <span className="text-green-500">250,-</span> hvis det ønskes
            tilrettelagt for mat og drikke.
          </p>
          <button className="ctoaButton text-black border-2 border-white">
          <Link href="#contact" >
            Kontakt oss
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
