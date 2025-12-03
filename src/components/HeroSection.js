// import React from "react";
// import "./HeroSection.css";

// function HeroSection() {
//   const slides = [
//     {
//       img: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/NOVEMBER/20/53BJoLX3_bf91903d426c4e768df4256d618cbeb9.png",
//       link: "https://www.myntra.com/myntra?f=Gender%3Amen%2Cmen%20women%3A%3AQuick%20Filters%3APrice%20Crash",
//     },
//   ];

//   const slide1 = [
//     {
//       img: "https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/NOVEMBER/20/YFk07cgf_7592255c64424139b189d88256b32aeb.png",
//     },
//     {
//       img: "https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/NOVEMBER/20/Mt5jgVpe_db985b9975994b02af366bbee1b68b7b.png",
//     },
//   ];

//   const slides2 = [
//     {
//       img: "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/NOVEMBER/20/OWc0yOUW_eec2318369954e15bdfceb482d898567.gif",
//     },
//   ];

//   const slides3 = [
//     {
//       img: "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/NOVEMBER/20/R7MyoHAe_d6823a0419db436da97b719b515fb83e.png",
//     },
//   ];

//   const slides4 = [
//     {
//       img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/NOVEMBER/7/7ACdcqWY_60cb7d4c172b405fa5298a3ecd6c1b60.png",
//     },
//     {
//       img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/NOVEMBER/7/G9L6pT8d_0690ad5d1e9845c09401b243df14972e.png",
//     },
//     {
//       img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/NOVEMBER/7/l5xhKcBT_aaaa2806a0d249eba502cd22fabe5139.png",
//     },
//     {
//       img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/NOVEMBER/7/dX4QAee6_07acea3138ec4de2b982ffca6531e7f9.png",
//     },
//     {
//       img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/NOVEMBER/7/dX4QAee6_07acea3138ec4de2b982ffca6531e7f9.png",
//     },
//     {
//       img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/NOVEMBER/7/XGJqVKpI_50610456b7ae47148f5478ac257b0ba7.png",
//     },
//     {
//       img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/NOVEMBER/7/kDGhUwkN_682470a5d57d4729ba524581d2700c46.png",
//     },
//     {
//       img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/NOVEMBER/7/kDGhUwkN_682470a5d57d4729ba524581d2700c46.png",
//     },
//     {
//       img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/NOVEMBER/7/mf50Cg9r_7743f5bad9034ba58345e8df858d484d.png",
//     },
//     {
//       img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2025/NOVEMBER/7/FtZmszi5_e9d7a7488a0e4e6da868bf3d60030ade.png",
//     },
//   ];

//   return (
//     <div className="hero-wrapper">
//       <div
//         id="heroCarousel"
//         className="carousel slide mb-4"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-indicators">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               type="button"
//               data-bs-target="#heroCarousel"
//               data-bs-slide-to={index}
//               className={index === 0 ? "active" : ""}
//             ></button>
//           ))}
//         </div>

//         <div className="carousel-inner">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`carousel-item ${index === 0 ? "active" : ""}`}
//             >
//               <a href={slide.link} target="_blank" rel="noreferrer">
//                 <img src={slide.img} className="d-block w-100" alt="banner" />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="d-flex gap-3 mb-4 small-row">
//         {slide1.map((slide, index) => (
//           <img key={index} src={slide.img} className="small-img" alt="small" />
//         ))}
//       </div>

//       <div className="mb-4">
//         <img src={slides2[0].img} className="d-block w-100" alt="banner" />
//       </div>

//       <div className="mb-4">
//         <img src={slides3[0].img} className="d-block w-100" alt="banner" />
//       </div>

//       <div
//         id="heroCarousel4"
//         className="carousel slide mb-4"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-indicators">
//           {[0, 1].map((_, index) => (
//             <button
//               key={index}
//               type="button"
//               data-bs-target="#heroCarousel4"
//               data-bs-slide-to={index}
//               className={index === 0 ? "active" : ""}
//             ></button>
//           ))}
//         </div>

//         <div className="carousel-inner">
//           <div className="carousel-item active" data-bs-interval="2000">
//             <div className="d-flex gap-3 justify-content-between">
//               {slides4.slice(0, 4).map((slide, index) => (
//                 <img
//                   key={index}
//                   src={slide.img}
//                   className="grid-img"
//                   alt="offer"
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="carousel-item" data-bs-interval="2000">
//             <div className="d-flex gap-3 justify-content-between">
//               {slides4.slice(4,8).map((slide, index) => (
//                 <img
//                   key={index}
//                   src={slide.img}
//                   className="grid-img"
//                   alt="offer"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;

























import React from "react";
import "./HeroSection.css";

function HeroSection() {
  const slides = [
    {
      img: "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/e384cb32-690c-4ccf-a6cb-61df36960bb21651599573972-Workwear_Desk.jpg",
      link: "https://www.myntra.com/fwdgenzcollection?f=Gender%3Amen%2Cmen%20women"
    },
    {
      img: "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/b54399f0-6ed5-44b3-84b0-e9d5c1657aaa1651599573991-CR7_Desk_Baner.jpg",
      link: "https://www.myntra.com/myntra-fashion-store"
    },
    {
      img: "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/846beb79-ada7-48c3-a6c6-4448f276c2111651599573979-Sports-Shoes_Desk.jpg",
      link: "https://www.myntra.com/cr7?sort=popularity"
    },
    {
      img: "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/abd2b07f-954c-43ad-ba39-bfa50527d0641650180659364-Backpacks---Luggage_Desk.jpg",
      link: "https://www.myntra.com/sportscategory"
    },
    {
      img: "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/eb6408d8-b413-49f7-8525-317fddba53821650180659351-Casual---Sports-Shoes_Desk.jpg",
      link: "https://www.myntra.com/backpacks"
    },
    {
      img: "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/a53b7f7e-37ab-4319-a1b4-5d9c0cca68601650180659343-Lancer_Desk.jpg",
      link: "https://www.myntra.com/men-footwear?f=Brand%3ALancer&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0"
    }
  ];

  return (
    <div className="hero-wrapper">
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
            ></button>
          ))}
        </div>

        
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <a href={slide.link} target="_blank" rel="noreferrer">
                <img src={slide.img} className="d-block w-100 hero-img" alt="slide" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
