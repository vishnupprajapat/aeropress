import { Link } from "@remix-run/react";
import React, { useEffect, useState } from "react";

let SlickSlider: any;

if (typeof window !== "undefined") {
  SlickSlider = require("react-slick").default;
}

const HomeWorldwideReviewsSection = ({ testimonialsData }: any) => {
  const { headline } = testimonialsData?.data?.testimonialSection || {};
  const reviews = testimonialsData?.data?.testimonialSection?.testimonials || [];

  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAutoplay(true), 1000); 
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (typeof window === "undefined" || reviews.length === 0) {
    return null;
  }

  return (
    <section className="section home_worldwide_reviews" style={{ minHeight: "280px", overflow: "hidden" }}>
      <div className="container">
        <div className="section__header">
          <img
            className="multi-column__image"
            src="https://aeropress.com/cdn/shop/files/Frame_5_94fe7e27-38e7-4b3b-8371-716275b9029c_114x.svg?v=1726519438"
            alt="Reviews Icon"
          />
          <h2 className="heading">{headline}</h2>
        </div>

        <div className="worldwide_reviews_slider">
          {SlickSlider && (
            <SlickSlider {...settings}>
              {reviews.map((item: any, index: number) => (
                <div key={index} className="slide_item">
                  <div className="full-content">
                    <p>{item.quote}</p>
                  </div>
                  <span>{item.author}</span>
                </div>
              ))}
            </SlickSlider>
          )}
        </div>

        <div className="button-wrapper">
          <Link to="/">
            <span>Read All Reviews</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeWorldwideReviewsSection;

// Arrows
const PrevArrow = ({ onClick }: any) => (
  <img
    src="https://aeropress.com/cdn/shop/t/409/assets/slide_arrow.svg?v=9251942861018786581741741796"
    alt="Previous Slide"
    className="custom-arrow prev-arrow"
    onClick={onClick}
  />
);

const NextArrow = ({ onClick }: any) => (
  <img
    src="https://aeropress.com/cdn/shop/t/409/assets/slide_arrow.svg?v=9251942861018786581741741796"
    alt="Next Slide"
    className="custom-arrow next-arrow"
    onClick={onClick}
  />
);
