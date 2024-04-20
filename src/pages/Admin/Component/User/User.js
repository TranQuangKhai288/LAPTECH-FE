import React, { useEffect, useState } from "react";
import styles from "./User.module.scss";
import classNames from "classnames/bind";
import { Modal, Table } from "antd";
import * as UserService from "../../../../services/UserService";
import * as AiIcons from "react-icons/ai";
const cx = classNames.bind(styles);

const User = () => {
  const [Data, setData] = useState([]);

  // const columns = [
  //   {
  //     title: "ID",
  //     dataIndex: "id",
  //     key: "id",
  //   },
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     key: "name",
  //   },
  //   {
  //     title: "Email",
  //     dataIndex: "email",
  //     key: "email",
  //   },
  //   {
  //     title: "Phone",
  //     dataIndex: "phone",
  //     key: "phone",
  //   },
  //   {
  //     title: "Address",
  //     dataIndex: "address",
  //     key: "address",
  //   },
  //   {
  //     title: "Role",
  //     dataIndex: "role",
  //     key: "role",
  //   },
  // ];
  const numberFormat = new Intl.NumberFormat("en-US");

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      width: "10%",
      render: (avatar, record) => (
        <img src={avatar} width={150} alt="Uploaded avatar" />
      ),
    },

    {
      title: "Info",
      dataIndex: "info",
      render: (text, record) => (
        <div>
          <p style={{ fontWeight: "550" }}>ID: {record._id}</p>
          <p style={{ fontWeight: "550" }}>Name: {record.name}</p>
          <p style={{ fontWeight: "550" }}>Email: {record.email}</p>
          <p style={{ fontWeight: "550" }}>Phone: {record.phone}</p>
          <p style={{ fontWeight: "550" }}>Address: {record.address}</p>
        </div>
      ),
    },
    {
      title: "Role",
      dataIndex: "isAdmin",
      render: (text, record) => (
        <div>
          {record.isAdmin ? (
            <p style={{ color: "red", fontWeight: "550" }}>Admin</p>
          ) : (
            <p style={{ color: "green", fontWeight: "550" }}>User</p>
          )}
        </div>
      ),
    },
    {
      title: "Action",
      render: (text, record) => (
        <div>
          <AiIcons.AiOutlineDelete
            className={cx("AiIcons")}
            color="red"
            onClick={() => {
              handleDeleteUser(record);
            }}
          />
          {/* <AiIcons.AiOutlineEdit
            className={cx("AiIcons")}
            color="#F0E68C"
            // onClick={() => {
            //   handleDetailProduct(record);
            // }}
          /> */}
        </div>
      ),
    },
  ];

  //Delete User
  const handleDeleteUser = async (record) => {
    // alert
    if (window.confirm("Do you want to delete this user?")) {
      try {
        const res = await UserService.deleteUser(record._id);
        console.log("Delete user success:", res);
        const result = await fetchUserAll();
        setData(result.data);
      } catch (error) {
        console.error("Delete user error:", error);
      }
    }
  };

  //Fetch ALL data
  const fetchUserAll = async () => {
    try {
      const res = await UserService.getAllUser();
      console.table("Data fetched all user:", res);
      return res;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchUserAll();
        setData(result.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={cx("container")}>
      <p>Quản lí User</p>
      <div className={cx("content")}>
        <Table columns={columns} dataSource={Data} />
      </div>
    </div>
  );
};

export default User;
