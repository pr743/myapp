import React from 'react'
function  Accessories() {

     const Brand = [
    {
      img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/2bcf907c-bc21-44cb-9021-7575a963b0ef1595934830671-Content-Accesories-Unisex-True-wirless-lets-get-free.jpg",
      link: "https://www.myntra.com/gadgets?f=Categories%3AHeadphones%3A%3AConnectivity%3ATrue%20Wireless"
    },
    {
      img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/bddd9c73-e4f1-43c0-a073-2ff3c0e376b51595934830554-Content-Accesories-men-Sporty-Watches_.jpg",
      link: "https://www.myntra.com/sporty-watches_873384"
    },
    {
      img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/5e68d729-b955-431c-930c-931d8b452d421597840217983-Content-accessories-color-white.png",
      link: "https://www.myntra.com/watches?f=Color%3AWhite_f2f2f2"
    },
    {
      img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8363b55c-446f-4de2-bc5b-e75fd6fdfb2d1597840217862-Content-accessories-brand-fastrack.png",
      link: "https://www.myntra.com/fastrack"
    },

    {
      img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/274b3659-420d-43c2-8e4c-17249e6eaf8d1597840218139-Content-accessories-trend-minimalist.png",
      link: "https://www.myntra.com/min-watches"
    },
    
  ];
  return (
    <>
       <div className="bag-container">
      <h1 className="bag-title">Trending In Accessories</h1>
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

export default  Accessories;
