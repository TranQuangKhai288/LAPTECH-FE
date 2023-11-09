import React, { useEffect, useState } from "react";
import styles from "./Product.module.scss";
import classNames from "classnames/bind";
import * as ProductService from "../../../../services/ProductService";
import { useMutationHook } from "../../../../hooks/useMutationHook";

import { getBase64 } from "../../../../utils";
import { Modal, Table } from "antd";
import { Upload } from "antd";

const cx = classNames.bind(styles);

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sydney No. 1 Lake Park",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};

const listType = [
  {
    id: 1,
    name: "normal-laptop",
  },
  {
    id: 2,
    name: "gaming-laptop",
  },
  {
    id: 3,
    name: "normal-PC",
  },
  {
    id: 3,
    name: "gaming-PC",
  },
];
const listCompany = [
  {
    id: 1,
    name: "Asus",
  },
  {
    id: 2,
    name: "Lenovo",
  },
  {
    id: 3,
    name: "MSI",
  },
  {
    id: 3,
    name: "DELL",
  },
  {
    id: 3,
    name: "ACER",
  },
];

const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownType, setIsDropdownType] = useState(false);
  const [isDropdownCompany, setIsDropdownCompany] = useState(false);
  const [stateProduct, setStateProduct] = useState({
    name: "",
    type: "",
    company: "",
    price: "",
    countInStock: "",
    rating: "",
    description: "",
    image: "",
  });

  const mutation = useMutationHook((data) =>
    ProductService.createProduct(data)
  );

  const { isError, isSuccess } = mutation;

  useEffect(() => {
    if (isSuccess && mutation.data.status === "OK") {
      alert("Thêm sản phẩm thành công");
      console.log(mutation.data.status);
    } else if (isSuccess && mutation.data.status === "ERR") {
      alert(mutation.data.message);
      console.log("mutation.data.status:", mutation.data);
    }
  }, [isSuccess, isError]);

  const handleOk = () => {
    mutation.mutate(stateProduct);
    console.log("stateProduct", stateProduct);
    setIsModalOpen(false);
  };

  //mutation.mutate(stateProduct);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleOnChange = (event) => {
    setStateProduct({
      ...stateProduct,
      [event.target.name]: event.target.value,
    });
  };
  const handleOnChangeImage = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProduct({
      ...stateProduct,
      image: file.preview,
    });
  };

  return (
    <div className={cx("container")}>
      <p>Quản lí sản phẩm</p>
      <div
        className={cx("add")}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        +
      </div>
      <div className={cx("content")}>
        <Table
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className={cx("wrapper-button")}>
            <div className={cx("modal-button-cancel")} onClick={handleOk}>
              Cancel
            </div>

            <div className={cx("modal-button-submit")} onClick={handleOk}>
              Submit
            </div>
          </div>,
        ]}
      >
        <div>
          <div className={cx("modal-input")}>
            <p>Name:</p>
            <input
              type="text"
              value={stateProduct.name}
              onChange={handleOnChange}
              name="name"
            />
          </div>
          <div className={cx("modal-input")}>
            <p>Type:</p>

            <input
              type="button"
              value={stateProduct.type}
              onChange={handleOnChange}
              onClick={() => {
                setIsDropdownType(!isDropdownType);
              }}
              name="type"
            />
          </div>

          {isDropdownType ? (
            <div className={cx("wrapper")}>
              <div className={cx("dropdown")}>
                {listType.map((item, i) => (
                  <div
                    className={cx("dropdownitem")}
                    onClick={() => {
                      setIsDropdownType(!isDropdownType);
                      setStateProduct({
                        ...stateProduct,
                        type: item.name,
                      });
                    }}
                  >
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className={cx("modal-input")}>
            <p>Company:</p>
            <input
              type="button"
              value={stateProduct.company}
              onChange={handleOnChange}
              onClick={() => {
                setIsDropdownCompany(!isDropdownCompany);
              }}
              name="company"
            />
          </div>
          {isDropdownCompany ? (
            <div className={cx("wrapper")}>
              <div className={cx("dropdown")}>
                {listCompany.map((item, i) => (
                  <div
                    className={cx("dropdownitem")}
                    onClick={() => {
                      setIsDropdownCompany(!isDropdownCompany);
                      setStateProduct({
                        ...stateProduct,
                        company: item.name,
                      });
                    }}
                  >
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          <div className={cx("modal-input")}>
            <p>Price:</p>
            <input
              type="text"
              value={stateProduct.price}
              onChange={handleOnChange}
              name="price"
            />
          </div>
          <div className={cx("modal-input")}>
            <p>countInStock:</p>
            <input
              type="text"
              value={stateProduct.countInStock}
              onChange={handleOnChange}
              name="countInStock"
            />
          </div>
          <div className={cx("modal-input")}>
            <p>Rating:</p>
            <input
              type="text"
              value={stateProduct.rating}
              onChange={handleOnChange}
              name="rating"
            />
          </div>
          <div className={cx("modal-input")}>
            <p>Description</p>
            <input
              type="text"
              value={stateProduct.description}
              onChange={handleOnChange}
              name="description"
            />
          </div>
          <div className={cx("modal-input")}>
            <p>Image</p>
            <Upload
              onChange={handleOnChangeImage}
              fileList={
                stateProduct.image
                  ? [{ uid: "-1", name: "image.png", status: "done" }]
                  : []
              }
            >
              {stateProduct.image ? (
                <img
                  src={stateProduct.image}
                  alt="Uploaded Image"
                  style={{ maxWidth: "100px" }}
                />
              ) : (
                <input
                  type="file"
                  value={stateProduct.image}
                  onChange={handleOnChange}
                  name="image"
                />
              )}
            </Upload>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Product;
