import React, { useState, useEffect } from "react";


const reviews = [
    { text: "Easily, the best cup of coffee I’ve had.", author: "Justin S." },
    { text: "Love how smooth and rich the flavor is!", author: "Emma R." },
    { text: "This changed my morning routine forever.", author: "Daniel K." },
];

const HomeWorldwideReviewsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    return (
        <section className='section home_worldwide_reviews'>
            <div className="container">
                <div className="section__header">
                    <img className='multi-column__image' 
                         src="https://aeropress.com/cdn/shop/files/Frame_5_94fe7e27-38e7-4b3b-8371-716275b9029c_114x.svg?v=1726519438" 
                         alt="Reviews Icon" />
                    <h2 className="heading">Over 65,000 Five Star Reviews</h2>
                </div>
                
                <div className="worldwide_reviews_slider">
                    <div className="slider_wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {reviews.map((review, index) => (
                            <div key={index} className="slide_item">
                                <div className="full-content">
                                    <p>“{review.text}”</p>
                                </div>
                                <span>{review.author}</span>
                            </div>
                        ))}
                    </div>
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
                            src="https://aeropress.com/cdn/shop/t/409/assets/slide_arrow.svg?v=9251942861018786581741741741796"
                            width="59px"
                            height="60px"
                            alt="Next Slide"
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default HomeWorldwideReviewsSection;
