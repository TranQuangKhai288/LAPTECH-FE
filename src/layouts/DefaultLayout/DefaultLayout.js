import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import dragon from "../../assets/images/dragon.png";
import * as test from "../../services/test";
import { useSelector, useDispatch } from "react-redux";
const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  const [theme, setTheme] = useState("tet");
  const [icon, setIcon] = useState("icon-tet");

  const user = useSelector((state) => state.user);
  const ToggleTheme = () => {
    if (theme === "tet") {
      setTheme("light");
    } else {
      setTheme("tet");
    }
  };

  const sentRequest = async () => {
    try {
      const res = await test.accessChat(
        "65db58b4502113fd811b4c3e",
        user?.access_token
      );
      console.log("Data fetched:", res);
      return res;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className={cx(theme)}>
      <Header />
      <div className={cx(icon)} onClick={sentRequest}></div>
      <div className={cx("container-content")}>
        <Sidebar />
        <div className={cx("main-content")}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
