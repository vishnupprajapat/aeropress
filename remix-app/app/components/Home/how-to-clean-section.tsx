import React from 'react'

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
                        return(
                            <div key={index} className="multi-column__item small ">
                            <div className="multi-column__image-wrapper">
                                <img className='multi-column__image' src={imageUrl}/>
                            </div>
                            <div className="multi-column__text-container text--center text-container">
                                <p className="heading h5">{title}</p>
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