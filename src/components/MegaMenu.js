import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./MegaMenu.css";

const MegaMenu = () => {
  const menuData = {
    Topwear: [
      {
        name: "T-Shirts",
        link: "https://www.myntra.com/men-tshirts",
      },
      {
        name: "Casual Shirts",
        link: "https://www.myntra.com/men-casual-shirts",
      },
      {
        name: "Formal Shirts",
        link: "https://www.myntra.com/men-formal-shirts",
      },
      {
        name: "Sweatshirts",
        link: "https://www.myntra.com/men-sweatshirts",
      },
      {
        name: "Sweaters",
        link: "https://www.myntra.com/men-sweaters",
      },
      {
        name: "Jackets",
        link: "https://www.myntra.com/men-jackets",
      },
      {
        name: "Blazers & Coats",
        link: "https://www.myntra.com/men-blazers",
      },
      {
        name: "Suits",
        link: "https://www.myntra.com/men-suits",
      },
      { name: "Rain Jackets", link: "https://www.myntra.com/rain-jacket" },
    ],

    "Indian & Festive Wear": [
      {
        name: "Kurtas & Kurta Sets",
        link: "https://www.myntra.com/men-kurtas",
      },
      {
        name: "Sherwanis",
        link: "https://www.myntra.com/sherwani",
      },
      {
        name: "Nehru Jackets",
        link: "https://www.myntra.com/nehru-jackets",
      },
      {
        name: "Dhotis",
        link: "https://www.myntra.com/dhoti",
      },
    ],

    Bottomwear: [
      {
        name: "Jeans",
        link: "https://www.myntra.com/men-jeans",
      },
      {
        name: "Casual Trousers",
        link: "https://www.myntra.com/men-casual-trousers",
      },
      {
        name: "Formal Trousers",
        link: "https://www.myntra.com/men-formal-trousers",
      },
      {
        name: "Shorts",
        link: "https://www.myntra.com/mens-shorts",
      },
      {
        name: "Track Pants & Joggers",
        link: "https://www.myntra.com/men-trackpants",
      },
    ],

    "Innerwear & Sleepwear": [
      {
        name: "Briefs & Trunks",
        link: "https://www.myntra.com/men-briefs-and-trunks",
      },
      {
        name: "Boxers",
        link: "https://www.myntra.com/men-boxers",
      },
      {
        name: "Vests",
        link: "https://www.myntra.com/men-innerwear-vests",
      },
      {
        name: "Sleepwear & Loungewear",
        link: "https://www.myntra.com/men-nightwear",
      },
      {
        name: "Thermals",
        link: "https://www.myntra.com/men-thermals",
      },
    ],

    PlusSize: [
    ],

    Footwear: [
      {
        name: "Casual Shoes",
        link: "https://www.myntra.com/men-casual-shoes",
      },
      {
        name: "Sports Shoes",
        link: "https://www.myntra.com/men-sports-shoes",
      },
      {
        name: "Formal Shoes",
        link: "https://www.myntra.com/men-formal-shoes",
      },
      {
        name: "Sneakers",
        link: "https://www.myntra.com/men-sneakers",
      },
      {
        name: "Sandals & Floaters",
        link: "https://www.myntra.com/men-sandals",
      },
      {
        name: "Flip Flops",
        link: "https://www.myntra.com/men-flip-flops",
      },
      {
        name: "Socks",
        link: "https://www.myntra.com/men-socks",
      },
    ],

    "Personal Care & Grooming": [
      {
        name: "Personal Care",
        link: "https://www.myntra.com/men-personal-care",
      },
      {
        name: "Sunglasses & Frames",
        link: "https://www.myntra.com/men-sunglasses",
      },
      {
        name: "Watches",
        link: "https://www.myntra.com/mens-watches",
      },
    ],

    "Sports Active Wear": [
      {
        name: "Sports Shoes",
        link: "https://www.myntra.com/men-sports-shoes",
      },
      {
        name: "Sports Sandals",
        link: "https://www.myntra.com/men-sports-sandals",
      },
      {
        name: "Active T-Shirts",
        link: "https://www.myntra.com/men-sports-wear-tshirts",
      },
      {
        name: "Track Pants & Shorts",
        link: "https://www.myntra.com/men-trackpants-shorts",
      },
      {
        name: "Tracksuits",
        link: "https://www.myntra.com/men-tracksuits",
      },
      {
        name: "Jackets & Sweatshirts",
        link: "https://www.myntra.com/men-sports-jackets",
      },
      {
        name: "Sports Accessories",
        link: "https://www.myntra.com/men-sports-accessories",
      },
      {
        name: "Swimwear",
        link: "https://www.myntra.com/men-swimwear",
      },
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

    "Fashion Accessories": [
      {
        name: "Wallets",
        link: "https://www.myntra.com/men-wallets",
      },
      {
        name: "Belts",
        link: "https://www.myntra.com/men-belts",
      },
      {
        name: "Perfumes & Body Mists",
        link: "https://www.myntra.com/perfumes",
      },
      { name: "Trimmers", link: "https://www.myntra.com/trimmer" },
      {
        name: "Deodorants",
        link: "https://www.myntra.com/deodorant",
      },
      {
        name: "Ties, Cufflinks & Pocket Squares",
        link: "https://www.myntra.com/men-belts-ties",
      },
      {
        name: "Accessory Gift Sets",
        link: "https://www.myntra.com/men-accessory-gift-set",
      },
      {
        name: "Caps & Hats",
        link: "https://www.myntra.com/men-caps",
      },
      {
        name: "Mufflers, Scarves & Gloves",
        link: "https://www.myntra.com/men-gloves-mufflers-scarves",
      },
      {
        name: "Phone Cases",
        link: "https://www.myntra.com/mobile-phone-cases",
      },
      {
        name: "Rings & Wristwear",
        link: "https://www.myntra.com/men-jewellery",
      },
      {
        name: "Helmets",
        link: "https://www.myntra.com/helmets",
      },
    ],

    "Bags & Backpacks": [
      {
        link: "https://www.myntra.com/men-bags-backpacks",
      },
    ],

    "Luggages & Trolleys": [
      {
        link: "https://www.myntra.com/trolley-bags",
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
        href="/men"
        className="nav-link fw-bold text-dark"
        onClick={handleToggle}
        aria-haspopup="true"
        aria-expanded={open}
      >
        Men
      </a>

      {open && (
        <div className="mega-menu-container">
          <div className="mega-menu-col">
            <h6>Topwear</h6>
            <ul>
              {menuData["Topwear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <h6>Indian & Festive Wear</h6>

            <ul>
              {menuData["Indian & Festive Wear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mega-menu-col">
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
            <h6>Innerwear & Sleepwear</h6>
            <ul>
              {menuData["Innerwear & Sleepwear"].map((item, index) => (
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

          <div className="mega-menu-col">
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
            <h6>Personal Care & Grooming</h6>
            <ul>
              {menuData["Personal Care & Grooming"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mega-menu-col">
            <h6>Sports Active Wear</h6>
            <ul>
              {menuData["Sports Active Wear"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
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
          </div>

          <div className="mega-menu-col">
            <h6>Fashion Accessories</h6>
            <ul>
              {menuData["Fashion Accessories"].map((item, index) => (
                <li key={index}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <h6>Bags & Backpacks</h6>
            <ul>
              {menuData["Bags & Backpacks"].map((item, index) => (
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

export default MegaMenu;








