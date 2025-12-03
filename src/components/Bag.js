import React from 'react'
import "./Bag.css";
function Bag() {

     const Bag = [
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg",
      link: "https://www.myntra.com/shirts?f=Gender%3Amen%2Cmen%20women&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0"
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg",
      link: "https://www.myntra.com/tshirts?f=Gender%3Amen%2Cmen%20women&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0"
    },
    {
      img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg",
      link: "https://www.myntra.com/jeans?f=Gender%3Amen%2Cmen%20women&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0"
    },
    {
      img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg",
      link: "https://www.myntra.com/men-bottomwear?f=Categories%3AShorts%2CTrousers&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0"
    },

    {
      img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg",
      link: "https://www.myntra.com/footwear?f=Categories%3ACasual%20Shoes%3A%3AGender%3Amen%2Cmen%20women&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0"
    },

    {
      img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg",
      link: "https://www.myntra.com/inf-tki?rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0"
    },
  ];
  return (
    <>
       <div className="bag-container">
      <h1 className="bag-title">Categories To Bag</h1>
      <br />
      <div className="bag-grid">
        {Bag.map((item, index) => (
          <a key={index} href={item.link} className="deal-card">
            <img src={item.img} alt="deal" />
          </a>
        ))}
      </div>
    </div>
    </>
  )
}

export default Bag
