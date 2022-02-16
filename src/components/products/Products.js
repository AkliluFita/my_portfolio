import React from "react";
import "./products.css";
import img1 from "../../img_container/amazone.png";
import img2 from "../../img_container/eCommerce.png";
import img3 from "../../img_container/blog.png";

function Products() {
  return (
    <div className="products">
      <div className="pro-title">
        <h2>My Products(React/Node)</h2>
      </div>
      <div className="pro-container">
        <div className="pro-item">
          <div className="item-title">
            <h4>E-commerce(amazone)</h4>
          </div>
          <div className="item-img">
            <img src={img1} alt="" />
          </div>
          <div className="item-contents">
            <p className="contents">
              <strong>contents</strong> : react js, style(material UI), payment
              library(react-stripe js), database(firebase).
            </p>
          </div>
        </div>
        <div className="pro-item">
          <div className="item-title">
            <h4>E-commerce(shope)</h4>
          </div>
          <div className="item-img">
            <img src={img2} alt="" />
          </div>
          <div className="item-contents">
            <p className="contents">
              <strong>contents</strong> : react js, style(material UI), payment
              libraray(react-stripe js), redux, database(mongoDB atlas). node js
            </p>
          </div>
        </div>
        <div className="pro-item">
          <div className="item-title">
            <h4>Blog</h4>
          </div>
          <div className="item-img">
            <img src={img3} alt="" />
          </div>
          <div className="item-contents">
            <p className="contents">
              <strong>contents</strong> : react js, style(pure css),
              database(MongoDB), node js.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
