import blog from "./img_container/blog.png";
import newBlog from "./img_container/newBlog.png";
import amazone from "./img_container/amazone.png";
import eCommerce from "./img_container/eCommerce.png";

export const ProductsData = [
  {
    title: "Blog Post(Node)",
    img: blog,
    content: "react.js, style(materialUI), Node.js, database(MongoDB)",
    github: "https://github.com/AkliluFita/react_blog_fullStack",
    deployedLink: "",
    isDeployed: false,
  },
  {
    title: "Blog Post(Django)",
    img: newBlog,
    content: "react.js, style(materialUI), Python(Django), database(postgres)",
    github: "https://github.com/AkliluFita/blogFullStack",
    deployedLink: "https://blog-frontend-react-app.herokuapp.com/",
    isDeployed: true,
  },
  {
    title: "E-commerce(Amazon)",
    img: amazone,
    content:
      "react.js, style(pure css), Node.js, database(MongoDB), Firebase(Authentication)",
    github: "https://github.com/AkliluFita/react_amazon",
    deployedLink: "https://miniamazone.netlify.app/",
    isDeployed: true,
  },
  {
    title: "E-commerce(shopping)",
    img: eCommerce,
    content:
      "react.js, style(styled components), Node.js, database(MongoDB), Admin dashboard, payment library(Stripe)",
    github: "https://github.com/AkliluFita/react_ecommerce_fullStack",
    deployedLink: "",
    isDeployed: false,
  },
];
