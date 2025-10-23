import React from "react";
import HeroSection from "./HeroSection";
import RequestCallBack from "./RequestCallBack";
import TestimonialsTeam from "./TestimonialsTeam";
import WhyChooseUs from "./WhyChooseUs";
import ImageHoverGallery from "./ImageHoverGallery";
import TradesStocks from "./TradesStocks";
import EntrepreneurHero from "./EntrepreneurHero";

       export default function Home() {


  return (

   <>
       <HeroSection/>
       <ImageHoverGallery/>
       <TradesStocks/>
       <TestimonialsTeam/>
       <WhyChooseUs/>
{/* <main className="min-h-screen"> */}
       <EntrepreneurHero/>
       <RequestCallBack/>
       {/* </main> */}
   </>
  );
}
