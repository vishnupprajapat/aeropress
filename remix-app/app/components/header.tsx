import { Link } from '@remix-run/react'
import React from 'react'
import { FiSearch } from "react-icons/fi";

interface HeaderProps {
    header: any; // Replace 'any' with the actual type of 'header' if known
}

const Header: React.FC<HeaderProps> = ({ header }) => {
    const headerLogoUrl = header?.data?.headerlogo?.asset?.url || 'https://cdn.shopify.com/shopifycloud/web/assets/v1/7f0109d94c888a663452af48e2d324d7.svg';
    const headerLogoAlt = header?.data?.headerlogo?.alt || 'Header Logo';
    const headerLogoWidth = header?.data?.headerlogo?.asset?.metadata?.dimensions?.width || 100;
    const headerLogoHeight = header?.data?.headerlogo?.asset?.metadata?.dimensions?.height || 100;
    return (
        <>
            <div className="announcement-bar">
                <div className="announcement-bar__list">
                    <div className="announcement-bar__item">
                        <div className="announcement-bar__message text--xsmall">
                            <p><span className="message--stars">★ ★ ★ ★ ★</span>  65,000+ Five Star Reviews | 60 Countries</p></div>
                    </div>
                </div>
            </div>
            <header className="header header--bordered">
                <div className='container container-1440-64'>
                    <div className="header__wrapper">
                        <nav className="header__inline-navigation">
                            <div className="header__icon-list icon-burger-mobile hidden-desk">
                                <button
                                    is="toggle-button"
                                    className="header__icon-wrapper tap-area "
                                    aria-controls="mobile-menu-drawer"
                                    aria-expanded="false"
                                >
                                    <span className="visually-hidden">Navigation</span>
                                    <svg
                                        focusable="false"
                                        width={18}
                                        height={14}
                                        className="icon icon--header-hamburger   "
                                        viewBox="0 0 18 14"
                                    >
                                        <path
                                            d="M0 1h18M0 13h18H0zm0-6h18H0z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        />
                                    </svg>
                                </button>
                            </div>
                            <ul className='header__linklist list--unstyled hidden-pocket hidden-lap'>
                                {header?.data?.menu?.map((item: any, key: number) => {
                                    return (
                                        <li key={key} className='header__linklist-item has-dropdown'>
                                            <Link to={item?.link} className='header__linklist-link'>{item?.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                        <div className="header__title">
                            <img src={headerLogoUrl} alt={headerLogoAlt} width={headerLogoWidth} height={headerLogoWidth} className="header__logo" />
                        </div>
                        <div className="header__secondary-links">
                            <button
                                type="button"
                                className="popover-button text--small hidden-pocket"
                            >
                                <span className="img-icon">
                                    <img
                                        src="https://cdn.shopify.com/shopifycloud/web/assets/v1/7f0109d94c888a663452af48e2d324d7.svg"
                                        loading="lazy"
                                        width=""
                                        height=""
                                        alt="USD"
                                    />
                                </span>
                                <svg
                                    focusable="false"
                                    width="9"
                                    height="6"
                                    className="icon icon--chevron icon--inline"
                                    viewBox="0 0 12 8"
                                >
                                    <path
                                        fill="none"
                                        d="M1 1l5 5 5-5"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </button>
                            <div className="header__icon-list">
                                <Link to="/">
                                    <svg
                                        focusable="false"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        className="icon icon--header-search"
                                        viewBox="0 0 28 28"
                                        fill="none"
                                    >
                                        <path
                                            d="M12.1331 2.8C6.98954 2.8 2.7998 6.98973 2.7998 12.1333C2.7998 17.2769 6.98954 21.4667 12.1331 21.4667C14.3699 21.4667 16.424 20.6724 18.0339 19.3539L23.6066 24.9266C23.6926 25.0161 23.7956 25.0877 23.9096 25.1369C24.0236 25.1862 24.1462 25.2122 24.2704 25.2135C24.3946 25.2147 24.5178 25.1912 24.6327 25.1443C24.7477 25.0973 24.8521 25.0279 24.9399 24.9401C25.0277 24.8523 25.0971 24.7479 25.1441 24.6329C25.191 24.518 25.2145 24.3948 25.2133 24.2706C25.212 24.1464 25.186 24.0238 25.1367 23.9098C25.0875 23.7958 25.0159 23.6928 24.9264 23.6068L19.3537 18.0341C20.6722 16.4242 21.4665 14.3701 21.4665 12.1333C21.4665 6.98973 17.2767 2.8 12.1331 2.8ZM12.1331 4.66667C16.2679 4.66667 19.5998 7.99856 19.5998 12.1333C19.5998 16.2681 16.2679 19.6 12.1331 19.6C7.99836 19.6 4.66647 16.2681 4.66647 12.1333C4.66647 7.99856 7.99836 4.66667 12.1331 4.66667Z"
                                            fill="#27081D"
                                        />
                                    </svg>
                                </Link>
                                <Link to="/">
                                    <svg
                                        focusable="false"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        className="icon icon--header-cart"
                                        viewBox="0 0 28 28"
                                        fill="none"
                                    >
                                        <path
                                            d="M10.5 8.16667V10.5C10.5 11.4283 10.8687 12.3185 11.5251 12.9749C12.1815 13.6313 13.0717 14 14 14C14.9283 14 15.8185 13.6313 16.4749 12.9749C17.1313 12.3185 17.5 11.4283 17.5 10.5V8.16667"
                                            stroke="#27081D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M23.1932 24.5H4.80656C4.64193 24.501 4.47895 24.4671 4.32834 24.4007C4.17772 24.3342 4.04289 24.2366 3.93269 24.1142C3.8225 23.9919 3.73944 23.8477 3.68897 23.691C3.63851 23.5343 3.62178 23.3686 3.63989 23.205L5.71656 4.53834C5.74828 4.25167 5.88507 3.98691 6.10052 3.79515C6.31597 3.6034 6.59481 3.49826 6.88323 3.50001H21.1166C21.405 3.49826 21.6838 3.6034 21.8993 3.79515C22.1147 3.98691 22.2515 4.25167 22.2832 4.53834L24.3599 23.205C24.378 23.3686 24.3613 23.5343 24.3108 23.691C24.2604 23.8477 24.1773 23.9919 24.0671 24.1142C23.9569 24.2366 23.8221 24.3342 23.6715 24.4007C23.5208 24.4671 23.3579 24.501 23.1932 24.5Z"
                                            stroke="#27081D"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header