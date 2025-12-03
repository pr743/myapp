import React from 'react'
function  Footwear() {

     const Brand = [
    {
      img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/647e166b-f645-443a-892d-df84ee345e781595935221231-Content-Footwear-men-Neutral-shades.jpg",
      link: "https://www.myntra.com/alt-nike-2020"
    },
    {
      img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9654b0f9-42a9-4111-a4b7-27b26c5a22d41595935221284-Content-Footwear-Unisex-Sneakers-for-Dancers_.jpg",
      link: "https://www.myntra.com/proline-active?f=Gender%3Amen%2Cmen%20women"
    },
    {
      img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/be0b0d6f-7c72-4752-859f-ee44902ff7171597912691244-Content-footwear-trend-sneakersmen.jpg",
      link: "https://www.myntra.com/asics-gel?f=Categories%3ASports%20Shoes%3A%3AGender%3Amen%2Cmen%20women"
    },
    {
      img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/a84d687a-1ff3-4b06-a47b-48021ba7cec11597840342959-Content-footwear-occasion-outbackoutdoor.png",
      link: "https://www.myntra.com/men-sports-wear?f=Categories%3AShorts%2CTrack%20Pants%2CTshirts"
    },

    {
      img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/49dd1ce9-d627-4c6e-b544-4be7e1f24a091597840342867-Content-footwear-essentials-flipflops.jpg",
      link: "https://www.myntra.com/nike-revolution?f=Categories%3ACasual%20Shoes%2CSports%20Shoes%3A%3AGender%3Amen%2Cmen%20women"
    },
    
  ];
  return (
    <>
       <div className="bag-container">
      <h1 className="bag-title">Trending In Footwear</h1>
      <br />
      <div className="bag-grid">
        {Brand.map((item, index) => (
          <a key={index} href={item.link} className="deal-card">
            <img src={item.img} alt="deal" />
          </a>
        ))}
      </div>
    </div>
    </>
  )
}

export default  Footwear;
