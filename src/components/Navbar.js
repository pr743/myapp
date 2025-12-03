import React, { useState } from "react";
import "./Navbar.css";
import MegaMenu from "./MegaMenu";
import Women from "./Women";
import Kids from "./Kids";
import Home from "./Home";
import Beauty from "./Beauty";
import Genz from "./Genz";
import Studio from "./Studio";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import { FaHeart, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
     
      <nav className="navbar navbar-expand-lg bg-light shadow-sm">
        <div className="container-fluid px-4">
        
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="https://www.freelogovectors.net/wp-content/uploads/2023/01/myntra-logo-freelogovectors.net_.png"
              alt="Myntra Logo"
              style={{ height: "40px", marginRight: "8px" }}
            />
          </a>

         
          <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
            <FaBars />
          </button>

          
          <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto fw-semibold">
              <MegaMenu />
              <Women />
              <Kids />
              <Home />
              <Beauty />
              <Genz />
              <Studio />
              <SearchBar />
            </div>

            <div className="navbar-nav ms-auto fw-semibold navbar-right">
              <Profile />
              <a className="nav-icon-btn" href="/">
                <FaHeart className="nav-icon" /> Wishlist
              </a>
              <a className="nav-icon-btn" href="/">
                <FaShoppingBag className="nav-icon" /> Bag
              </a>
            </div>
          </div>
        </div>
      </nav>

      
      <div className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">

        <a className="navbar-brand d-flex align-items-center" href="/" style={{ marginRight: "8px" }}>
      <img
        src="https://www.freelogovectors.net/wp-content/uploads/2023/01/myntra-logo-freelogovectors.net_.png"
        alt="Myntra Logo"
        style={{ height: "40px" }}
      />
    </a>
          <FaTimes onClick={toggleSidebar} className="close-btn" />
        </div>

        <div className="sidebar-content">
          <MegaMenu />
          <Women />
          <Kids />
          <Home />
          <Beauty />
          <Genz />
          <Studio />
          <Profile />
          <a className="nav-icon-btn" href="/">
            <FaHeart className="nav-icon" /> Wishlist
          </a>
          <a className="nav-icon-btn" href="/">
            <FaShoppingBag className="nav-icon" /> Bag
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;





