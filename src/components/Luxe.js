import React from 'react'
function Luxe() {

     const Brand = [
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/85fa3b9b-9e7c-43a5-9de0-1cb32f3180151637149111314-MP-Farah.jpg",
      link: "https://www.myntra.com/the-collective?f=Brand%3AFarah&plaEnabled=false&isLuxury=true"
    },
    {
      img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/480f4bde-1d72-4517-be6d-af2dfef7528e1637149111337-MP-Collective.jpg",
      link: "https://www.myntra.com/the-collective?isLuxury=true"
    },
    {
      img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/cadd8457-b8ec-464c-9bc6-6082a24075591637149111331-MP-OriginalPenguin.jpg",
      link: "https://www.myntra.com/the-collective?f=Brand%3AOriginal%20Penguin&plaEnabled=false&isLuxury=true"
    },
    {
      img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/e185b9a2-0c12-4379-a85c-a4ceed2fe9931637149111326-MP-D1Milano.jpg",
      link: "https://www.myntra.com/d1-milano"
    },

    {
      img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/ab5c5029-d24f-4789-979c-d4910801ea191637149111321-MP-HUGOBoss.jpg",
      link: "https://www.myntra.com/the-collective?f=Brand%3AHUGO&plaEnabled=false&isLuxury=true"
    },

     {
      img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/17/621ce33b-3383-4347-99bf-2038b95f27151637149369429-MP-Ducati.jpg",
      link: "https://www.myntra.com/ducati-corse"
    },

  ];
  return (
    <>
       <div className="bag-container">
      <h1 className="bag-title">Myntra Luxe</h1>
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

export default Luxe
