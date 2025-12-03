import React, { useState, useRef } from "react";
import "./kids.css";


const Kids = () => {
  const menuData = {
    Topwear: [
      {
        name: "T-Shirts",
        link: "https://www.myntra.com/boy-tshirts",
      },
      {
        name: "Shirts",
        link: "https://www.myntra.com/boy-shirts",
      },
      {
        name: "Shorts",
        link: "https://www.myntra.com/boy-shorts",
      },
      {
        name: "Jeans",
        link: "https://www.myntra.com/boy-jeans",
      },
      {
        name: "Trousers",
        link: "https://www.myntra.com/boy-trousers",
      },
      {
        name: "Clothing Sets",
        link: "https://www.myntra.com/boy-clothing-sets",
      },
      {
        name: "Ethnic Wear",
        link: "https://www.myntra.com/boy-ethnic-wear",
      },
      {
        name: "Track Pants & Pyjamas",
        link: "https://www.myntra.com/boy-trackpants",
      },
      { 
        name: "Jacket, Sweater & Sweatshirts", 
        link: "https://www.myntra.com/dupatta-shawl" 
     },
     { 
        name: "Party Wear", 
        link: "https://www.myntra.com/boy-party-wear" 
     },

     { 
        name: "Innerwear & Thermals", 
        link: "https://www.myntra.com/boy-innerwear" 
     },

     { 
        name: "Nightwear & Loungewear", 
        link: "https://www.myntra.com/boy-nightwear" 
     },

     { 
        name: "Value Packs", 
        link: "https://www.myntra.com/boy-value-packs" 
     },
    ],

    Bottomwear: [
      {
        name: "Dresses",
        link: "https://www.myntra.com/girl-dresses",
      },
      {
        name: "Tops",
        link: "https://www.myntra.com/girl-tops",
      },
      {
        name: "Tshirts",
        link: "https://www.myntra.com/girl-tshirts",
      },
      {
        name: "Clothing Sets",
        link: "https://www.myntra.com/girl-clothing-sets",
      },
      {
        name: "Lehenga choli",
        link: "https://www.myntra.com/girl-lehenga-choli",
      },
      {
        name: "Kurta Sets",
        link: "https://www.myntra.com/girl-kurta-sets",
      },
      {
        name: "Party wear",
        link: "https://www.myntra.com/girl-party-wear",
      },

       {
        name: "Dungarees & Jumpsuits",
        link: "https://www.myntra.com/girl-jumpsuits",
      },

      {
        name: "Skirts & shorts",
        link: "https://www.myntra.com/girl-skirts-and-shorts",
      },
      {
        name: "Tights & Leggings",
        link: "https://www.myntra.com/girl-tights-and-leggings",
      },
      {
        name: "Jeans, Trousers & Capris",
        link: "https://www.myntra.com/girl-bottom-wear",
      },
      {
        name: "Jacket, Sweater & Sweatshirts",
        link: "https://www.myntra.com/girl-winter-wear",
      },
      {
        name: "Innerwear & Thermals",
        link: "https://www.myntra.com/girl-innerwear-and-thermals",
      },

       {
        name: "Nightwear & Loungewear",
        link: "https://www.myntra.com/girl-nightwear",
      },
      {
        name: "Value Packs",
        link: "https://www.myntra.com/girl-value-packs",
      }
    ],
      Footwear: [
        {
          name:"Casual Shoes",
          link:"https://www.myntra.com/kids-footwear?f=Categories%3ACasual%20Shoes&plaEnabled=false"
        },
        {
          name:"Flipflops",
          link:"https://www.myntra.com/kids-footwear?f=Categories%3AFlip%20Flops&plaEnabled=false"
        },

        {
          name:"Sports Shoes",
          link:"https://www.myntra.com/kids-footwear?f=Categories%3ASports%20Shoes&plaEnabled=false"
        },


         {
          name:"Sandals",
          link:"https://www.myntra.com/kids-footwear?f=Categories%3ASandals%2CSports%20Sandals&plaEnabled=false"
        },

        {
          name:"Heels",
          link:"https://www.myntra.com/kids-footwear?f=Categories%3AHeels&plaEnabled=false"
        },
        {
          name:"School Shoes",
          link:"https://www.myntra.com/school-shoes?plaEnabled=false"
        },

        {
          name:"Socks",
          link:"https://www.myntra.com/kids?f=Categories%3ABooties%2CSocks&plaEnabled=false"
        },
    ],

    "Toys & Games": [
      {
        name: "Learning & Development",
        link: "https://www.myntra.com/toys-and-games?f=Categories%3ALearning%20and%20Development%20Toys&plaEnabled=false",
      },
      {
        name: "Activity Toys",
        link: "https://www.myntra.com/toys-and-games?f=Categories%3AActivity%20Toys%20and%20Games&plaEnabled=false",
      },
      {
        name: "Soft Toys",
        link: "https://www.myntra.com/toys-and-games?f=Categories%3ASoft%20Toys%20and%20Dolls&plaEnabled=false",
      },
      {
        name: "Action Figure / Play set",
        link: "https://www.myntra.com/toys-and-games?f=Categories%3AAction%20Figures%20and%20Play%20Set&plaEnabled=false",
      }
    ],

    "Infants": [
      {
        name: "Bodysuits",
        link:"https://www.myntra.com/kids?f=Categories%3ABodysuit&plaEnabled=false"
      },
      {
        name:"Rompers & Sleepsuits",
        link:"https://www.myntra.com/kids?f=Categories%3ARompers%2CSleepsuit&plaEnabled=false"
      },
      {
        name:"Clothing Sets",
        link:"https://www.myntra.com/kids?f=Age%3A0M-3M%2C12M-18M%2C18M-24M%2C3M-6M%2C6M-9M%2C9M-12M%2CNewborn%3A%3ACategories%3AClothing%20Set&plaEnabled=false"
      },

      {
        name:"Tshirts & Tops",
        link:"https://www.myntra.com/kids?f=Age%3A0M-3M%2C12M-18M%2C18M-24M%2C3M-6M%2C6M-9M%2C9M-12M%2CNewborn%3A%3ACategories%3ATops%2CTshirts&plaEnabled=false"
      },

      {
        name:"Dresses",
        link:"https://www.myntra.com/kids?f=Age%3A0M-3M%2C12M-18M%2C18M-24M%2C3M-6M%2C6M-9M%2C9M-12M%2CNewborn%3A%3ACategories%3ADresses&plaEnabled=false"
      },

      {
        name:"Bottom wear",
        link:"https://www.myntra.com/kids?f=Age%3A0M-3M%2C12M-18M%2C18M-24M%2C3M-6M%2C6M-9M%2C9M-12M%2CNewborn%3A%3ACategories%3ACapris%2CJeans%2CJeggings%2CLeggings%2CLounge%20Pants%2CLounge%20Shorts%2CPyjamas%2CShorts%2CSkirts%2CTights%2CTrack%20Pants%2CTrousers&plaEnabled=false"
      },

       {
        name:"Winter Wear",
        link:"https://www.myntra.com/inf-tki?f=Age%3A0M-3M%2C12M-18M%2C18M-24M%2C3M-6M%2C6M-9M%2C9M-12M%2CNewborn%3A%3ACategories%3ABlazers%2CJackets%2CSweaters%2CSweatshirts%2CWaistcoat&plaEnabled=false"
      },

       {
        name:"Innerwear & Sleepwear",
        link:"https://www.myntra.com/inf-tki?f=Categories%3ABoxers%2CBriefs%2CCamisoles%2CInnerwear%20Vests%2CNight%20suits%2CPyjamas%2CThermal%20Bottoms%2CThermal%20Set%2CThermal%20Tops%2CTrunk&plaEnabled=false"
      },
      {
        name:"Infant Care",
        link:"https://www.myntra.com/kids?f=Categories%3ABaby%20Apparel%20Gift%20Set%2CBaby%20Care%20Products%2CBaby%20Gear%20%26%20Nursery%2CBibs%2CDiaper%20Bags%2CMittens%2CNapkin%20Set&plaEnabled=false"
      },
    ],

    "Home & Bath": [
      {
        link:"https://www.myntra.com/kids-home-bath"
      }
    ],
    "Personal Care":[
      {

      link:"https://www.myntra.com/kids?f=Categories%3ABaby%20Care%20Products%2CBath%20and%20Body%20Gift%20Set%2CBathroom%20Accessories%2CBody%20Lotion%2CBody%20Oil%2CBody%20Wash%20and%20Scrub%2CDeodorant%2CFace%20Wash%20and%20Cleanser%2CHair%20Brush%20and%20Comb%2CHair%20Oil%2CShampoo%20and%20Conditioner%2CSunscreen%2CTissues%20and%20Wipes%2CToiletry%20Kit&plaEnabled=false"
      }
    ],
    "Kids Accessories": [
      {
        name: "Bags & Backpacks",
        link: "https://www.myntra.com/kids?f=Categories%3ABackpacks%2CSchool%20Essentials%2CStationery%2CWater%20Bottle&plaEnabled=false",
      },
      {
        name: "Watches",
        link: "https://www.myntra.com/kids?f=Categories%3AWatch%20Gift%20Set%2CWatches&plaEnabled=false",
      },
      {
        name: "Jewellery & Hair accessory",
        link: "https://www.myntra.com/kids?f=Categories%3AHair%20Accessory%2CHair%20Brush%20and%20Comb%2CJewellery%20Set%2CNecklace%20and%20Chains&plaEnabled=false",
      },

      {
        name: "Sunglasses",
        link: "https://www.myntra.com/kids?f=Categories%3ASunglasses&plaEnabled=false",
      },

      {
        name: "Masks & Protective Gears",
        link: "https://www.myntra.com/kids?f=Categories%3AOutdoor%20Masks&plaEnabled=false",
      },

      {
        name: "Caps & Hats",
        link: "https://www.myntra.com/kids?f=Categories%3ACaps%2CHat&plaEnabled=false",
      },

    ],

    "Brands": [
      {
        name:"H&M",
        link: "https://www.myntra.com/kids?f=Brand%3AH%26M&plaEnabled=false",
      },

      {
        name:"Max Kids",
        link: "https://www.myntra.com/kids?f=Brand%3Amax&plaEnabled=false",
      },

      {
        name:"Pantaloons",
        link: "https://www.myntra.com/kids?f=Brand%3AAKKRITI%20BY%20PANTALOONS%2CAjile%20by%20Pantaloons%2CCHALK%20by%20Pantaloons%2CChirpie%20Pie%20by%20Pantaloons%2CPOPPERS%20by%20Pantaloons%2CPantaloons%20Baby%2CPantaloons%20Junior%2Cindus%20route%20by%20Pantaloons&plaEnabled=false",
      },

      {
        name:"United Colors Of Benetton Kids",
        link: "https://www.myntra.com/kids?f=Brand%3AUnited%20Colors%20of%20Benetton&plaEnabled=false",
      },

      {
        name:"YK",
        link: "https://www.myntra.com/kids?f=Brand%3AYK%2CYK%20Basics%2CYK%20Disney%2CYK%20Justice%20League%2CYK%20Marvel%2CYK%20Organic%2CYK%20Star%20Wars&plaEnabled=false",
      },

      
      {
        name:"U.S. Polo Assn. Kids",
        link: "https://www.myntra.com/kids?f=Brand%3AU.S.%20Polo%20Assn.%2CU.S.%20Polo%20Assn.%20Kids&plaEnabled=false",
      },

      
      {
        name:"Mothercare",
        link: "https://www.myntra.com/kids?f=Brand%3Amothercare&plaEnabled=false",
      },

      
      {
        name:"HRX",
        link: "https://www.myntra.com/kids?f=Brand%3AHRX%20by%20Hrithik%20Roshan&plaEnabled=false",
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
        Kids
      </a>
      {open && (  
        <div className="mega-menu-container">
          <div className="mega-menu-col2">
            <h6>Boys Clothing</h6>
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


          <div className="mega-menu-col2">
            <h6>Girls Clothing</h6>
            <ul>
              {menuData["Bottomwear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mega-menu-col2">

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

            <h6>Toys & Games</h6>
            <ul>
              {menuData["Toys & Games"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mega-menu-col2">

            <h6>Infants</h6>
            <ul>
              {menuData["Infants"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <h6>Home & Bath</h6>
            <ul>
              {menuData["Home & Bath"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

             <h6>Personal Care</h6>
            <ul>
              {menuData["Personal Care"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mega-menu-col2">
            <h6>Kids Accessories</h6>
            <ul>
              {menuData["Kids Accessories"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

             <h6>Brands</h6>
            <ul>
              {menuData["Brands"].map((item, index) => (
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

export default Kids;