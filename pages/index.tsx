import type { NextPage } from 'next'
import Link from "next/link";
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ImageGridGallery from '@/components/imageGridGallery';
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
        <div className=' snap-y snap-mandatory overflow-y-scroll  overflow-x-hidden z-0  scrollbar-thin scrollbar-track-[#dc7d2a]/60 scrollbar-thumb-[#dc7d2a] '>
    
        
    <Header />

     {/* HERO */ }
      
      <section className='snap-start' >
        <Hero  />
        </section>
        <section className=' '>
        <ImageGridGallery />
        </section>
       
   

       
       {/* TOURS */ }
       
      <section className='snap-center' >
      
        <Tours />
        </section>
       

       
        

        
     

         

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
