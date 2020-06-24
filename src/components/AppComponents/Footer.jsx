import React from "react";

//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const Footer = () => {
  return (
    <footer>
      <p>Copyright ⓒ {getYear()}</p>
    </footer>
  );
};

export default Footer;
