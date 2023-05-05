import React from 'react'
import EarlyTour from './EarlyTour'
import ExploreTour from './ExploreTour'
import SilentTour from './SitentTour'

type Props = {}

export default function Tours({}: Props) {
  return (
    <div className='h-screen  overflow-hidden flex-col text-lft md:flex-row max-w-full justify-evenly mx-auto items-center'>
        <h2 className='p-0 text-3xl font-bold text-center'>Turerene <span className='font-thin'>vi tilbyr!</span></h2>
        <p className='p-0 text-center'>Vi skreddesyr også turer tilpasset deg, ta kontakt for andre turer.</p>
        <div className='flex relative'>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8C4D16]'>
          
            <ExploreTour />
            <SilentTour />
            <EarlyTour />
            
        
        </div>
        </div>
    </div>
  )
}

/*
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


*/ 