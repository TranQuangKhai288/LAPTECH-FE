import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import config from "../../../config";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handleLogin = () => {
    navigate("/login");
  };

  console.log("user: ", user);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link className={cx("logo")} to={config.routes.home}>
          <img
            src="https://salt.tikicdn.com/ts/upload/c1/64/f7/4e6e925ea554fc698123ea71ed7bda26.png"
            alt="tiki-logo"
            width="72"
            height="72"
          />
        </Link>
        <div className={cx("search")}>
          <input placeholder="Tìm sản phẩm" spellCheck={false} />
          <span>|</span>
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx("actions")}>
          <div className={cx("user")} onClick={handleLogin}>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: "16px" }} />
            {user?.name ? <p>{user?.name}</p> : <p>Tài Khoản</p>}
          </div>
          <Link className={cx("cart")}>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ marginRight: "16px" }}
            />
            <p>Đơn hàng</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
