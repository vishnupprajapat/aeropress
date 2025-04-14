import { Link } from "@remix-run/react"
import { stegaClean } from "@sanity/client/stega"
const HeroBanner = ({ HeroBannerData }: any) => {
    const imageUrl = HeroBannerData?.data.herosection?.backgroundImage?.asset?.url || "https://cdn.sanity.io/images/n8l6ew8i/production/a08327a03de3344ce432d9ed401d6ba9606bafd6-1920x818.webp"
    const imageWidth = HeroBannerData?.data.herosection?.backgroundImage?.asset?.metadata?.dimensions?.width
    const imageHeight = HeroBannerData?.data.herosection?.backgroundImage?.asset?.metadata?.dimensions?.height
    const imageUrlForMobile = HeroBannerData?.data.herosection?.backgroundImageForMobile?.asset?.url
    const badge = HeroBannerData?.data.herosection?.badge
    const ctaText = HeroBannerData?.data.herosection?.ctaText
    const ctaUrl = HeroBannerData?.data.herosection?.ctaUrl
    const heading = HeroBannerData?.data.herosection?.heading
    const features = HeroBannerData?.data.herosection?.features


    
    return (
        <div className="home-banner">
            <div className="home-banner-image">
                <img
                    className="desktop-image"
                    src={imageUrl}
                    width={imageWidth}
                    height={imageHeight}
                    rel="preload"
                    alt={stegaClean(heading)}
                />
                <img
                    className="mobile-image"
                    src={imageUrlForMobile}
                    alt={stegaClean(heading)}
                    loading="eager"
                    rel="preload"
                />
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
                                features?.map((item: any, key: number) => {
                                    return (
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