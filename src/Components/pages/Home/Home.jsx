import React, { Suspense, lazy } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import ClientsFeedback from "../../ClientsFeedback";

const HeroSection = lazy(() => import("./HeroSection"));
const RequestCallBack = lazy(() => import("./RequestCallBack"));
const WhyChooseUs = lazy(() => import("./WhyChooseUs"));
const ImageHoverGallery = lazy(() => import("./ImageHoverGallery"));
const TradesStocks = lazy(() => import("./TradesStocks"));
const EntrepreneurHero = lazy(() => import("./EntrepreneurHero"));

export default function Home() {
  return (
    <Suspense
      fallback={
        <div>
          {/* Skeleton placeholder roughly matching HeroSection height */}
          <Skeleton height={400} />
        </div>
      }
    >
      <HeroSection />
      <ImageHoverGallery />
      <TradesStocks />
      {/* <ClientsFeedback /> */}
      {/* <ClientsFeedback/> */}
      <WhyChooseUs />
      <EntrepreneurHero />
      <RequestCallBack />
    </Suspense>
  );
}
