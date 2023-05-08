import type { NextPage } from 'next'
import Link from "next/link";
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Tours from '@/components/Tours'
import ExploreTour from '@/components/ExploreTour';
import SilentTour from '@/components/SitentTour';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
          <title> Explore Leka</title>
      </Head>
        {/* HEADER */ }
        <div className=' snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8C4D16] '>
    
        
<section>
          <Header />
       
        </section>
     
      <section>
        <Hero  />
        </section>
       


        {/* HERO */ }
       
       
      <section>
        <ExploreTour />
        
        </section>
        <SilentTour />

        <section>
         
        </section>
        

        
     

         {/* TOURS */ }

        {/* ABOUT */ }

     <section>
        
        </section>
      

       </div>

        {/* RENT BIKE */ }

        {/* FEEDBACK */ }

        {/* CONTACT */ }
      
      

        
    
    </div>
  )
}

export default Home
