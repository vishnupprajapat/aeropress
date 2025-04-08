import { Link } from "@remix-run/react"
import { stegaClean } from "@sanity/client/stega"
import Image from "./Image"
const HeroBanner = ({HeroBannerData}:any) => {
    const imageUrl = HeroBannerData?.data.herosection?.backgroundImage?.asset?.url
    const imageWidth = HeroBannerData?.data.herosection?.backgroundImage?.asset?.metadata?.dimensions?.width
    const imageHeight = HeroBannerData?.data.herosection?.backgroundImage?.asset?.metadata?.dimensions?.height
    const imageLqip = HeroBannerData?.data.herosection?.backgroundImage?.asset?.metadata?.lqip
    const imageSrcSet = `${imageUrl} ${imageWidth}w, ${imageLqip} 1x`
    const imageUrlForMobile = HeroBannerData?.data.herosection?.backgroundImageForMobile?.asset?.url
    const imageWidthForMobile = HeroBannerData?.data.herosection?.backgroundImageForMobile?.asset?.metadata?.dimensions?.width
    const imageHeightForMobile = HeroBannerData?.data.herosection?.backgroundImageForMobile?.asset?.metadata?.dimensions?.height
    const imageLqipForMobile = HeroBannerData?.data.herosection?.backgroundImageForMobile?.asset?.metadata?.lqip
    const imageSrcSetForMobile = `${imageUrlForMobile} ${imageWidthForMobile}w, ${imageLqipForMobile} 1x`

    const badge = HeroBannerData?.data.herosection?.badge
    const ctaText = HeroBannerData?.data.herosection?.ctaText
    const ctaUrl = HeroBannerData?.data.herosection?.ctaUrl
    const heading =  HeroBannerData?.data.herosection?.heading
    const features = HeroBannerData?.data.herosection?.features

    return (
        <div className="home-banner">
            <div className="home-banner-image">
                <Image 
                className="desktop-image" 
                src={imageUrl}
                srcSet={imageSrcSet}
                width={imageWidth}
                height={imageHeight}
                loading="lazy"
                alt={stegaClean(heading)}
                />
                <img 
                className="mobile-image"
                src={imageUrlForMobile}
                alt={stegaClean(heading)} />
            </div>
            <div className="home-banner-content">
                <div className="home-banner-content-warper">
                <div className="announcement-bar__message text--xsmall">
                    <p>
                    <span className="message--stars">★ ★ ★ ★ ★</span> 
                    {stegaClean(badge)}</p>
                    </div>
                    <h1 className="banner-heading">{stegaClean(heading)}</h1>
                    <div className="home-banner-list">
                        <ul>
                            {
                                features?.map((item:any,key:number)=>{
                                    return(
                                        <li key={key}><span>{item}</span></li>
                                    )
                                })
                            }

                        </ul>
                        <div className="button-wrapper"><Link to={ctaUrl}>{ctaText}</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner