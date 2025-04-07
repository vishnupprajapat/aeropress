import { Link } from '@remix-run/react'
import React from 'react'

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
                                const image = item?.image?.asset?.url
                                const hoverImage = item?.hoverImage?.asset?.url
                                const title = item?.title
                                const subtitle = item?.subtitle
                                const price = item?.price
                                const ctaText = item?.ctaText
                                const variantImages = item?.variantImages
                                return (
                                    <div key={key} className="new-product-item">
                                        <div className="product-item ">
                                            <div className="product-item__image-wrapper product-item__image-wrapper--multiple">
                                                <img className='product-item__primary-image ' src={image} />
                                                <img className='product-item__secondary-image' src={hoverImage} />
                                            </div>
                                            <div className="product-item__info product-item__info--with-button ">
                                                <div className="product-item-meta">
                                                    <Link to="/" className="product-item-meta__title">{title}</Link>
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