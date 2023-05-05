import React from 'react'
import Link from "next/link";

type Props = {}

export default function SilentTour({}: Props) {
  return (
    <div >
        <article className='flex flex-col rounded-lg items-center space-y-1 bg-gray-300 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[800px] snap-center  p-5  cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <img
         className='w-[200px] h-[200px] object-cover object-center rounded-xl'
         src="silent-4.jpg"/>

         <div className='px-0 md:px-5 text-black'>
             <h4 className='pt-3 pb-3 font-bold text-xl'>Silence in the night</h4>
             <p className='font-thin'>Vi vandrer ut mot havet til Buøyoddan med sine fine jettegryter og svaberg.</p>
             <p>Turen tar 2-3 timer.</p>
             <p className='text-[#00a86b] pt-3 pb-5'>Pris: 490,- pr pers + 250,- hvis det ønskes tilrettelagt for mat og drikke.</p>
             <Link href="#" className='readMoreButton' >
                <button>Les mer</button>
             </Link>
         </div>
    </article>
    </div>
  )
}