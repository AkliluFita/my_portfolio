import React from "react";
import "./topbar.css";

function Topbar(props) {
  const { hamberger, sethamberger } = props;

  const linkedInUrl = "https://www.linkedin.com/in/aklilu-fita-493679204/";

  const handleHamberger = () => {
    sethamberger(!hamberger);
  };

  const getColorStyle = () => {
    if (!hamberger) {
      return {
        color: "white",
        transition: "0.05s",
        height: "80px",
      };
    } else return { transition: ".05s" };
  };

  return (
    <div className="topbar" style={getColorStyle()}>
      <div className="left-bar">
        <a href="#intro" className="logo">
          Aklilu@Mater
        </a>
        <div className="adrr">
          <i className="fa fa-user addr">: +905428583613 /</i>
          <i className="fa fa-envelope addr"> :weaba123abdu@gmail.com /</i>
          <i className="fa fa-linkedin addr">
            {" "}
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              {linkedInUrl}
            </a>
          </i>
        </div>
      </div>
      <div className="right-bar ">
        <div className="hamburger">
          <span onClick={handleHamberger}>
            {hamberger ? (
              <i className="fa fa-bars"></i>
            ) : (
              <i className="fa fa-times"></i>
            )}{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
