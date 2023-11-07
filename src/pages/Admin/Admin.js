import React, { useEffect, useState } from "react";
import { getItem } from "../../utils";
import {
  UserOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import styles from "./Admin.module.scss";
import classNames from "classnames/bind";
import { Menu } from "antd";
import User from "./Component/User/User";
import Product from "./Component/Product/Product";
const cx = classNames.bind(styles);

const Admin = () => {
  const [keySelected, setKeySelected] = useState("");
  const items = [
    getItem("Người dùng", "user", <UserOutlined />),
    getItem("Sản phẩm", "product", <AppstoreOutlined />),
    getItem("Đơn hàng", "order", <ShoppingCartOutlined />),
  ];
  const rootSubmenuKeys = ["user", "product", "order"];
  const handleOnClick = ({ key }) => {
    setKeySelected(key);
  };

  const renderPage = (key) => {
    switch (key) {
      case "user":
        return <User />;
      case "product":
        return <Product />;
      case "order":
        return <div>Đơn hàng</div>;
      default:
        return <></>;
    }
  };

  console.log("keySelected", keySelected);
  return (
    <div className={cx("container")}>
      <Menu
        mode="inline"
        style={{
          left: 0,
          width: 256,
          height: "100vh",
          borderRight: "2px solid #f0f0f0",
        }}
        items={items}
        onClick={handleOnClick}
      />
      <div className={cx("content")}>{renderPage(keySelected)}</div>
    </div>
  );
};

export default Admin;
