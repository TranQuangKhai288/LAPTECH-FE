import config from "../config";

import Home from "../pages/Home/Home";
import Order from "../pages/Order/Order";
import cart from "../pages/Cart/cart";
import HeaderOnly from "../layouts/HeaderOnly/HeaderOnly";
import Laptop from "../pages/Laptop/Laptop";
import LaptopGaming from "../pages/LaptopGaming/LaptopGaming";
import PCGaming from "../pages/PCGaming/PCGaming";
import PCNormal from "../pages/PCNormal/PCNormal";
import Accessory from "../pages/Accessory/Accessory";
import Screen from "../pages/Screen/Screen";
import Headphone from "../pages/Headphone/Headphone";
import More from "../pages/More/More";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Nothing from "../layouts/Nothing/Nothing";

const publicRoutes = [
  {
    path: config.routes.login,
    component: Login,
    layout: Nothing,
  },

  {
    path: config.routes.register,
    component: Register,
    layout: Nothing,
  },

  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.order,
    component: Order,
  },

  {
    path: config.routes.cart,
    component: cart,
    layout: HeaderOnly,
  },

  {
    path: config.routes.laptop,
    component: Laptop,
  },

  {
    path: config.routes.laptopgaming,
    component: LaptopGaming,
  },

  {
    path: config.routes.pcgaming,
    component: PCGaming,
  },

  {
    path: config.routes.pclamviec,
    component: PCNormal,
  },

  {
    path: config.routes.linhkienpc,
    component: Accessory,
  },

  {
    path: config.routes.manhinh,
    component: Screen,
  },

  {
    path: config.routes.tainghevloa,
    component: Headphone,
  },

  {
    path: config.routes.phukien,
    component: More,
  },

  {
    path: config.routes.productdetail,
    component: ProductDetail,
    layout: HeaderOnly,
  },
]; // khoong dang nhap van xem duoc

const privateRoutes = []; // phai dang nhap moi xem dc

export { publicRoutes, privateRoutes };
