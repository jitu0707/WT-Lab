// Footer.js
import React from "react";

const Footer = ({ author, year }) => {
  return (
    <footer>
      <p>
        Created by {author} &copy; {year}
      </p>
    </footer>
  );
};

export default Footer;
