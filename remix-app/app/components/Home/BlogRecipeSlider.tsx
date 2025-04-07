import React from "react";
import { Link } from "@remix-run/react";

let SlickSlider: any;

if (typeof window !== "undefined") {
  SlickSlider = require("react-slick").default;
}


const BlogRecipeSlider = ({ recipes }: any) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
      };
    
    if (typeof window === "undefined") {
        return null; // or a fallback component
      }
    return (
        <div className="bottom-recipe-detail">
            <SlickSlider {...settings} className="slider-recipe">
                {recipes.map((recipe: any, index: number) => (
                    <div key={index} className="recipe_tab_content">
                        <div className="border-with-recipe">
                            <Link to="/">
                                <div className="slide-data-recipe">
                                    <img src={recipe.imageUrl} alt={recipe.title} />
                                    <div className="recipe-all-content">
                                        <div className="blog_review">
                                            <div className="rk_rating_wrapper">
                                                <div className="rk_rating">
                                                    <div className="stars">
                                                        {[...Array(Math.floor(recipe.rating))].map((_, index) => (
                                                            <span key={index} className="star is-selected">
                                                                <svg
                                                                    width={12}
                                                                    height={13}
                                                                    viewBox="0 0 12 13"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        clipRule="evenodd"
                                                                        d="M5.92756 10.1041L2.44343 11.9354L3.10884 8.05659L0.290115 5.30961L4.18549 4.7437L5.92756 1.21466L7.66962 4.7437L11.565 5.30961L8.74628 8.05659L9.41168 11.9354L5.92756 10.1041Z"
                                                                        fill="#ffd200"
                                                                        stroke="#A30A0A"
                                                                        strokeWidth="0.370393"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="review_title">{recipe.reviews} ({recipe.rating})</span>
                                        </div>
                                        {recipe.category && (
                                            <div className="tag-list-recipe">
                                                <p>{recipe.category}</p>
                                            </div>
                                        )}
                                        <p className="recipe-title">{recipe.title}</p>
                                        <p className="recipe-desc">{recipe.description}</p>
                                        <span className="read_more">{recipe.ctaText}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </SlickSlider>
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