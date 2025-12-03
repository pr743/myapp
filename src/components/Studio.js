import React, { useState, useRef } from "react";
import "./Studio.css";

const Studio = () => {
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
      className="studio-wrapper position-relative d-inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
     
      <a
        href="/Studio"
        className="nav-link fw-bold text-dark"
        onClick={handleToggle}
        aria-haspopup="true"
        aria-expanded={open}
      >
        Studio
      </a>

     
      {open && (
        <div className="studio-panel">

          <div className="studio-container">

            <div className="studio-content">

           <h1 className="studio-title">
  <img 
    src="https://constant.myntassets.com/web/assets/img/studio-logo-new.svg" 
    alt="Studio Logo"
    className="studio-icon"
  />
</h1>
        <p>Your daily inspiration for everything fashion</p>
               </div>
            <div className="studio-image">
              <img
                src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png"
                alt="Studio Banner"                
              />
              <br />
              <br />
               <button className="studio-btn ">EXPLORE STUDIO</button>
            </div>

          </div>

        </div>
      )}
    </div>
  );
};

export default Studio;
