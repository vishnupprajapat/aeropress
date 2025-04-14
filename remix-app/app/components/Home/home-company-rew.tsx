import React, { useEffect, useState } from 'react'
let SlickSlider: any;

if (typeof window !== "undefined") {
    SlickSlider = require("react-slick").default;
}
const HomeCompanyRew = ({ homeCompanyRewData }: any) => {
    const homeCompanyRew = homeCompanyRewData?.data?.homeCompanyRew


    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 6,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 10000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },

          ],
    };
    if (typeof window === "undefined" || homeCompanyRew.length === 0) {
        return null;
    }
    return (
        <section className='home-company-rew'>
            <div className="container">
                {SlickSlider && (
                    <SlickSlider {...settings} className="home-company-rew-warper">
                        {homeCompanyRew?.map((item: any, index: number) => {
                            const { image, title } = item
                            const imageUrl = image?.asset?.url
                            const imageWidth = image?.asset?.metadata?.dimensions?.width
                            const imageHeight = image?.asset?.metadata?.dimensions?.height
                            return (
                                <div key={index} className="">
                                    <div  className="home-company-rew-warper-item">
                                        <div className="home-company-rew-warper-item-image">
                                            <img src={imageUrl} width={imageWidth} height={imageHeight} alt="image" />
                                        </div>
                                        <div className="home-company-rew-warper-item-text">
                                            <p className="heading h5">{title}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </SlickSlider>
                )}
            </div>
        </section>
    )
}

export default HomeCompanyRew