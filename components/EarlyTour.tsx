import React from 'react'
import Link from "next/link";

type Props = {}

export default function EarlyTour({}: Props) {
  return (
    <div >
        <article className=' flex flex-col rounded-lg items-center space-y-1 bg-gray-300 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[800px] snap-center  p-5  cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <img
         className='w-[200px] h-[200px] object-cover object-center rounded-xl'
         src="early-tour.jpg"/>

         <div className='px-0 md:px-5 text-black'>
             <h4 className='pt-3 pb-3 font-bold text-xl'>Early Bird</h4>
             <p className='font-thin'>Earlybird-tur med sykkel ut til Skeisnesset for å spise frokost.</p>
             <p>Turtid etter behov og ønsker.</p>
             <p className='text-[#00a86b] pt-3 pb-5'>Pris: 490,- pr pers + 250,- hvis det ønskes tilrettelagt for mat og drikke.</p>
             <Link href="#" className='readMoreButton' >
                <button>Les mer</button>
             </Link>
         </div>
    </article>
    </div>
  )
}