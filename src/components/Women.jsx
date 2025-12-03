import React, { useState, useRef } from "react";
import "./Women.css";


const Women = () => {
  const menuData = {
    Topwear: [
      {
        name: "Kurtas & Suits",
        link: "https://www.myntra.com/women-kurtas-kurtis-suits",
      },
      {
        name: "Kurtis, Tunics & Tops",
        link: "https://www.myntra.com/ethnic-tops",
      },
      {
        name: "Sarees",
        link: "https://www.myntra.com/saree",
      },
      {
        name: "Ethnic Wear",
        link: "https://www.myntra.com/women-ethnic-wear",
      },
      {
        name: "Leggings, Salwars & Churidars",
        link: "https://www.myntra.com/men-sweaters",
      },
      {
        name: "Skirts & Palazzos",
        link: "https://www.myntra.com/women-ethnic-bottomwear?f=categories%3AChuridar%2CLeggings%2CSalwar",
      },
      {
        name: "Dress Materials",
        link: "https://www.myntra.com/dress-material",
      },
      {
        name: "Lehenga Cholis",
        link: "https://www.myntra.com/lehenga-choli",
      },
      { 
        name: "Dupattas & Shawls", 
        link: "https://www.myntra.com/dupatta-shawl" 
     },
     { 
        name: "Jackets", 
        link: "https://www.myntra.com/women-jackets" 
     },
    ],

    "Belts, Scarves & More":[
        {
       link:"https://www.myntra.com/women-accessories"
        },
    ],

    "Watches & Wearables":[
        {
         link:"https://www.myntra.com/women-watches"
        },
    ],

    Bottomwear: [
      {
        name: "Dresses",
        link: "https://www.myntra.com/dresses?f=Gender%3Amen%20women%2Cwomen",
      },
      {
        name: "Tops",
        link: "https://www.myntra.com/tops",
      },
      {
        name: "Tshirts",
        link: "https://www.myntra.com/myntra-fashion-store?f=Categories%3ATshirts%3A%3AGender%3Amen%20women%2Cwomen",
      },
      {
        name: "Jeans",
        link: "https://www.myntra.com/women-jeans",
      },
      {
        name: "Trousers & Capris",
        link: "https://www.myntra.com/women-trousers",
      },
      {
        name: "Shorts & Skirts",
        link: "https://www.myntra.com/women-shorts-skirts",
      },
      {
        name: "Co-ords",
        link: "https://www.myntra.com/myntra-fashion-store?f=Categories%3AClothing%20Set%2CCo-Ords%3A%3AGender%3Amen%20women%2Cwomen",
      },

       {
        name: "Playsuits",
        link: "https://www.myntra.com/playsuit?f=Gender%3Amen%20women%2Cwomen",
      },

      {
        name: "Jumpsuits",
        link: "https://www.myntra.com/jumpsuits?f=Gender%3Amen%20women%2Cwomen",
      },
      {
        name: "Shrugs",
        link: "https://www.myntra.com/women-shrugs",
      },
      {
        name: "Sweaters & Sweatshirts",
        link: "https://www.myntra.com/women-sweaters-sweatshirts",
      },
      {
        name: "Jackets & Coats",
        link: "https://www.myntra.com/women-jackets-coats",
      },
      {
        name: "Blazers & Waistcoats",
        link: "https://www.myntra.com/women-blazers-waistcoats",
      },

    ],

    PlusSize: [
        {
            link:"https://www.myntra.com/plus-size-for-women"
        },
    ],

    Maternity:[
      {
        link:"https://www.myntra.com/myntra-fashion-store?f=Categories%3ACamisoles%2CChuridar%2CDresses%2CHarem%20Pants%2CJeans%2CKurta%20Sets%2CKurtas%2CKurtis%2CLeggings%2CLounge%20Tshirts%2CNightdress%2CPalazzos%2CShirts%2CShrug%2CSkirts%2CTops%2CTrack%20Pants"
      },
    ],

    "Sunglasses & Frames": [
        {
          link:"https://www.myntra.com/women-sunglasses"

        },
    ],
      Footwear: [
        {
          name:"Flats",
          link:"https://www.myntra.com/flats"
        },
        {
          name:"Casual Shoes",
          link:"https://www.myntra.com/women-casual-shoes"
        },

        {
          name:"Heels",
          link:"https://www.myntra.com/women-heels"
        },

        {
          name:"Boots",
          link:"https://www.myntra.com/women-boots-menu"
        },

         {
          name:"Sports Shoes & Floaters",
          link:"https://www.myntra.com/women-sports-shoes"
        },
    ],

    "Sports & Active Wear": [
      {
        name: "Clothing",
        link: "https://www.myntra.com/women-sportswear-clothing",
      },
      {
        name: "Footwear",
        link: "https://www.myntra.com/women-sports-shoes",
      },
      {
        name: "Sports Accessories",
        link: "https://www.myntra.com/women-sports-accessories",
      },
      {
        name: "Sports Equipment",
        link: "https://www.myntra.com/women-sports-equipments",
      }
    ],

    "Lingerie & Sleepwear": [
      {
        name: "Bra",
        link:"https://www.myntra.com/bra"
      },
      {
        name:"Briefs",
        link:"https://www.myntra.com/women-briefs"
      },
      {
        name:"Shapewear",
        link:"https://www.myntra.com/women-clothing-shapewear"
      },

       {
        name:"Sleepwear & Loungewear",
        link:"https://www.myntra.com/women-loungewear-and-nightwear"
      },

      {
        name:"Swimwear",
        link:"https://www.myntra.com/women-swimwear"
      },

      {
        name:"Camisoles & Thermals",
        link:"https://www.myntra.com/camisoles-and-thermals"
      },
    ],

    "Beauty & Personal Care": [
      {
        name: "Makeup",
        link:"https://www.myntra.com/makeup"
      },
      {
        name:"Skincare",
        link:"https://www.myntra.com/skin-care?f=gender%3Amen%20women%2Cwomen"
      },
      {
        name:"Premium Beauty",
        link:"https://www.myntra.com/women-personal-care?f=brand%3ABobbi%20Brown%2CBvlgari%2CCalvin%20Klein%2CClinique%2CDAVIDOFF%2CDermalogica%2CForest%20Essentials%2CKAMA%20AYURVEDA%2CSalvatore%20Ferragamo"
      },
      {
        name:"Lipsticks",
        link:"https://www.myntra.com/lipstick"
      },
      {
        name:"Fragrances",
        link:"https://www.myntra.com/women-perfumes"
      }
    ],
    Gadgets: [
      {
        name: "Smart Wearables",
        link: "https://www.myntra.com/smart-wearables",
      },
      {
        name: "Fitness Gadgets",
        link: "https://www.myntra.com/smart-wearables?f=Categories%3AFitness%20Bands",
      },
      {
        name: "Headphones",
        link: "https://www.myntra.com/headphones",
      },
      {
        name: "Speakers",
        link: "https://www.myntra.com/speakers",
      },
    ],

    Jewellery: [
      {
        name: "Fashion Jewellery",
        link: "https://www.myntra.com/men-wallets",
      },
      {
        name: "Fine Jewellery",
        link: "https://www.myntra.com/men-belts",
      },
      {
        name: "Earrings",
        link: "https://www.myntra.com/earrings",
      }
    ],

    "Backpacks": [
      {
        link: "https://www.myntra.com/backpacks-for-women",
      },
    ],

    "Handbags, Bags & Wallets": [
      {
        link: "https://www.myntra.com/handbags-and-bags",
      },
    ],


    "Luggages & Trolleys": [
      {
        link: "https://www.myntra.com/backpacks-for-women",
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
        href="/Women"
        className="nav-link fw-bold text-dark"
        onClick={handleToggle}
        aria-haspopup="true"
        aria-expanded={open}
      >
        Women
      </a>

      {open && (  
        <div className="mega-menu-container">
          <div className="mega-menu-col1">
            <h6>Indian & Fusion Wear</h6>
            <ul>
              {menuData["Topwear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <h6>Belts, Scarves & More</h6>
            <ul>
              {menuData["Belts, Scarves & More"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

             <h6>Watches & Wearables</h6>
            <ul>
              {menuData["Watches & Wearables"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>



          <div className="mega-menu-col1">
            <h6>Bottomwear</h6>
            <ul>
              {menuData["Bottomwear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <h6>Plus Size</h6>
            <ul>
              {menuData["PlusSize"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mega-menu-col1">
            <h6>Maternity</h6>
            <ul>
              {menuData["Maternity"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <h6>Sunglasses & Frames</h6>
            <ul>
              {menuData["Sunglasses & Frames"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>


            <h6>Footwear</h6>
            <ul>
              {menuData["Footwear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>


            <h6>Sports & Active Wear</h6>
            <ul>
              {menuData["Sports & Active Wear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          <div className="mega-menu-col1">

            <h6>Lingerie & Sleepwear</h6>
            <ul>
              {menuData["Lingerie & Sleepwear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <h6>Beauty & Personal Care</h6>
            <ul>
              {menuData["Beauty & Personal Care"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mega-menu-col1">

            <h6>Gadgets</h6>
            <ul>
              {menuData["Gadgets"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>


            <h6>Jewellery</h6>
            <ul>
              {menuData["Jewellery"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>



             <h6>Backpacks</h6>
            <ul>
              {menuData["Backpacks"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <h6>Handbags, Bags & Wallets</h6>
            <ul>
              {menuData["Handbags, Bags & Wallets"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>


            <h6>Luggages & Trolleys</h6>
            <ul>
              {menuData["Luggages & Trolleys"].map((item, index) => (
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

export default Women;
