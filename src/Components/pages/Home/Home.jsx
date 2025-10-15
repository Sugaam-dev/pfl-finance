import React from "react";
import Carousel from "./Carousel";
import ImageHoverGallery from "./ImageHoverGallery";
import TradesStocks from "./TradesStocks";


export default function Home() {
  const images = [
    "/images/slide-1.jpg",
    "/images/slide-2.jpg",
    "/images/slide-3.jpg",
    "/images/slide-4.jpg",
  ];

  return (
    <main className="min-h-screen">
      {/* Home page hero carousel */}
      {/* <section className="mx-auto max-w-[1400px]"> */}
        <Carousel images={images} />
        <ImageHoverGallery/>
        <TradesStocks/>
      {/* </section> */}
    </main>
  );
}
