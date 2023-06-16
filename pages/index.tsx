import type { NextPage } from 'next'
import Link from "next/link";
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ImageGallery from '@/components/ImageGallery';
import About from '@/components/About'
import Tours from '@/components/Tours'
import ContactUs from '@/components/ContactUs';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
          <title> Explore Leka</title>
      </Head>
        {/* HEADER */ }
        <div className=' snap-y snap-mandatory overflow-y-scroll  overflow-x-hidden z-0  scrollbar-thin scrollbar-track-[#dc7d2a]/60 scrollbar-thumb-[#dc7d2a] display:-webkit-flex '>
    
        
    <Header />

     {/* HERO */ }
      
      <section id="hero" className='snap-start' >
        <Hero  />
        </section>

        <section className='snap-center '>
        <ImageGallery />
        </section>
       
   

       
       {/* TOURS */ }
       
      <section id="tours" className='snap-center' >
      
        <Tours />
        </section>
      

        {/* ABOUT */ }

     <section id="about" className='snap-center'>
        <About />
        </section>

         {/* CONTACT */ }

        <section id="contact" className='snap-center'>
        <ContactUs />
       </section>
      

       </div>

       

      

       
      
      

        
    
    </div>
  )
}

export default Home
