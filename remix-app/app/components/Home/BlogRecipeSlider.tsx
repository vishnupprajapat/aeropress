import React, { useEffect, useState } from "react";
import { Link } from "@remix-run/react";
import { urlFor } from "~/sanity/image";
import { stegaClean } from "@sanity/client/stega";

let SlickSlider: any;

if (typeof window !== "undefined") {
  SlickSlider = require("react-slick").default;
}

const BlogRecipeSlider = ({ recipes }: any) => {
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAutoplay(true), 1000); // Delay autoplay to reduce layout shift
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (typeof window === "undefined" || recipes.length === 0) {
    return null;
  }

  return (
    <div className="bottom-recipe-detail" style={{ minHeight: "360px", overflow: "hidden" }}>
      {SlickSlider && (
        <SlickSlider {...settings} className="slider-recipe">
          {recipes.map((recipe: any, index: number) => {
            const imageWidth = recipe.image?.asset?.metadata?.dimensions?.width || 500;
            const imageHeight = recipe.image?.asset?.metadata?.dimensions?.height || 500;
            const imageLqip = recipe.image?.asset?.metadata?.lqip || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
            const imageUrl = urlFor(recipe.image).url();

            return (
              <div key={index} className="recipe_tab_content">
                <div className="border-with-recipe">
                  <Link to="/">
                    <div className="slide-data-recipe">
                      <img
                        src={imageUrl}
                        width={imageWidth}
                        height={imageHeight}
                        loading="lazy"
                        alt={recipe.title}
                      />
                      <div className="recipe-all-content">
                        <div className="blog_review">
                          <div className="stars">
                            {[...Array(Math.floor(5))].map((_, index) => (
                              <span key={index} className="star is-selected">★</span>
                            ))}
                          </div>
                          <span className="review_title">{recipe.reviews} ({recipe.rating})</span>
                        </div>
                        {recipe.category && (
                          <div className="tag-list-recipe">
                            <p>{stegaClean(recipe.category)}</p>
                          </div>
                        )}
                        <p className="recipe-title">{stegaClean(recipe.title)}</p>
                        <p className="recipe-desc">{stegaClean(recipe.description)}</p>
                        <span className="read_more">{stegaClean(recipe.ctaText)}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </SlickSlider>
      )}
    </div>
  );
};

export default BlogRecipeSlider;

// Custom Arrows
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
