import { Link } from '@remix-run/react'
import React from 'react'
import Image from './Image'
import { urlFor } from '~/sanity/image'
import { stegaClean } from '@sanity/client/stega'

const ProductSection = ({ productData }: any) => {
    const productSectionTitle = productData?.data?.productSection?.title
    const compareText = productData?.data?.productSection?.compareText
    const product = productData?.data?.productSection?.products
    return (
        <section className='section home-featured-collections'>
            <div className="section-wrapper">
                <div className="container ">
                    <div className="section__header ">
                        <h2 className='heading h2'>{productSectionTitle}</h2>
                    </div>
                    <div className="featured-collections">
                        <div className="product-list__inner ">
                            {product?.map((item: any, key: number) => {
                                const imageUrl = item?.image?.asset?.url
                                    const imageWidth = item?.image?.asset?.metadata?.dimensions?.width
                                    const imageHeight = item?.image?.asset?.metadata?.dimensions?.height
                                    const imageLqip = item?.image?.asset?.metadata?.lqip
                                    const imageSrcSet = `${imageUrl} ${imageWidth}w, ${imageLqip} 1x`
                                const hoverImageUrl = item?.hoverImage?.asset?.url
                                    const hoverImageWidth = item?.hoverImage?.asset?.metadata?.dimensions?.width
                                    const hoverImageHeight = item?.hoverImage?.asset?.metadata?.dimensions?.height
                                    const hoverImageLqip = item?.hoverImage?.asset?.metadata?.lqip
                                    const hoverImageSrcSet = `${hoverImageUrl} ${hoverImageWidth}w, ${hoverImageLqip} 1x`
                                const title = item?.title
                                const subtitle = item?.subtitle
                                const price = item?.price
                                const ctaText = item?.ctaText
                                const variantImages = item?.variantImages
                                return (
                                    <div key={key} className="new-product-item">
                                        <div className="product-item ">
                                            <div className="product-item__image-wrapper product-item__image-wrapper--multiple">
                                                <Image
                                                 className='product-item__primary-image ' 
                                                 src={urlFor(imageUrl).url()}
                                                    srcSet={imageSrcSet}
                                                    width={imageWidth}
                                                    height={imageHeight}
                                                    alt={title}
                                                    loading="lazy"
                                                  />
                                                <img className='product-item__secondary-image' src={hoverImageUrl} />
                                            </div>
                                            <div className="product-item__info product-item__info--with-button ">
                                                <div className="product-item-meta">
                                                    <Link to="/" className="product-item-meta__title">{stegaClean(title)}</Link>
                                                    <span className="hidden-phone">{subtitle}</span>
                                                    <div className="product-item-meta__price-list-container">
                                                        <span className='price'>{price}</span>
                                                    </div>
                                                </div>
                                                <div className="product-details__size">
                                                    {
                                                        variantImages?.map((item: any, key: number) => {
                                                            const imgurl = item?.asset?.url;
                                                            return (
                                                                <div key={key} className="product_option color">
                                                                    <div className="color">
                                                                        <span
                                                                            className="product_option-color-image"
                                                                            style={{
                                                                                backgroundImage: `url(${imgurl})`,
                                                                                backgroundSize: 'cover',
                                                                                backgroundPosition: 'center',
                                                                            }}
                                                                        ></span>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })
                                                    }

                                                </div>
                                                <div className="add-to-cart-btn">
                                                    <button className=''>{ctaText}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className="collection_maker_btn">{compareText}</div>
                </div>
            </div>
        </section>
    )
}

export default ProductSection