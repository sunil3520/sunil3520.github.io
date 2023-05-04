import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
      <div className={` ${themename} section `}>
        <a
          href="https://github.com/sunil3520"
          rel="noreferrer"
          target="_blank"
        >
          <h3 className={` ${themename} footer`}>Made By Sunil Chaudhary</h3>
        </a>
      </div>
    </>
  );
};
