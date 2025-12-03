import React, { useState, useRef } from "react";
import "./profile.css";
import { FaUser } from "react-icons/fa";

const Profile = () => {
  const profileData = [
    {
      title: "Welcome",
      subtitle: "To access account and manage orders",
      action: "Login / Signup",
      actionLink:
        "https://www.myntra.com/login?referer=https%3A%2F%2Fwww.myntra.com%2Fshop%2Fmen",
    },
    { 
    name: "Orders", 
    link: "https://www.myntra.com/my/orders" 

    },
    { 
        name: "Wishlist", link: "https://www.myntra.com/wishlist" },
    { name: "Gift Cards", link: "https://www.myntra.com/giftcard" },
    {
      name: "Contact Us",
       link:
        "https://www.myntra.com/login?referer=https%3A%2F%2Fwww.myntra.com%2Fcrm%2Fhelpcenter",
    },
    {
      name: "Myntra Insider",
      link: "https://www.myntra.com/myntrainsider?cache=false",
      isNew: true,
    },
    {
      name: "Myntra Credit",
      link:
        "https://www.myntra.com/login?referer=https%3A%2F%2Fwww.myntra.com%2Fmy%2Fmyntracredit",
    },
    {
      name: "Coupons",
      link:
        "https://www.myntra.com/login?referer=https%3A%2F%2Fwww.myntra.com%2Fmy%2Fcoupons",
    },
    {
      name: "Saved Cards",
      link:
        "https://www.myntra.com/login?referer=https%3A%2F%2Fwww.myntra.com%2Fmy%2Fsavedcards",
    },
    {
      name: "Saved VPA",
      link:
        "https://www.myntra.com/login?referer=https%3A%2F%2Fwww.myntra.com%2Fmy%2Fsavedvpa",
    },
    {
      name: "Saved Addresses",
      link:
        "https://www.myntra.com/login?referer=https%3A%2F%2Fwww.myntra.com%2Fmy%2Faddress",
    },
  ];

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
      className="profile-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href="/profile"
        className="nav-link fw-bold text-dark"
        onClick={handleToggle}      
      >
      <FaUser size={18} style={{ marginRight: "6px" }} />
        Profile
      </a>

      {open && (
        <div className="profile-panel">
          <div className="profile-container">
            
            <div className="profile-welcome-box">
              <h4>{profileData[0].title}</h4>
              <p>{profileData[0].subtitle}</p>
              <a className="profile-login-btn" href={profileData[0].actionLink}>
                {profileData[0].action}
              </a>
            </div>

            <ul className="profile-list">
              {profileData.slice(1).map((item, index) => (
                <li key={index} className="profile-item">
                  <a href={item.link}>
                    {item.name}
                    {item.isNew && <span className="new-tag">New</span>}
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

export default Profile;





