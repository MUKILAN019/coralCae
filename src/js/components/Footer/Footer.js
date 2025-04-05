import React from "react";
import css from "./Footer.scss"; // assuming you're using SCSS modules with a bundler like Webpack or Vite
import { Fish, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css["footer-container"]}>
       
        <div className={css["footer-brand"]}>
          <div className={css["brand-icon"]}>
            <Fish size={24} />
          </div>
          <h2 className={css["brand-name"]}>CoralCare</h2>
          <p className={css["brand-description"]}>
            Restoring oceans, protecting reefs, and educating communities.
          </p>
        </div>

        {/* Navigation Links */}
        <div className={css["footer-links"]}>
          <h3>Navigation</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Reef Map</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={css["footer-contact"]}>
          <h3>Contact</h3>
          <ul>
            <li><Phone size={16} /> +91 98765 43210</li>
            <li><Mail size={16} /> contact@coralcare.org</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className={css["footer-social"]}>
          <h3>Follow Us</h3>
          <div className={css["social-icons"]}>
            <a href="#"><Facebook size={18} /></a>
            <a href="#"><Twitter size={18} /></a>
            <a href="#"><Instagram size={18} /></a>
          </div>
        </div>
      </div>

      <div className={css["footer-bottom"]}>
        <p>© 2025 CoralCare. All rights reserved.</p>
        <div className={css["legal-links"]}>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
