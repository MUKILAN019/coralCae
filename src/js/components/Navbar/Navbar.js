import React, { useState } from "react";
import css from "./Navbar.scss";
import { Droplet, Fish, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={css.navbar}>
      <div className={css.navbarContainer}>
        <div className={css.brand}>
          <Droplet className={css.iconlo} />
          <span className={css.brandText}>coralcare</span>
        </div>

        <nav className={css.links}>
          <a href="/home">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/about">About</a>
        </nav>

        <div className={css.buttons}>
          <button className={`${css.btn} ${css.outline} ${css.mdShow}`}>Log In</button>
          <button className={`${css.btn} ${css.filled} ${css.mdShow}`}>
            <Fish className={css.icon} />
            <span>Join the Community</span>
          </button>
          <button className={`${css.btn} ${css.iconOnly} ${css.mdHide}`} onClick={toggleMenu}>
            {menuOpen ? <X className={css.icon} /> : <Menu className={css.icon} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={css.mobileMenu}>
          <a href="/" onClick={toggleMenu}>Home</a>
          <a href="/dashboard" onClick={toggleMenu}>Dashboard</a>
          <a href="/map" onClick={toggleMenu}>Reef Map</a>
          <a href="/about" onClick={toggleMenu}>About</a>
          <button className={`${css.btn} ${css.outline}`}>Log In</button>
          <button className={`${css.btn} ${css.filled}`}>
            <Fish className={css.icon} />
            Join the Community
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
