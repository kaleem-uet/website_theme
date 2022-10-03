import React from 'react'
import HeroSection from '../components/HeroSection'
import Card from "../components/Card";
import Footer from '../components/Footer';
function Home() {
  return (
    <>
       <HeroSection/>
       <div style={{ padding:4, backgroundColor:"white",}}>
         <Card/>
         
       </div>
       <Footer/>
       
    </>
   
  )
}

export default Home