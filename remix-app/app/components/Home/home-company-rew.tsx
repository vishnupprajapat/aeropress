import React from 'react'

const HomeCompanyRew = ({ homeCompanyRewData }: any) => {
    const homeCompanyRew = homeCompanyRewData?.data?.homeCompanyRew

    return (
        <section className='home-company-rew'>
            <div className="container">
                <div className="home-company-rew-warper">
                    {homeCompanyRew?.map((item: any, index: number) => {
                        const { image, title } = item
                        const imageUrl = image?.asset?.url
                        const imageWidth = image?.asset?.metadata?.dimensions?.width
                        const imageHeight = image?.asset?.metadata?.dimensions?.height
                        return (
                            <div key={index} className="home-company-rew-warper-item">
                                <div className="home-company-rew-warper-item-image">
                                    <img src={imageUrl} width={imageWidth} height={imageHeight} alt="image" />
                                </div>
                                <div className="home-company-rew-warper-item-text">
                                    <p className="heading h5">{title}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default HomeCompanyRew