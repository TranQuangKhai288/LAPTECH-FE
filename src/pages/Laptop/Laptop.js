import React from "react";

import styles from "./Laptop.module.scss";
import classNames from "classnames/bind";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import CardItem from "../../components/CardItem/CardItem";
import Data from "../../Data/Data";
const cx = classNames.bind(styles);

const Laptop = () => {
  const NormalLaptopASUS = Data.filter((index) => {
    return index.type === "normal-laptop" && index.company === "ASUS";
  });

  const NormalLaptopACER = Data.filter((index) => {
    return index.type === "normal-laptop" && index.company === "ACER";
  });

  const NormalLaptopLENOVO = Data.filter((index) => {
    return index.type === "normal-laptop" && index.company === "LENOVO";
  });

  const NormalLaptopMSI = Data.filter((index) => {
    return index.type === "normal-laptop" && index.company === "MSI";
  });

  const NormalLaptopDELL = Data.filter((index) => {
    return index.type === "normal-laptop" && index.company === "DELL";
  });

  return (
    <div className={cx("container")}>
      <div className={cx("content")}>
        <div className={cx("content-laptop")}>
          <p>Laptop ASUS</p>
          <div className={cx("items-wrapper")}>
            <Swiper spaceBetween={10} slidesPerView={6}>
              {NormalLaptopASUS.map((item) => (
                <SwiperSlide key={item.id}>
                  <CardItem props={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className={cx("content-laptop")}>
          <p>Laptop ACER</p>
          <div className={cx("items-wrapper")}>
            <Swiper spaceBetween={10} slidesPerView={6}>
              {NormalLaptopACER.map((item) => (
                <SwiperSlide key={item.id}>
                  <CardItem props={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className={cx("content-laptop")}>
          <p>Laptop LENOVO</p>
          <div className={cx("items-wrapper")}>
            <Swiper spaceBetween={10} slidesPerView={6}>
              {NormalLaptopLENOVO.map((item) => (
                <SwiperSlide key={item.id}>
                  <CardItem props={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className={cx("content-laptop")}>
          <p>Laptop MSI</p>
          <div className={cx("items-wrapper")}>
            <Swiper spaceBetween={10} slidesPerView={6}>
              {NormalLaptopMSI.map((item) => (
                <SwiperSlide key={item.id}>
                  <CardItem props={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className={cx("content-laptop")}>
          <p>Laptop DELL</p>
          <div className={cx("items-wrapper")}>
            <Swiper spaceBetween={10} slidesPerView={6}>
              {NormalLaptopDELL.map((item) => (
                <SwiperSlide key={item.id}>
                  <CardItem props={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
