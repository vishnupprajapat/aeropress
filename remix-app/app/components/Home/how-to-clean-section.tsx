import { stegaClean } from '@sanity/client/stega'
import React, { useEffect, useState } from 'react'
import { urlFor } from '~/sanity/image'
let SlickSlider: any;

if (typeof window !== "undefined") {
  SlickSlider = require("react-slick").default;
}

const HowToCleanSection = ({steps,stepsTitle}:any) => {
         const [autoplay, setAutoplay] = useState(false);
        
          useEffect(() => {
            const timer = setTimeout(() => setAutoplay(true), 1000); 
            return () => clearTimeout(timer);
          }, []);
          const settings = {
            slidesToShow: 4,
            responsive: [
              { breakpoint: 998, settings: { 
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: autoplay,
                autoplaySpeed: 4000,
               } },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  dots: true,
                },
              },
            ],
          };
        
          if (typeof window === "undefined" || steps.length === 0) {
            return null;
          }
        
        
  return (
    <section className='section section--flush home-multi-3column how_to_clean_column'>
        <div className="container">
            <div className="section__header">
                <h2 className="heading h2">{stegaClean(stepsTitle)}</h2>
            </div>
            <div className="multi-column multi-blocks-size4 multi-column--pocket-medium multi-column--medium multi-column--spacing-normal">
            {SlickSlider && (
                <SlickSlider {...settings}  className="multi-column__inner multi-column__inner--center ">
                {steps.map((step:any, index:number) => {
                    const {title, description, image} = step
                    const imageUrl = image?.asset?.url || "https://aeropress.com/cdn/shop/files/Pour_59ead110-03e0-4fcf-8921-924101cb46be_500x.png?v=1713529053"
                    const imageWidth = image?.asset?.metadata?.dimensions?.width || 500
                    const imageHeight = image?.asset?.metadata?.dimensions?.height || 500
                    const imageLqip = image?.asset?.metadata?.lqip || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                    const imageSrcSet = `${imageUrl} ${imageWidth}w, ${imageLqip} 1x`
                    return(
                        <div key={index} className="multi-column__item small ">
                        <div className="multi-column__image-wrapper">
                        <img
                            className="multi-column__image"
                            src={urlFor(image).url()}
                            width={imageWidth}
                            height={imageHeight}
                            alt={stegaClean(title)}
                            loading="lazy"
                        />

                        </div>
                        <div className="multi-column__text-container text--center text-container">
                            <p className="heading h5">{stegaClean(title)}</p>
                            <p><strong>{description}</strong></p>
                        </div>
                    </div>
                    )
                    })}
            </SlickSlider>
            )}

            </div>
        </div>
    </section>
  )
}

export default HowToCleanSection