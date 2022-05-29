import blog from "./img_container/blog.png";
import newBlog from "./img_container/newBlog.png";
import amazone from "./img_container/homePageAmazon.png";
import eCommerce from "./img_container/eCommerce.png";

export const ProductsData = [
  {
    title: "Blog Post(Node)",
    img: blog,
    content: "react.js, style(materialUI), Node.js, database(MongoDB)",
    github: "https://github.com/AkliluFita/react_blog_fullStack",
    desc: "to show the CRUD operation with user account and post. the posts can only be edited and deleted by post publisher only ",
    deployedLink: "",
    isDeployed: false,
  },
  {
    title: "Blog Post(Django)",
    img: newBlog,
    content: "react.js, style(materialUI), Python(Django), database(postgres)",
    github: "https://github.com/AkliluFita/blogFullStack",
    desc: "to show the CRUD operation with post. additionally it includes also authententication with JWT. the posts can only be edited and deleted by post publisher only ",
    deployedLink: "https://blog-frontend-react-app.herokuapp.com/",
    isDeployed: true,
  },
  {
    title: "E-commerce(Amazon)",
    img: amazone,
    content:
      "react.js, style(pure css), Node.js, database(MongoDB), Firebase(Authentication)",
    github: "https://github.com/AkliluFita/react_amazon",
    desc: "simple Amazon shopping.It includes lists of product, cart, checkout and order pages ",
    deployedLink: "https://miniamazone.netlify.app/",
    isDeployed: true,
  },
  {
    title: "E-commerce(shopping)",
    img: eCommerce,
    content:
      "react.js, style(styled components), Node.js, database(MongoDB), Admin dashboard, payment library(Stripe)",
    github: "https://github.com/AkliluFita/react_ecommerce_fullStack",
    desc: "Advanced E-commerce.It includes homepage(slide product images and product lists), detail product, cart and order pages  ",
    deployedLink: "",
    isDeployed: false,
  },
];
