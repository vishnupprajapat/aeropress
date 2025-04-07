import { Link } from "@remix-run/react"
import homeCss from "../../styles/home.css"
import { LinksFunction } from '@remix-run/node'
export const links: LinksFunction = () => {
    return [
        { rel: 'stylesheet', href: homeCss },
    ]
}
const HeroBanner = ({HeroBannerData}:any) => {
    const herosectionImage =  HeroBannerData?.data.herosection?.backgroundImage?.asset?.url || "https://aeropress.com/cdn/shop/files/banner_img_1920x.jpg?v=1713528460"
    const badge = HeroBannerData?.data.herosection?.badge
    const ctaText = HeroBannerData?.data.herosection?.ctaText
    const ctaUrl = HeroBannerData?.data.herosection?.ctaUrl
    const heading =  HeroBannerData?.data.herosection?.heading
    const features = HeroBannerData?.data.herosection?.features

    return (
        <div className="home-banner">
            <div className="home-banner-image">
                <img className="desktop-image" src={herosectionImage} />
                <img className="mobile-image" src="https://aeropress.com/cdn/shop/files/banner_mobile_img_j_360x.jpg?v=1713526818" />
            </div>
            <div className="home-banner-content">
                <div className="home-banner-content-warper">
                <div className="announcement-bar__message text--xsmall">
                    <p>
                    <span className="message--stars">★ ★ ★ ★ ★</span> 
                    {badge}</p>
                    </div>
                    <h1 className="banner-heading">{heading}</h1>
                    <div className="home-banner-list">
                        <ul>
                            {
                                features?.map((item:any,key:number)=>{
                                    return(
                                        <li key={key}><strong>{item}</strong></li>
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