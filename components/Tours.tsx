import React from 'react'

type Props = {}

export default function Tours({}: Props) {
  return (
    <div className='h-screen relative overflow-hidden  text-left  max-w-full justify-evenly mx-auto items-center z-0'>
        <div className='flex-col md:flex-row relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8C4D16]'>
           <div className='snap-center flex flex-col space-y-1 items-center justify-center p-20 md:p-44 h-screen'>
           <h2 className=' text-3xl font-bold'>Turerene <span className='font-thin'>vi tilbyr!</span></h2>
            <p className='pb-3'>Vi skreddesyr også turer tilpasset deg, ta kontakt for andre turer.</p>
            <img src="exploreleka-img.jpg" width={200} />
            <div>
            <h3 className='pt-3 pb-3 font-bold text-xl'>Explore Leka</h3>
            <p className='font-thin'>Dette er en litt lengre vandretur innover øya hvor vi kommer til å gå innom bergarter fra jordens indre.

Vi vandrer inn mot jordens indre og tråkker på 500 millioner år gamle bergarter, innover på biter av det Amerikanske kontinentet. Videre går vi opp til Nordtjønna hvor vi spiser et godt måltid før vi tar turen videre opp til Utsikten. Herifra ser vi ned til Nesvatnet, utover Lekafjorden med Heilhornene majestetisk bak. Vi ser skipsleia Nordover forbi Torghatten, Vega og de syv søstre. Fra utsikten går vi ned til Møsmørklubban og bortover til Moho. Dette er en rundtur som krever god balanse og sterke ankler i et magisk, unikt og lunefullt landskap.</p>
<p className='pt-3'>Pris: 990,- pr pers. + 250,- hvis det ønskes tilrettelagt for mat og drikke.</p>
</div>
           </div>

           

            
        </div>

        
    </div>
  )
}

