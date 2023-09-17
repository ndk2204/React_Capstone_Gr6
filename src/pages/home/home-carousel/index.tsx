import React, { useRef } from "react";
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import h1 from "src/assets/imgs/carousel/h1.png";
import h2 from "src/assets/imgs/carousel/h2.png";
import h3 from "src/assets/imgs/carousel/h3.png";
import arrowLeft from "src/assets/imgs/carousel/arrleft.svg";
import arrowRight from "src/assets/imgs/carousel/arrright.svg";

import css from "./carousel.module.scss";
import { Link } from "react-router-dom";

// const contentStyle: React.CSSProperties = {
//   margin: 0,
//   height: "260px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

const HomeCarousel: React.FC = () => {
  const onChange = (currentSlide: number) => {
    // console.log(currentSlide);
  };

  /**
   * Để truy cập được những methods của component export ra thì ta dùng useRef
   */
  const refCarsousel = useRef<CarouselRef>(null);

  const handleNext = () => {
    refCarsousel.current?.next();
  };
  const handlePrev = () => {
    refCarsousel.current?.prev();
  };

  return (
    <>
      <div className={css["carousel"]}>
        <img
          className={css["arrow-left"]}
          onClick={handlePrev}
          src={arrowLeft}
        />
        <img
          className={css["arrow-right"]}
          onClick={handleNext}
          src={arrowRight}
        />

        {/* Đối với những props có giá trị là true (autoplay) thì chỉ cần truyền tên không cần truyền cụ thể giá trị true */}
        <div className={css["carousel-img"]}>
          <Carousel
            dotPosition="bottom"
            ref={refCarsousel}
            afterChange={onChange}
          >
            <div className={css["box-img"]}>
              <img src={h1} />
            </div>
            <div className={css["box-img"]}>
              <img src={h2} />
            </div>
            <div className={css["box-img"]}>
              <img src={h3} />
            </div>
          </Carousel>
        </div>
        <div className={css["carousel-title"]}>
          <h1 style={{ fontSize: 40, fontWeight: 300, marginBottom: 0 }}>
            Adidas Super Star
          </h1>
          <p style={{ fontSize: 20, fontWeight: 300, marginBottom: 25 }}>
            The adidas Primeknit upper wraps the foot with a supportive fit that
            enhances movement{" "}
          </p>
          <Link to="/detail/4">
            <button className={css["carousel-btn"]}>Buy now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeCarousel;
