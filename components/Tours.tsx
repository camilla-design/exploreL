import React from 'react'
import { motion } from "framer-motion";
import EarlyTour from './EarlyTour'
import ExploreTour from './ExploreTour'
import SilentTour from './SitentTour'

type Props = {}

export default function Tours({}: Props) {
  return (
<div className='p-2 relative text-center -top-10'><h3 className='uppercase tracking-[15px]  font-bold text-black pb-2 text-sm md:text-lg'>Bli med oss på tur!</h3>
        <p className='pb-3 w-[350px] md:w-[700px] text-left mx-auto font-thin md:pb-10'>Vi kan skreddersy en tur som vil gi deg en magisk opplevelse, blandt unike fjell man ikke finner andre steder i Norge. Vi er lokale som kjenner steder som ikke vanligvis blir vist med andre guider, steder som gir ro i sjelen og som gir nytt syn på naturen. Kontakt oss, så drar vi på tur! Vi kan gi de beste tipsene for ett magisk eventyr på Leka, vi har spektakulære fjell, unikt landskap som ikke fins andre steder i Norge. Samt at vi kjenner til alle plasser hvor DU burde se, og andre ting man kan gjøre på Øya. Ta kontakt med oss, så tilpasser vi en tur for deg med oss eller en tur du ønsker alene.</p>
        <h2 className='pb-3 font-medium uppercase text-sm md:text-lg'>Her er noen av turene vi tilbyr!</h2>
    <div className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-5 justify-evenly mx-auto items-center'>
        
        <div className='scrollBar'>
        <EarlyTour />
        <ExploreTour />
        <SilentTour />

    
        </div>
        </div>
    </div>
   
  )
}

/*

  <img src="backround-hero.jpg" className='h-screen absolute inset-0 object-cover object-center mx-auto opacity-[30%]'/>
    
    

 */