import type { NextPage } from 'next'
import Link from "next/link";
import Head from 'next/head'
import HeaderEnglish from '@/englishComponents/HeaderEn';
import HeroEnglish from '@/englishComponents/HeroEn';
import ImageGalleryEnglish from '@/englishComponents/ImageGalleryEn';
import AboutEnglish from '@/englishComponents/AboutEn';
import ToursEnglish from '@/englishComponents/ToursEn';
import ContactUsEnglish from '@/englishComponents/ContactUsEn';

const HomeEnglish: NextPage = () => {
    return (
      <div>
      <Head>
          <title> Explore Leka</title>
      </Head>
        {/* HEADER */ }
        <div className=' snap-y snap-mandatory overflow-y-scroll  overflow-x-hidden z-0  scrollbar-thin scrollbar-track-[#dc7d2a]/60 scrollbar-thumb-[#dc7d2a] display:-webkit-flex '>
    
        
    <HeaderEnglish />

     {/* HERO */ }
      
      <section id="heroEn" className='snap-start' >
        <HeroEnglish   />
        </section>

        <section className='snap-center '>
        <ImageGalleryEnglish />
        </section>
       
   

       
       {/* TOURS */ }
       
      <section id="toursEn" className='snap-center' >
      
        <ToursEnglish />
        </section>
      

        {/* ABOUT */ }

     <section id="aboutEn" className='snap-center'>
        <AboutEnglish />
        </section>

         {/* CONTACT */ }

        <section id="contactEn" className='snap-center'>
        <ContactUsEnglish />
       </section>
      

       </div>

       

      

       
      
      

        
    
    </div>
    )
  }
  
  export default HomeEnglish