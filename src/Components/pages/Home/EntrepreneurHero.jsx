// import React from 'react';

// export default function EntrepreneurHero() {
//   return (
//     <>
//       <style>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body {
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
//         }

//         .hero-container {
//           position: relative;
//           width: 100%;
//           min-height: 400px;
//           height: 50vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//           background: linear-gradient(135deg, #4a3f5f 0%, #6b5a7a 50%, #5d4e6f 100%);
//         }

//         .hero-background {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           overflow: hidden;
//         }

//         .grid-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background-image: 
//             repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255, 255, 255, 0.05) 49px, rgba(255, 255, 255, 0.05) 50px),
//             repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(255, 255, 255, 0.05) 79px, rgba(255, 255, 255, 0.05) 80px);
//           opacity: 0.6;
//         }

//         .silhouette {
//           position: absolute;
//           bottom: 0;
//           background: rgba(20, 15, 30, 0.7);
//           border-radius: 50% 50% 0 0;
//         }

//         .silhouette-1 {
//           left: 5%;
//           width: 60px;
//           height: 180px;
//           animation: float 3s ease-in-out infinite;
//         }

//         .silhouette-2 {
//           left: 25%;
//           width: 70px;
//           height: 200px;
//           animation: float 3.5s ease-in-out infinite 0.5s;
//         }

//         .silhouette-3 {
//           left: 50%;
//           transform: translateX(-50%);
//           width: 80px;
//           height: 220px;
//           animation: float 3.2s ease-in-out infinite 1s;
//         }

//         .silhouette-4 {
//           right: 25%;
//           width: 65px;
//           height: 190px;
//           animation: float 3.8s ease-in-out infinite 1.5s;
//         }

//         .silhouette-5 {
//           right: 5%;
//           width: 55px;
//           height: 170px;
//           animation: float 3.3s ease-in-out infinite 0.8s;
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         .hero-content {
//           position: relative;
//           z-index: 10;
//           text-align: center;
//           padding: 40px 20px;
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .hero-title {
//           font-size: clamp(24px, 5vw, 48px);
//           font-weight: 300;
//           color: #7dd3c0;
//           line-height: 1.4;
//           letter-spacing: -0.02em;
//           text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
//         }

//         .hero-subtitle {
//           color: #ffffff;
//           font-weight: 400;
//         }

//         @media (max-width: 768px) {
//           .hero-container {
//             min-height: 300px;
//             height: 40vh;
//           }

//           .silhouette-1,
//           .silhouette-5 {
//             display: none;
//           }

//           .silhouette {
//             width: 50px !important;
//             height: 150px !important;
//           }

//           .hero-title {
//             font-size: clamp(20px, 4vw, 32px);
//           }
//         }

//         @media (max-width: 480px) {
//           .hero-container {
//             min-height: 250px;
//           }

//           .silhouette-2,
//           .silhouette-4 {
//             opacity: 0.5;
//           }

//           .hero-content {
//             padding: 30px 15px;
//           }
//         }
//       `}</style>
      
//       <div className="hero-container">
//         <div className="hero-background">
//           <div className="grid-overlay"></div>
//           <div className="silhouette silhouette-1"></div>
//           <div className="silhouette silhouette-2"></div>
//           <div className="silhouette silhouette-3"></div>
//           <div className="silhouette silhouette-4"></div>
//           <div className="silhouette silhouette-5"></div>
//         </div>
        
//         <div className="hero-content">
//           <h1 className="hero-title">
//             To help entrepreneurs get their act together
//             <br />
//             <span className="hero-subtitle">before they talk to investors.</span>
//           </h1>
//         </div>
//       </div>
//     </>
//   );
// }




import React from 'react';

export default function EntrepreneurHero() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .hero-container {
          position: relative;
          width: 100%;
          min-height: 400px;
          height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(135deg, #4a3f5f 0%, #6b5a7a 50%, #5d4e6f 100%);
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .hero-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: clamp(24px, 5vw, 48px);
          font-weight: 300;
          color: #7dd3c0;
          line-height: 1.4;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }

        .hero-subtitle {
          color: #ffffff;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .hero-container {
            min-height: 300px;
            height: 40vh;
          }

          .hero-title {
            font-size: clamp(20px, 4vw, 32px);
          }
        }

        @media (max-width: 480px) {
          .hero-container {
            min-height: 250px;
          }

          .hero-content {
            padding: 30px 15px;
          }
        }
      `}</style>
      
      <div className="hero-container">
        <div className="hero-background">
          <img 
            src="/images/slide-1.jpg" 
            alt="Office background" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <h1 className="hero-title">
            To help entrepreneurs get their act together
            <br />
            <span className="hero-subtitle">before they talk to investors.</span>
          </h1>
        </div>
      </div>
    </>
  );
}