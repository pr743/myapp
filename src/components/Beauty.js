import React, { useState, useRef } from "react";
import "./Beauty.css";


const Beauty = () => {
  const menuData = {
    Topwear: [
      {
        name: "Lipstick",
        link: "https://www.myntra.com/lipstick",
      },
      {
        name: "Lip Gloss",
        link: "https://www.myntra.com/lip-gloss",
      },
      {
        name: "Lip Liner",
        link: "https://www.myntra.com/lip-liner",
      },
      {
        name: "Mascara",
        link: "https://www.myntra.com/mascara",
      },
      {
        name: "Eyeliner",
        link: "https://www.myntra.com/eyeliner",
      },
      {
        name: "Kajal",
        link: "https://www.myntra.com/kajal",
      },
      {
        name: "Eyeshadow",
        link: "https://www.myntra.com/eyeshadow",
      },
      {
        name: "Foundation",
        link: "https://www.myntra.com/foundation",
      },
      { 
        name: "Primer", 
        link: "https://www.myntra.com/primer" 
     },
     { 
        name: "Concealer", 
        link: "https://www.myntra.com/concealer" 
     },

     { 
        name: "Compact", 
        link: "https://www.myntra.com/sofa-covers" 
     },

     { 
        name: "Nail Polish", 
        link: "https://www.myntra.com/nail-polish" 
     },
    ],
    Bottomwear: [
      {
        name: "Face Moisturiser",
        link: "https://www.myntra.com/face-moisturisers",
      },
      {
        name: "Cleanser",
        link: "https://www.myntra.com/cleanser",
      },
      {
        name: "Masks & Peel",
        link: "https://www.myntra.com/mask-and-peel",
      },
      {
        name: "Sunscreen",
        link: "https://www.myntra.com/sunscreen",
      },
      {
        name: "Serum",
        link: "https://www.myntra.com/serum",
      },
      {
        name: "Face Wash",
        link: "https://www.myntra.com/face-wash",
      },
      {
        name: "Eye Cream",
        link: "https://www.myntra.com/eye-cream",
      },

       {
        name: "Lip Balm",
        link: "https://www.myntra.com/lip-balm",
      },

      {
        name: "Body Lotion",
        link: "https://www.myntra.com/body-lotion",
      },

       {
        name: "Body Wash",
        link: "https://www.myntra.com/home-furnishing-menu?f=Categories%3AShower%20Curtains",
      },

      {
        name: "Body Scrub",
        link: "https://www.myntra.com/home-furnishing-menu?f=Categories%3AShower%20Curtains",
      },

       {
        name: "Hand Cream",
        link: "https://www.myntra.com/home-furnishing-menu?f=Categories%3AShower%20Curtains",
      },
    ],


    "Baby Care":[
        {
            link:""
        }
    ],


     "Masks":[

        {
            link:""

        }  
    ],
      Footwear: [
        {
          name:"Shampoo",
          link:"https://www.myntra.com/home-furnishing?f=Categories%3AArtificial%20Flowers%20and%20Plants%2CGarden%20Accessories%2CPlanters"
        },
        {
          name:"Conditioner",
          link:"https://www.myntra.com/aroma-oil-diffusers-aroma-oils-air-freshener-handheld-air-fresheners-home-fragrances-home-fragrance-set-candles"
        },

        {
          name:"Hair Cream",
          link:"https://www.myntra.com/clocks"
        },


         {
          name:"Hair Oil",
          link:"https://www.myntra.com/mirrors"
        },

        {
          name:"Hair Gel",
          link:"https://www.myntra.com/decorhome?f=Categories%3ADecals%20and%20Stickers%2CKey%20Holders%2CPhoto%20Frames%2CWall%20Art%2CWall%20Decor%2CWindchimes"
        },
        {
          name:"Hair Color",
          link:"https://www.myntra.com/home-furnishing?f=Categories%3AFestive%20Decor"
        },

        {
          name:"Hair Serum",
          link:"https://www.myntra.com/home-furnishing?f=Categories%3AFestive%20Decor%2CPooja%20Essentials"
        },

        {
          name:"Hair Accessory",
          link:"https://www.myntra.com/wall-shelves"
        },
    ],

    "Fragrances": [
      {
        name:"Perfume",
        link: "https://www.myntra.com/cushion-and-cushion-covers",
      },

      {
        name:"Deodorant",
        link: "https://www.myntra.com/cushion-and-cushion-covers",
      },

      {
        name:"Body Mist",
        link: "https://www.myntra.com/cushion-and-cushion-covers",
      },
     
    ],
    "Appliances":[
      {
        name:"Hair Straightener",
      link:"https://www.myntra.com/homegiftsets"
      },

      {
        name:"Hair Dryer",
      link:"https://www.myntra.com/homegiftsets"
      },

      
      {
        name:"Epilator",
      link:"https://www.myntra.com/homegiftsets"
      },
    ],
    "Men's Grooming": [
      {
        name: "Trimmers",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ARunners%3A%3AType%3ATable",
      },
      {
        name: "Beard Oil",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ACutlery%2CDining%20Essentials%2CDinnerware%2CServeware%2CTrays%2CWater%20Bottle",
      },
      {
        name: "Hair Wax",
        link: "https://www.myntra.com/cups-and-mugs",
      },


    ],

    "Beauty Gift & Makeup Set": [
      {
        name:"Beauty Gift",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },

      {
        name:"Makeup Kit",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3AHanger",
      },

    ],

    "Premium Beauty": [
      {
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },

    ],

    "Wellness & Hygiene": [
      {
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },

    ],

    "Top Brands": [
      {
        name:"Lakme",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },


      {
        name:"Maybelline",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },


      {
        name:"LOreal",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },

      {
        name:"Philips",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },

      {
        name:"Bath & Body Works",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },

      {
        name:"THE BODY SHOP",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },

      {
        name:"Biotique",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },

      {
        name:"Mamaearth",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },

      {
        name:"MCaffeine",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },

      {
        name:"Nivea",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },

      {
        name:"Lotus Herbals",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },

      {
        name:"LOreal Professionnel",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },

      {
        name:"KAMA AYURVEDA",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },

      {
        name:"M.A.C",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },

      {
        name:"Forest Essentials",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },

    ],
  };

  const [open, setOpen] = useState(false);
  const hoverRef = useRef(false);

  const handleMouseEnter = () => {
    hoverRef.current = true;
    setOpen(true);
  };

  const handleMouseLeave = () => {
    hoverRef.current = false;
    setOpen(false);
  };

  const handleToggle = (e) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  return (
   <div
      className="position-relative d-inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
       <a
        href="/Kids"
        className="nav-link fw-bold text-dark"
        onClick={handleToggle}
        aria-haspopup="true"
        aria-expanded={open}
      >
        Beauty
      </a>
      {open && (  
        <div className="mega-menu-container">
          <div className="mega-menu-col4">
            <h6>Makeup</h6>
            <ul>
              {menuData["Topwear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            </div>


          <div className="mega-menu-col4">
            <h6>Skincare, Bath & Body</h6>
            <ul>
              {menuData["Bottomwear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <h6>Baby Care</h6>
            <ul>
              {menuData["Baby Care"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

             <h6>Masks</h6>
            <ul>
              {menuData["Masks"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mega-menu-col4">

            <h6>Haircare</h6>
            <ul>
              {menuData["Footwear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <h6>Fragrances</h6>
            <ul>
              {menuData["Fragrances"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mega-menu-col4">

            <h6>Appliances</h6>
            <ul>
              {menuData["Appliances"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

             <h6>Men's Grooming</h6>
            <ul>
              {menuData["Men's Grooming"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

             <h6>Beauty Gift & Makeup Set</h6>
            <ul>
              {menuData["Beauty Gift & Makeup Set"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

           <h6>Premium Beauty</h6>
            <ul>
              {menuData["Premium Beauty"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <h6>Wellness & Hygiene</h6>
            <ul>
              {menuData["Wellness & Hygiene"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

           
          </div>

          <div className="mega-menu-col4">
            <h6>Top Brands</h6>
            <ul>
              {menuData["Top Brands"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Beauty;