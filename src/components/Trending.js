import React from 'react'
function Trending() {

     const Brand = [
    {
      img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8becef46-f822-4874-b92a-a7cc7f58819d1597841103131-Content-sportswear-brand-nike.png",
      link: "https://www.myntra.com/alt-nike-2020"
    },
    {
      img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/7472ab66-adf2-4d1d-9379-4770a73c1efe1597841103172-Content-sportswear-brand-proline.png",
      link: "https://www.myntra.com/proline-active?f=Gender%3Amen%2Cmen%20women"
    },
    {
      img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/65bafbc5-f83b-4158-8168-f7553043814c1597841103082-Content-sportswear-brand-Asics.png",
      link: "https://www.myntra.com/asics-gel?f=Categories%3ASports%20Shoes%3A%3AGender%3Amen%2Cmen%20women"
    },
    {
      img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4aa58fe6-8c61-4e37-9fa8-436c31aecb211597840566511-Content-sportswear-essentials-activewear.png",
      link: "https://www.myntra.com/men-sports-wear?f=Categories%3AShorts%2CTrack%20Pants%2CTshirts"
    },

    {
      img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/eedc6c0c-c28b-4ccb-952f-a302c96c59ba1598030134978-Content-mostselling-Sportswear-Nikerevolution.jpeg",
      link: "https://www.myntra.com/nike-revolution?f=Categories%3ACasual%20Shoes%2CSports%20Shoes%3A%3AGender%3Amen%2Cmen%20women"
    },
    
  ];
  return (
    <>
       <div className="bag-container">
      <h1 className="bag-title">Trending In Sports Wear</h1>
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

export default Trending;
