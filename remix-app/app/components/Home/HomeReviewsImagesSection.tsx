import { Link } from '@remix-run/react'
import { stegaClean } from '@sanity/client/stega'
import React from 'react'
import Image from './Image'

const HomeReviewsImagesSection = ({homeReviewsImagesData}:any) => {
    const {tagline, title, products, ctaText, ctaLink} = homeReviewsImagesData.data.homeReviewsImagesSection
    return (
        <section className='section home_reviews_images'>
            <div className="section__color-wrapper">
                <div className="container">
                    <div className="section__header  section__header--">
                        <span>{tagline}</span>
                        <h2 className="heading">{title}</h2>
                    </div>
                    <div className="grid_reviews_images">
                        {products.map((product:any, index:number) => {
                            const {image, title} = product
                            const imageUrl = image.asset.url
                            const imageWidth = image.asset.metadata.dimensions.width || 500
                            const imageHeight = image.asset.metadata.dimensions.height || 500
                            const imageLqip = image.asset.metadata.lqip || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                            const imageSrcSet = `${imageUrl} ${imageWidth}w, ${imageLqip} 1x`
                            return(
                                <div key ={index} className="reviews_images_item">
                                <Image 
                                className='multi-column__image' 
                                src={imageUrl}
                                srcSet={imageSrcSet}
                                width={imageWidth}
                                height={imageHeight}
                                loading="lazy"
                                 alt={title} />
                                <div className="review_title">{stegaClean(title)}</div>
                                <span className="view_review_btn" data-id="review_tab_modal1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={42}
                                        height={42}
                                        viewBox="0 0 42 42"
                                        fill="none"
                                    >
                                        <ellipse
                                            cx="20.6726"
                                            cy="21.1976"
                                            rx="20.3728"
                                            ry="20.3729"
                                            fill="white"
                                            fillOpacity="0.4"
                                        />
                                        <ellipse
                                            cx="20.6724"
                                            cy="21.1974"
                                            rx="17.2027"
                                            ry="17.2028"
                                            fill="white"
                                            fillOpacity="0.4"
                                        />
                                        <ellipse
                                            cx="20.6723"
                                            cy="21.1973"
                                            rx="13.6435"
                                            ry="13.6436"
                                            fill="white"
                                            fillOpacity="0.6"
                                        />
                                        <path
                                            d="M14.6352 22.198L21.756 15.0773C21.8581 14.9752 21.9985 14.9207 22.1427 14.9273L26.7878 15.1393C27.0532 15.1514 27.2656 15.3638 27.2777 15.6292L27.4897 20.2743C27.4963 20.4185 27.4418 20.5589 27.3397 20.661L20.2189 27.7818C20.0183 27.9825 19.6929 27.9825 19.4922 27.7818L14.6352 22.9248C14.4345 22.7241 14.4345 22.3987 14.6352 22.198ZM24.5309 17.8861C24.9225 18.2777 25.5574 18.2777 25.949 17.8861C26.3406 17.4945 26.3406 16.8596 25.949 16.468C25.5574 16.0764 24.9224 16.0764 24.5309 16.468C24.1393 16.8596 24.1393 17.4945 24.5309 17.8861Z"
                                            fill="#A30A0A"
                                        />
                                    </svg>
                                </span>
                            </div>
                            )
                        })}
                    </div>
                    <div className="button-wrapper">
                        <Link to="/reviews" className="view_all_reviews_btn">{ctaText}</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeReviewsImagesSection