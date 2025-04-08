import { stegaClean } from '@sanity/client/stega'
import React, { useState } from 'react'
import { urlFor } from '~/sanity/image'
import Image from './Image'

const HowToCleanSection = ({steps,stepsTitle}:any) => {
  return (
    <section className='section section--flush home-multi-3column how_to_clean_column'>
        <div className="container">
            <div className="section__header">
                <h1 className="heading h2">{stepsTitle}</h1>
            </div>
            <div className="multi-column multi-blocks-size4 multi-column--pocket-medium multi-column--medium multi-column--spacing-normal">
                <div className="multi-column__inner multi-column__inner--center ">
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
                            <Image
                                className="multi-column__image"
                                src={urlFor(image).url()}
                                srcSet={imageSrcSet }
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
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowToCleanSection