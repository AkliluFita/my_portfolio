import React from "react";
import "./products.css";
// import img1 from "../../img_container/amazone.png";
// import img2 from "../../img_container/eCommerce.png";
import gitBtn from "../../img_container/githubIcon.png";
import { ProductsData } from "../../data";

function Products() {
  return (
    <div className="products" id="products">
      <div className="pro-title">
        <h2>My Products(React.js/Node.js/Django)</h2>
      </div>
      <div className="pro-container">
        {ProductsData.map((product) => (
          <div className="pro-item" key={product.title}>
            <div className="item-title">
              <h4>{product.title})</h4>
            </div>
            <div className="item-img">
              <img src={product.img} alt="" />
            </div>
            <div className="item-contents">
              <strong>Contents:</strong>{" "}
              <p className="contents">{product.content}</p>
              <hr />
              <p>{product.desc}</p>
            </div>
            <div className="btn_group">
              <button className="gitBtn">
                {" "}
                <a
                  href={product.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </button>
              {product.isDeployed && (
                <button className="deployedBtn">
                  {" "}
                  <a
                    href={product.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Deployed Link
                  </a>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
