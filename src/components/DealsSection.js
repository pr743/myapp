import React from "react";
import "./DealsSection.css";

function DealsSection() {
  const deals = [
    {
      img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/1dce9c3e-77fa-48f1-85a3-d3c136c1d73e1598892377652-USPA.jpg",
      link: "https://www.myntra.com/myntra-fashion-store?f=Brand%3AU.S.%20Polo%20Assn.%2CU.S.%20Polo%20Assn.%20Denim%20Co.%2CU.S.%20Polo%20Assn.%20Kids%2CU.S.%20Polo%20Assn.%20Tailored%2CU.S.%20Polo%20Assn.%20Women%3A%3AGender%3Amen%2Cmen%20women&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0"
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3fa337a0-c792-4038-8d12-50d463c189a11598892377363-Levis.jpg",
      link: "https://www.myntra.com/myntra-fashion-store?f=Brand%3ADenizen%20From%20Levis%2CLevis%3A%3AGender%3Amen%2Cmen%20women&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0"
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg",
      link: "https://www.myntra.com/myntra-fashion-store?f=Brand%3ATommy%20Hilfiger%3A%3AGender%3Amen%2Cmen%20women&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0"
    },
    {
      img: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg",
      link: "https://www.myntra.com/myntra-fashion-store?f=Brand%3AUnited%20Colors%20of%20Benetton%3A%3AGender%3Amen%2Cmen%20women&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0"
    },

    {
      img: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/a7d3676a-9694-4a84-835e-0408fdad884b1598892377407-Nike.jpg",
      link: "https://www.myntra.com/myntra-fashion-store?f=Brand%3ANike%3A%3AGender%3Amen%2Cmen%20women"
    },

     {
      img: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/cec595c6-c7ec-4259-af8b-997a33a09ce71598892377444-Puma.jpg",
      link: "https://www.myntra.com/myntra-fashion-store?f=Brand%3APuma%2Cone8%20x%20PUMA%3A%3AGender%3Amen%2Cmen%20women&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0"
    },

    {
      img: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/0206da63-a7cc-4f83-8527-90d7dc74706b1598892377489-Skechers.jpg",
      link: "https://www.myntra.com/myntra-fashion-store?f=Brand%3ASkechers%3A%3AGender%3Amen%2Cmen%20women"
    },

    {
      img: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/d977e7ac-67dd-4fa6-b922-fe0057385dfa1598892377205-Crocs.jpg",
      link: "https://www.myntra.com/crocs?f=Gender%3Amen%2Cmen%20women"
    },
  ];

  return (
    <div className="deals-container">
      <h1 className="deals-title">Biggest Deals On Top Brands</h1>

      <br />


      <div className="deals-grid">
        {deals.map((item, index) => (
          <a key={index} href={item.link} className="deal-card">
            <img src={item.img} alt="deal" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default DealsSection;
