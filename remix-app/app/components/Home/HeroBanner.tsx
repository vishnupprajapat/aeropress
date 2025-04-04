import { Link } from "@remix-run/react"
import homeCss from "../../styles/home.css"
import { LinksFunction } from '@remix-run/node'
export const links: LinksFunction = () => {
    return [
        { rel: 'stylesheet', href: homeCss },
    ]
}
const HeroBanner = () => {
    return (
        <div className="home-banner">
            <div className="home-banner-image">
                <img className="desktop-image" src="https://aeropress.com/cdn/shop/files/banner_img_1920x.jpg?v=1713528460" />
                <img className="mobile-image" src="https://aeropress.com/cdn/shop/files/banner_mobile_img_j_360x.jpg?v=1713526818" />
            </div>
            <div className="home-banner-content">
                <div className="home-banner-content-warper">
                <div className="announcement-bar__message text--xsmall">
                    <p>
                    <span className="message--stars">★ ★ ★ ★ ★</span> 
                     65,000+ Five Star Reviews</p>
                    </div>
                    <h1 className="banner-heading">The World’s Best Reviewed Coffee Press</h1>
                    <div className="home-banner-list">
                        <ul>
                            <li><strong>Full-bodied like a French Press</strong></li>
                            <li><strong>Smooth like a Pour-Over</strong></li>
                            <li><strong>Rich like Espresso</strong></li>
                        </ul>
                        <div className="button-wrapper"><Link to="/shop">Shop Now</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner