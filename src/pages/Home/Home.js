import React from "react";

import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import MySlider from "../../components/MySlider/MySlider";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import CardItem from "../../components/CardItem/CardItem";
import Data from "../../Data/Data";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("slide")}>
        <MySlider />
      </div>
      <div className={cx("content")}>
        <div className={cx("content-hot-product")}>
          <p>Sản phẩm nổi bật</p>
          <div className={cx("items-wrapper")}>
            <Swiper spaceBetween={10} slidesPerView={6}>
              {Data.map((item) => (
                <SwiperSlide key={item.id}>
                  <CardItem props={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className={cx("content-hot-product")}>
          <p>PC bán chạy</p>
          <div className={cx("items-wrapper")}>
            <Swiper spaceBetween={10} slidesPerView={6}>
              {Data.map((item) => (
                <SwiperSlide key={item.id}>
                  <CardItem props={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className={cx("content-hot-product")}>
          <p>PC Gaming bán chạy</p>
          <div className={cx("items-wrapper")}>
            <Swiper spaceBetween={10} slidesPerView={6}>
              {Data.map((item) => (
                <SwiperSlide key={item.id}>
                  <CardItem props={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className={cx("content-hot-product")}>
          <p>Laptop văn phòng bán chạy</p>
          <div className={cx("items-wrapper")}>
            <Swiper spaceBetween={10} slidesPerView={6}>
              {Data.map((item) => (
                <SwiperSlide key={item.id}>
                  <CardItem props={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className={cx("content-hot-product")}>
          <p>Laptop Gaming bán chạy</p>
          <div className={cx("items-wrapper")}>
            <Swiper spaceBetween={10} slidesPerView={6}>
              {Data.map((item) => (
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

export default Home;
