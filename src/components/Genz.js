import React, { useState, useRef } from "react";
import "./Genz.css";


const Genz = () => {
  const menuData = {
    Topwear: [
      {
        name: "Dresses Under ₹599",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ARunners%3A%3AType%3ABed",
      },
      {
        name: "Tops Under ₹399",
        link: "https://www.myntra.com/home-furnishing-menu?f=Categories%3AMattress%20Protector",
      },
      {
        name: "Jeans Under ₹599",
        link: "https://www.myntra.com/boy-bedsheets",
      },
      {
        name: "Trousers Under ₹699",
        link: "https://www.myntra.com/bedsheets",
      },
      {
        name: "T-shirts Under ₹299",
        link: "https://www.myntra.com/blankets-quilts-and-dohars",
      },
      {
        name: "Shirts Under ₹499",
        link: "https://www.myntra.com/pillows",
      },
      {
        name: "Skirts Under ₹499",
        link: "https://www.myntra.com/bed-covers",
      },
      {
        name: "Shorts Under ₹699",
        link: "https://www.myntra.com/diwan-set?src=bc",
      },
      { 
        name: "Co-ords Under ₹799", 
        link: "https://www.myntra.com/home-furnishing?f=Categories%3AChair%20Cover%2CChair%20Pads" 
     },
     { 
        name: "Jumpsuits Under ₹899", 
        link: "https://www.myntra.com/sofa-covers" 
     },

     { 
        name: "Track pants Under ₹699", 
        link: "https://www.myntra.com/sofa-covers" 
     },

     { 
        name: "Jackets Under ₹899", 
        link: "https://www.myntra.com/sofa-covers" 
     },

     { 
        name: "Sweatshirts Under ₹699", 
        link: "https://www.myntra.com/sofa-covers" 
     },

     { 
        name: "Sweaters Under ₹899", 
        link: "https://www.myntra.com/sofa-covers" 
     },
    ],
    Bottomwear: [
      {
        name: "Kurtas Under ₹399",
        link: "https://www.myntra.com/towels",
      },
      {
        name: "Kurtis Under ₹499",
        link: "https://www.myntra.com/hand-towels",
      },
      {
        name: "Kurta sets Under ₹499",
        link: "https://www.myntra.com/beach-towels",
      },
      {
        name: "Ethnic Dresses Under ₹999",
        link: "https://www.myntra.com/towel-set",
      },
      {
        name: "Palazzos Under ₹799",
        link: "https://www.myntra.com/bath-rugs",
      },
    ],


    "Lingerie & Loungewear":[
        {
            name:"Bras Under ₹399",
            link:""
        },
        
        {
            name:"Night suits Under ₹799",
            link:""
        },

         {
            name:"Nightdresses Under ₹999",
            link:""
        },

         {
            name:"Lounge pants Under ₹999",
            link:""
        },

         {
            name:"Briefs Under ₹599",
            link:""
        },
    ],

      Footwear: [
        {
          name:"T-shirts Under ₹299",
          link:"https://www.myntra.com/home-furnishing?f=Categories%3AArtificial%20Flowers%20and%20Plants%2CGarden%20Accessories%2CPlanters"
        },
        {
          name:"Shirts Under ₹499",
          link:"https://www.myntra.com/aroma-oil-diffusers-aroma-oils-air-freshener-handheld-air-fresheners-home-fragrances-home-fragrance-set-candles"
        },

        {
          name:"Jeans Under ₹599",
          link:"https://www.myntra.com/clocks"
        },


         {
          name:"Trousers Under ₹699",
          link:"https://www.myntra.com/mirrors"
        },

        {
          name:"Shorts Under ₹599",
          link:"https://www.myntra.com/decorhome?f=Categories%3ADecals%20and%20Stickers%2CKey%20Holders%2CPhoto%20Frames%2CWall%20Art%2CWall%20Decor%2CWindchimes"
        },
        {
          name:"Track pants Under ₹699",
          link:"https://www.myntra.com/home-furnishing?f=Categories%3AFestive%20Decor"
        },

        {
          name:"Jackets Under ₹899",
          link:"https://www.myntra.com/home-furnishing?f=Categories%3AFestive%20Decor%2CPooja%20Essentials"
        },

        {
          name:"Sweatshirts Under ₹699",
          link:"https://www.myntra.com/wall-shelves"
        },
        
        {
          name:"Sweaters Under ₹999",
          link:"https://www.myntra.com/wall-shelves"
        },

         {
          name:"Co-ords Under ₹999",
          link:"https://www.myntra.com/wall-shelves"
        },
    ],

    "Men's Occassion Wear": [
      {
        name:"Kurtas Under ₹799",
        link: "https://www.myntra.com/cushion-and-cushion-covers",
      },

      {
        name:"Kurta Sets Under ₹999",
        link: "https://www.myntra.com/cushion-and-cushion-covers",
      },
     
    ],
    "Women's Footwear":[
      {
        name:"Heels Under ₹599",
      link:"https://www.myntra.com/homegiftsets"
      },

      {
        name:"Flats Under ₹499",
      link:"https://www.myntra.com/homegiftsets"
      },

      
      {
        name:"Casual shoes Under ₹699",
      link:"https://www.myntra.com/homegiftsets"
      },

      {
        name:"Sports shoes Under ₹999",
      link:"https://www.myntra.com/homegiftsets"
      },

      {
        name:"Flip flops Under ₹799",
      link:"https://www.myntra.com/homegiftsets"
      },

      {
        name:"Boots Under ₹999",
      link:"https://www.myntra.com/homegiftsets"
      },
       {
        name:"Ballerinas Under ₹799",
      link:"https://www.myntra.com/homegiftsets"
      },
    ],
    "Men's Footwear": [
      {
        name: "Casual shoes Under ₹799",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ARunners%3A%3AType%3ATable",
      },
      {
        name: "Sports shoes Under ₹999",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ACutlery%2CDining%20Essentials%2CDinnerware%2CServeware%2CTrays%2CWater%20Bottle",
      },
      {
        name: "Formal shoes Under ₹999",
        link: "https://www.myntra.com/cups-and-mugs",
      },

      {
        name: "Sandals Under ₹799",
        link: "https://www.myntra.com/cups-and-mugs",
      },

       {
        name: "Flip flops Under ₹499",
        link: "https://www.myntra.com/cups-and-mugs",
      },

      {
        name: "Boots Under ₹999",
        link: "https://www.myntra.com/cups-and-mugs",
      },


    ],

    "Beauty & Grooming": [
      {
        name:"Skincare Under ₹299",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },


      {
        name:"Haircare Under ₹399",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },


      {
        name:"Bath & Body Under ₹399",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },

      {
        name:"MakeUp Under ₹299",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },

      {
        name:"Fragrances Under ₹399",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },

      {
        name:"Appliances Under ₹999",
        link: "https://www.myntra.com/home-furnishing?f=Categories%3ABins",
      },
    ],

    "Accessories": [
      {
        name:"Jewellery Under ₹299",
        link: "https://www.myntra.com/cushion-and-cushion-covers",
      },

      {
        name:"Handbags Under ₹499",
        link: "https://www.myntra.com/cushion-and-cushion-covers",
      },

      {
        name:"Clutches Under ₹999",
        link: "https://www.myntra.com/cushion-and-cushion-covers",
      },

      {
        name:"Backpacks Under ₹699",
        link: "https://www.myntra.com/cushion-and-cushion-covers",
      },

      {
        name:"Wallets Under ₹499",
        link: "https://www.myntra.com/cushion-and-cushion-covers",
      },

      
      {
        name:"Sunglasses Under ₹699",
        link: "https://www.myntra.com/cushion-and-cushion-covers",
      },

      {
        name:"Belts Under ₹799",
        link: "https://www.myntra.com/cushion-and-cushion-covers",
      },
      {
        name:"Caps Under ₹899",
        link: "https://www.myntra.com/cushion-and-cushion-covers",
      },
    ]
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
        href="/Genz"
        className="nav-link fw-bold text-dark"
        onClick={handleToggle}
        aria-haspopup="true"
        aria-expanded={open}
      >
        Genz
      </a>
      {open && (  
        <div className="mega-menu-container">
          <div className="mega-menu-col4">
            <h6>Women's Western Wear</h6>
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
            <h6>Women's Ethnic Wear</h6>
            <ul>
              {menuData["Bottomwear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <h6>Lingerie & Loungewear</h6>
            <ul>
              {menuData["Lingerie & Loungewear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mega-menu-col4">

            <h6>Men's Casual Wear</h6>
            <ul>
              {menuData["Footwear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <h6>Men's Occassion Wear</h6>
            <ul>
              {menuData["Men's Occassion Wear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mega-menu-col4">

            <h6>Women's Footwear</h6>
            <ul>
              {menuData["Women's Footwear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

             <h6>Men's Footwear</h6>
            <ul>
              {menuData["Men's Footwear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mega-menu-col4">
            <h6>Beauty & Grooming</h6>
            <ul>
              {menuData["Beauty & Grooming"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <h6>Accessories</h6>
            <ul>
              {menuData["Accessories"].map((item, index) => (
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

export default Genz;