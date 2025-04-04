import { Link } from '@remix-run/react';
import { useEffect, useState } from 'react';

const recipes = [
    {
        id: 1,
        image: "https://aeropress.com/cdn/shop/articles/19_400x.png?v=1742916550",
        title: "AeroPress Honey Lavender Ice Coffee",
        description: "Floral, sweet, and easy to make, this iced coffee brings",
        rating: 5,
        reviews: 1,
    },
    {
        id: 2,
        image: "https://aeropress.com/cdn/shop/articles/15_400x.png?v=1742916486",
        title: "AeroPress Honey Lavender Ice Coffee",
        description: "Floral, sweet, and easy to make, this iced coffee brings",
        rating: 5,
        reviews: 1,
    },
    {
        id: 3,
        image: "https://aeropress.com/cdn/shop/articles/Untitled_960_x_640_px_5_400x.png?v=1742179343",
        title: "AeroPress Honey Lavender Ice Coffee",
        description: "Floral, sweet, and easy to make, this iced coffee brings",
        rating: 5,
        reviews: 1,
    },
    {
        id: 4,
        image: "https://aeropress.com/cdn/shop/articles/Irish_Cold_Brew_400x.png?v=1742179246",
        title: "AeroPress Honey Lavender Ice Coffee",
        description: "Floral, sweet, and easy to make, this iced coffee brings",
        rating: 5,
        reviews: 1,
    },
    {
        id: 5,
        image: "https://aeropress.com/cdn/shop/articles/Rose-latte-blog_400x.png?v=1740674963",
        title: "AeroPress Honey Lavender Ice Coffee",
        description: "Floral, sweet, and easy to make, this iced coffee brings",
        rating: 5,
        reviews: 1,
    },
    {
        id: 6,
        image: "https://aeropress.com/cdn/shop/articles/Pistachio_Martini_Resized_ec0639c6-6e82-46ae-8bea-d674d2d43367_400x.jpg?v=1740154474",
        title: "AeroPress Honey Lavender Ice Coffee",
        description: "Floral, sweet, and easy to make, this iced coffee brings",
        rating: 5,
        reviews: 1,
    }
    ,
    {
        id: 7,
        image: "https://aeropress.com/cdn/shop/articles/Blog-resize-strawblatte_11c37c94-7db9-42f0-864b-a1ee5e0dc68f_400x.jpg?v=1743272763",
        title: "AeroPress Honey Lavender Ice Coffee",
        description: "Floral, sweet, and easy to make, this iced coffee brings",
        rating: 5,
        reviews: 1,
    },
    {
        id: 8,
        image: "https://aeropress.com/cdn/shop/articles/Pistachio_Honey_Latte-2_1_bbfcd053-a29a-4fed-b8fe-a21971dcde71_400x.jpg?v=1743272672",
        title: "AeroPress Honey Lavender Ice Coffee",
        description: "Floral, sweet, and easy to make, this iced coffee brings",
        rating: 5,
        reviews: 1,
    },
    {
        id: 9,
        image: "https://aeropress.com/cdn/shop/articles/Hugos_salted_caramel_espresso_martini_pic_1_400x.png?v=1743272714",
        title: "AeroPress Honey Lavender Ice Coffee",
        description: "Floral, sweet, and easy to make, this iced coffee brings",
        rating: 5,
        reviews: 1,
    },
    {
        id: 10,
        image: "https://aeropress.com/cdn/shop/articles/Espresso_Martini_with_Vanilla_Infusion_1_400x.png?v=1743272792",
        title: "AeroPress Honey Lavender Ice Coffee",
        description: "Floral, sweet, and easy to make, this iced coffee brings",
        rating: 5,
        reviews: 1,
    }
    
    
];

const BlogRecipeSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === recipes.length - 1 ? 0 : prevIndex + 1));
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? recipes.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === recipes.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="bottom-recipe-detail">
            <div className="slider-recipe" style={{ position: 'relative', overflow: 'hidden' }}>
                {recipes.map((recipe, index) => (
                    <div 
                        key={recipe.id} 
                        className="recipe_tab_content" 
                        style={{
                            display: index === currentIndex ? 'block' : 'none',
                            transition: 'opacity 0.5s ease-in-out'
                        }}
                    >
                        <div className="border-with-recipe">
                            <Link to="/">
                                <div className="slide-data-recipe">
                                    <img src={recipe.image} alt={recipe.title} />
                                    <div className="recipe-all-content">
                                        <div className="blog_review">
                                            <div className="rk_rating_wrapper">
                                                <div className="rk_rating">
                                                    <div className="stars">
                                                        {[...Array(recipe.rating)].map((_, index) => (
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
                                            <span className="review_title">{recipe.reviews} ({recipe.rating}.0)</span>
                                        </div>
                                        <p className="recipe-title">{recipe.title}</p>
                                        <p className="recipe-desc">{recipe.description}</p>
                                        <span className="read_more">Read more</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <ul className="slick_slider_controls reviews_controls">
                <li className="slide-arrow prev-arrow" onClick={prevSlide}>
                    <img
                        src="https://aeropress.com/cdn/shop/t/409/assets/slide_arrow.svg?v=9251942861018786581741741796"
                        width="59px"
                        height="60px"
                        alt="Previous Slide"
                    />
                </li>
                <li className="slide-arrow next-arrow" onClick={nextSlide}>
                    <img
                        src="https://aeropress.com/cdn/shop/t/409/assets/slide_arrow.svg?v=9251942861018786581741741796"
                        width="59px"
                        height="60px"
                        alt="Next Slide"
                    />
                </li>
            </ul>
        </div>
    );
};
export default BlogRecipeSlider;
