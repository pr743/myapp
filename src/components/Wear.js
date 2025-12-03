import React from 'react'
function Wear() {

     const Brand = [
    {
      img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/a9f68785-e282-425a-b270-c978c387b0f31597840342635-Content-ethnicwear-color-whites.jpg",
      link: "https://www.myntra.com/mens-occasion-wear?f=Categories%3ADhotis%2CKurta%20Sets%2CKurtas%2CNehru%20Jackets%2CSherwani%3A%3AColor%3AWhite_f2f2f2"
    },
    {
      img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/0d1e0a28-3088-4719-a692-4cdaa7a33cc71597840342726-Content-ethnicwear-occasion-casuallook.jpg",
      link: "https://www.myntra.com/mens-occasion-wear?f=Categories%3AKurtas%3A%3AOccasion%3ADaily"
    },
    {
      img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9d248917-d1b0-4910-8de0-4ed7c2b4af8e1595935030939-Content-ethnicwear-trends-printedkurtaset.jpg",
      link: "https://www.myntra.com/men-ethnic-wear?f=Categories%3AKurta%20Sets%3A%3APrint%20or%20Pattern%20Type%3AChevron%2CEthnic%20Motifs%2CFloral%2CPaisley%2CQuirky%2CStriped%2CTribal"
    },
    {
      img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/83d9ca97-4aa3-46ce-bd28-b135d3b94a021595935030673-Content-ethnicwear-essentials-everydaykurtas.jpg",
      link: "https://www.myntra.com/men-kurtas?f=Categories%3AKurtas%3A%3ALength%3AAbove%20Knee%3A%3AOccasion%3ADaily"
    },

    {
      img: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9e4fb95e-6268-49c5-9ed1-e6b1bd4b5efd1595935030880-Content-ethnicwear-trend-fashionmeetcomfort.jpg",
      link: "https://www.myntra.com/hangup?f=Categories%3AKurta%20Sets%2CKurtas"
    },
    
  ];
  return (
    <>
       <div className="bag-container">
      <h1 className="bag-title">Trending In Indian Wear</h1>
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

export default Wear
