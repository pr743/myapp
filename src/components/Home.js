import React, { useState, useRef } from "react";
import "./Home.css";


const Home = () => {
  const menuData = {
    Topwear: [
      {
        name: "Bed Runners",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ARunners%3A%3AType%3ABed",
      },
      {
        name: "Mattress Protectors",
        link: "https://www.myntra.com/home-furnishing-menu?f=Categories%3AMattress%20Protector",
      },
      {
        name: "Bedsheets",
        link: "https://www.myntra.com/boy-bedsheets",
      },
      {
        name: "Bedding Sets",
        link: "https://www.myntra.com/bedsheets",
      },
      {
        name: "Blankets, Quilts & Dohars",
        link: "https://www.myntra.com/blankets-quilts-and-dohars",
      },
      {
        name: "Pillows & Pillow Covers",
        link: "https://www.myntra.com/pillows",
      },
      {
        name: "Bed Covers",
        link: "https://www.myntra.com/bed-covers",
      },
      {
        name: "Diwan Sets",
        link: "https://www.myntra.com/diwan-set?src=bc",
      },
      { 
        name: "Chair Pads & Covers", 
        link: "https://www.myntra.com/home-furnishing?f=Categories%3AChair%20Cover%2CChair%20Pads" 
     },
     { 
        name: "Sofa Covers", 
        link: "https://www.myntra.com/sofa-covers" 
     },
    ],
    "Flooring":[

        {
            name:"Floor Runners",
            link:"https://www.myntra.com/home-furnishing?f=Categories%3ARunners%3A%3AType%3AFloor"
        },

        {
            name:"Carpets",
            link:"https://www.myntra.com/carpets"
        },

        {
            name:"Floor Mats & Dhurries",
            link:"https://www.myntra.com/floor-mats-dhurries"
        },

         {
            name:"Door Mats",
            link:"https://www.myntra.com/doormats"
        },
    ],

    Bottomwear: [
      {
        name: "Bath Towels",
        link: "https://www.myntra.com/towels",
      },
      {
        name: "Hand & Face Towels",
        link: "https://www.myntra.com/hand-towels",
      },
      {
        name: "Beach Towels",
        link: "https://www.myntra.com/beach-towels",
      },
      {
        name: "Towels Set",
        link: "https://www.myntra.com/towel-set",
      },
      {
        name: "Bath Rugs",
        link: "https://www.myntra.com/bath-rugs",
      },
      {
        name: "Bath Robes",
        link: "https://www.myntra.com/bath-robes",
      },
      {
        name: "Bathroom Accessories",
        link: "https://www.myntra.com/bathroom-accessories",
      },

       {
        name: "Shower Curtains",
        link: "https://www.myntra.com/home-furnishing-menu?f=Categories%3AShower%20Curtains",
      },
    ],


    "Lamps & Lighting":[

        {
            name:"Floor Lamps",
            link:"https://www.myntra.com/floorlamp"
        },
        
        {
            name:"Ceiling Lamps",
            link:"https://www.myntra.com/ceilinglamp"
        },

        {
            name:"Table Lamps",
            link:"https://www.myntra.com/tablelamp"
        },

        {
            name:"Wall Lamps",
            link:"https://www.myntra.com/walllamp"
        },

        {
            name:"Outdoor Lamps",
            link:"https://www.myntra.com/outdoorlamp"
        },

        {
            name:"String Lights",
            link:"https://www.myntra.com/stringlight"
        },
        
    ],
      Footwear: [
        {
          name:"Plants & Planters",
          link:"https://www.myntra.com/home-furnishing?f=Categories%3AArtificial%20Flowers%20and%20Plants%2CGarden%20Accessories%2CPlanters"
        },
        {
          name:"Aromas & Candles",
          link:"https://www.myntra.com/aroma-oil-diffusers-aroma-oils-air-freshener-handheld-air-fresheners-home-fragrances-home-fragrance-set-candles"
        },

        {
          name:"Clocks",
          link:"https://www.myntra.com/clocks"
        },


         {
          name:"Mirrors",
          link:"https://www.myntra.com/mirrors"
        },

        {
          name:"Wall Décor",
          link:"https://www.myntra.com/decorhome?f=Categories%3ADecals%20and%20Stickers%2CKey%20Holders%2CPhoto%20Frames%2CWall%20Art%2CWall%20Decor%2CWindchimes"
        },
        {
          name:"Festive Decor",
          link:"https://www.myntra.com/home-furnishing?f=Categories%3AFestive%20Decor"
        },

        {
          name:"Pooja Essentials",
          link:"https://www.myntra.com/home-furnishing?f=Categories%3AFestive%20Decor%2CPooja%20Essentials"
        },

        {
          name:"Wall Shelves",
          link:"https://www.myntra.com/wall-shelves"
        },
        {
          name:"Fountains",
          link:"https://www.myntra.com/fountains"
        },

         {
            name:"Showpieces & Vases",
            link:"https://www.myntra.com/home-decor-showpieces-vases"
         },

          {
            name:"Ottoman",
            link:"https://www.myntra.com/ottoman"
         }
    ],

    "Cushions & Cushion Covers": [
      {
        link: "https://www.myntra.com/cushion-and-cushion-covers",
      },
     
    ],

    "Curtains": [
      {
        link:"https://www.myntra.com/curtains"
      },
      
    ],

    "Furniture": [
      {
        link:"https://www.myntra.com/furniture"
      }
    ],
    "Home Gift Sets":[
      {

      link:"https://www.myntra.com/homegiftsets"
      }
    ],
    "Kitchen & Table": [
      {
        name: "Table Runners",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ARunners%3A%3AType%3ATable",
      },
      {
        name: "Dinnerware & Serveware",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ACutlery%2CDining%20Essentials%2CDinnerware%2CServeware%2CTrays%2CWater%20Bottle",
      },
      {
        name: "Cups and Mugs",
        link: "https://www.myntra.com/cups-and-mugs",
      },

      {
        name: "Bakeware & Cookware",
        link: "https://www.myntra.com/bakeware-cookware",
      },

      {
        name: "Kitchen Storage & Tools",
        link: "https://www.myntra.com/kitchen-storage-kitchen-tools",
      },

      {
        name: "Bar & Drinkware",
        link: "https://www.myntra.com/bar-and-drinkware-bar-accessories",
      },
      {
        name: "Table Covers & Furnishings",
        link: "https://www.myntra.com/runners-table-placemats-table-cloth-table-covers-table-napkins-table-mat-oven-glove-aprons-kitchen-linen-sets-kitchen-gloves-table-linen-sets-napkin-set",
      },

    ],

    "Storage": [
      {
        name:"Bins",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },

      {
        name:"Hangers",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3AHanger",
      },

      {
        name:"Organisers",
        link: "https://www.myntra.com/organisers",
      },

      {
        name:"Hooks & Holders",
        link: "https://www.myntra.com/hooks-and-holders",
      },

      {
        name:"Laundry Bags",
        link: "https://www.myntra.com/laundry-bag?src=bc",
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
        Home
      </a>
      {open && (  
        <div className="mega-menu-container">
          <div className="mega-menu-col3">
            <h6>Bed Linen & Furnishing</h6>
            <ul>
              {menuData["Topwear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

             <h6>Flooring</h6>
            <ul>
              {menuData["Flooring"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            </div>


          <div className="mega-menu-col3">
            <h6>Bath</h6>
            <ul>
              {menuData["Bottomwear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <h6>Lamps & Lighting</h6>
            <ul>
              {menuData["Lamps & Lighting"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mega-menu-col3">

            <h6>Home Décor</h6>
            <ul>
              {menuData["Footwear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <h6>Cushions & Cushion Covers</h6>
            <ul>
              {menuData["Cushions & Cushion Covers"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <h6>Curtains</h6>
            <ul>
              {menuData["Curtains"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mega-menu-col3">

            <h6>Furniture</h6>
            <ul>
              {menuData["Furniture"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <h6>Home Gift Sets</h6>
            <ul>
              {menuData["Home Gift Sets"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

             <h6>Kitchen & Table</h6>
            <ul>
              {menuData["Kitchen & Table"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mega-menu-col3">
            <h6>Storage</h6>
            <ul>
              {menuData["Storage"].map((item, index) => (
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

export default Home;