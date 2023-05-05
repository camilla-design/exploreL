import React from 'react'

type Props = {}

export default function ToursCards({}: Props) {
  return (
    <div >
        <article className='flex flex-col rounded-lg items-center space-y-1 bg-black flex-shrink-0 w-[400px] md:w-[600px] xl:w-[800px] snap-center  p-5 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <img
         className='w-[200px] h-[200px] object-cover object-center'
         src="hero-img-1.jpg"/>

         <div className='px-0 md:px-5 text-gray-200'>
             <h4 className='pt-3 pb-3 font-bold text-xl'>Explore Leka</h4>
             <p className='font-thin'>Dette er en litt lengre vandretur innover øya hvor vi kommer til å gå innom bergarter fra jordens indre.

Vi vandrer inn mot jordens indre og tråkker på 500 millioner år gamle bergarter, innover på biter av det Amerikanske kontinentet. Videre går vi opp til Nordtjønna hvor vi spiser et godt måltid før vi tar turen videre opp til Utsikten. Herifra ser vi ned til Nesvatnet, utover Lekafjorden med Heilhornene majestetisk bak. Vi ser skipsleia Nordover forbi Torghatten, Vega og de syv søstre. Fra utsikten går vi ned til Møsmørklubban og bortover til Moho. Dette er en rundtur som krever god balanse og sterke ankler i et magisk, unikt og lunefullt landskap.</p>
             <p className='text-[#00a86b] pt-3'>Pris: 990,- pr pers. + 250,- hvis det ønskes tilrettelagt for mat og drikke.</p>
         </div>
    </article>
    </div>
  )
}