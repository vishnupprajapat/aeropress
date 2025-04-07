import React from 'react'


const Footer = ({ footer }: any) => {
  const promoTextHeading = footer?.data?.promoTextHeading
  const promoTextDescription = footer?.data?.promoTextDescription
  const footerNav = footer?.data?.footerNav
  const legalLinks = footer?.data?.legalLinks
  const footerLogo = footer?.data?.headerlogo?.asset?.url || 'https://cdn.shopify.com/shopifycloud/web/assets/v1/7f0109d94c888a663452af48e2d324d7.svg';
  const copyright = footer?.data?.copyright
  const socialLinks = footer?.data?.socialLinks
  return (
    <footer className="footer ">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__item-list">
            <div className="footer__item footer__item--newsletter is-first">
              <a href="https://www.aeropress.com">
                <img
                  style={{ width: 260 }}
                  loading="lazy"
                  sizes="260px"
                  className="footer__image"
                  height={55}
                  width={250}
                  alt="AeroPress Logo"
                  src={footerLogo}
                  srcSet="//aeropress.com/cdn/shop/files/aeropress-logo-with-icon_100x.png?v=1731022031 100w, //aeropress.com/cdn/shop/files/aeropress-logo-with-icon_200x.png?v=1731022031 200w, //aeropress.com/cdn/shop/files/aeropress-logo-with-icon_250x.png?v=1731022031 250w"
                />
              </a>
              <p className="footer__item-title heading heading--small">
                {promoTextHeading}
              </p>
              <div className="footer__item-content">
                <p>
                  {promoTextDescription}
                </p>
                <div className="klaviyo-form-YfEkHN" />
              </div>
            </div>
            <div className="footer__item footer__item--links ">
              <p className="footer__item-title heading heading--small">
                {footerNav[0]?.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={11}
                  height={6}
                  viewBox="0 0 11 6"
                  fill="none"
                >
                  <path
                    d="M1.03998 0.748047L5.51998 5.22805L9.99998 0.748047"
                    stroke="#fff"
                    strokeWidth="1.28"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
              <div className="footer__item-content">
                <ul className="linklist list--unstyled" role="list">
                  <li className="linklist__item">
                    <a href="/pages/about" className="link--faded">
                      Inventor’s Story
                    </a>
                  </li>
                  <li className="linklist__item">
                    <a href="/pages/community" className="link--faded">
                      Community
                    </a>
                  </li>
                  <li className="linklist__item">
                    <a href="/pages/championships" className="link--faded">
                      World AeroPress Championship
                    </a>
                  </li>
                  <li className="linklist__item">
                    <a href="/pages/press" className="link--faded">
                      AeroPress in the news
                    </a>
                  </li>
                  <li className="linklist__item">
                    <a href="/blogs/blog" className="link--faded">
                      AeroPress Coffee Blog
                    </a>
                  </li>
                </ul>
              </div>

              {
                footerNav[0]?.links.map((item: any, key: number) => {
                  return (
                    <React.Fragment key={key}>
                      <p className="footer__item-title heading heading--small">
                        {item?.label}{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={11}
                          height={6}
                          viewBox="0 0 11 6"
                          fill="none"
                        >
                          <path
                            d="M1.03998 0.748047L5.51998 5.22805L9.99998 0.748047"
                            stroke="#fff"
                            strokeWidth="1.28"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </p>
                      <div className="footer__item-content">
                        <ul className="linklist list--unstyled" role="list">
                          <li className="linklist__item">
                            <a href="/collections/coffee-makers" className="link--faded">
                              Coffee Makers
                            </a>
                          </li>
                          <li className="linklist__item">
                            <a
                              href="/collections/filters-and-accessories"
                              className="link--faded"
                            >
                              Accessories
                            </a>
                          </li>
                          <li className="linklist__item">
                            <a
                              href="/collections/aeropress-filters"
                              className="link--faded"
                            >
                              Filters
                            </a>
                          </li>
                          <li className="linklist__item">
                            <a href="/collections/bundles" className="link--faded">
                              Bundles &amp; Gifts
                            </a>
                          </li>
                          <li className="linklist__item">
                            <a href="/collections/marketplace" className="link--faded">
                              Grinders &amp; Kettles
                            </a>
                          </li>
                          <li className="linklist__item">
                            <a
                              href="/collections/replacement-parts"
                              className="link--faded"
                            >
                              Replacement Parts
                            </a>
                          </li>
                          <li className="linklist__item">
                            <a
                              href="/products/aeropress-gift-cards"
                              className="link--faded"
                            >
                              Gift Cards
                            </a>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  )
                })
              }
              {/* <p className="footer__item-title heading heading--small">
                Products{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={11}
                  height={6}
                  viewBox="0 0 11 6"
                  fill="none"
                >
                  <path
                    d="M1.03998 0.748047L5.51998 5.22805L9.99998 0.748047"
                    stroke="#fff"
                    strokeWidth="1.28"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
              <div className="footer__item-content">
                <ul className="linklist list--unstyled" role="list">
                  <li className="linklist__item">
                    <a href="/collections/coffee-makers" className="link--faded">
                      Coffee Makers
                    </a>
                  </li>
                  <li className="linklist__item">
                    <a
                      href="/collections/filters-and-accessories"
                      className="link--faded"
                    >
                      Accessories
                    </a>
                  </li>
                  <li className="linklist__item">
                    <a
                      href="/collections/aeropress-filters"
                      className="link--faded"
                    >
                      Filters
                    </a>
                  </li>
                  <li className="linklist__item">
                    <a href="/collections/bundles" className="link--faded">
                      Bundles &amp; Gifts
                    </a>
                  </li>
                  <li className="linklist__item">
                    <a href="/collections/marketplace" className="link--faded">
                      Grinders &amp; Kettles
                    </a>
                  </li>
                  <li className="linklist__item">
                    <a
                      href="/collections/replacement-parts"
                      className="link--faded"
                    >
                      Replacement Parts
                    </a>
                  </li>
                  <li className="linklist__item">
                    <a
                      href="/products/aeropress-gift-cards"
                      className="link--faded"
                    >
                      Gift Cards
                    </a>
                  </li>
                </ul>
              </div>
              <p className="footer__item-title heading heading--small">
                Support{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={11}
                  height={6}
                  viewBox="0 0 11 6"
                  fill="none"
                >
                  <path
                    d="M1.03998 0.748047L5.51998 5.22805L9.99998 0.748047"
                    stroke="#fff"
                    strokeWidth="1.28"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
              <div className="footer__item-content">
                <ul className="linklist list--unstyled" role="list">
                  <li className="linklist__item">
                    <a href="https://help.aeropress.com/" className="link--faded">
                      Help Center
                    </a>
                  </li>
                  <li className="linklist__item">
                    <a href="/pages/faq" className="link--faded">
                      FAQ
                    </a>
                  </li>
                  <li className="linklist__item">
                    <a href="/pages/contact" className="link--faded">
                      Contact
                    </a>
                  </li>
                  <li className="linklist__item">
                    <a href="/apps/store-locator" className="link--faded">
                      Store Locator
                    </a>
                  </li>
                  <li className="linklist__item">
                    <a href="/pages/shipping-policy" className="link--faded">
                      Shipping Policy
                    </a>
                  </li>
                  <li className="linklist__item">
                    <a href="/policies/refund-policy" className="link--faded">
                      Return Policy
                    </a>
                  </li>
                  <li className="linklist__item">
                    <a href="/pages/warranty" className="link--faded">
                      Warranty
                    </a>
                  </li>
                  <li className="linklist__item">
                    <a
                      href="/pages/accessibility-statement"
                      className="link--faded"
                    >
                      Accessibility Statement
                    </a>
                  </li>
                  <li className="linklist__item">
                    <a
                      href="https://wholesale.aeropress.com/"
                      className="link--faded"
                    >
                      USA Wholesale
                    </a>
                  </li>
                  <li className="linklist__item">
                    <a href="/pages/wholesale" className="link--faded">
                      International Wholesale
                    </a>
                  </li>
                  <li className="linklist__item">
                    <a href="/pages/ccpa-opt-out" className="link--faded">
                      Do not sell my personal information
                    </a>
                  </li>
                </ul>
              </div>
              <p className="footer__item-title heading heading--small">
                Stores{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={11}
                  height={6}
                  viewBox="0 0 11 6"
                  fill="none"
                >
                  <path
                    d="M1.03998 0.748047L5.51998 5.22805L9.99998 0.748047"
                    stroke="#fff"
                    strokeWidth="1.28"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
              <div className="footer__item-content">
                <ul className="linklist list--unstyled" role="list">
                  <li className="linklist__item">
                    <a href="/apps/store-locator" className="link--faded">
                      Store Locator
                    </a>
                  </li>
                </ul>
              </div> */}
              <ul
                className="social-media social-media--no-radius list--unstyled"
                role="list"
              >
                <li className="social-media__item social-media__item--instagram">
                  <a
                    href="https://www.instagram.com/aeropress/"
                    target="_blank"
                    rel="noopener"
                    className="social-media__link"
                    aria-label="Follow us on Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={25}
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2.47452C15.204 2.47452 15.584 2.48652 16.85 2.54452C20.102 2.69252 21.621 4.23552 21.769 7.46352C21.827 8.72852 21.838 9.10852 21.838 12.3125C21.838 15.5175 21.826 15.8965 21.769 17.1615C21.62 20.3865 20.105 21.9325 16.85 22.0805C15.584 22.1385 15.206 22.1505 12 22.1505C8.796 22.1505 8.416 22.1385 7.151 22.0805C3.891 21.9315 2.38 20.3815 2.232 17.1605C2.174 15.8955 2.162 15.5165 2.162 12.3115C2.162 9.10752 2.175 8.72852 2.232 7.46252C2.381 4.23552 3.896 2.69152 7.151 2.54352C8.417 2.48652 8.796 2.47452 12 2.47452ZM12 0.311523C8.741 0.311523 8.333 0.325523 7.053 0.383523C2.695 0.583523 0.273 3.00152 0.073 7.36352C0.014 8.64452 0 9.05252 0 12.3115C0 15.5705 0.014 15.9795 0.072 17.2595C0.272 21.6175 2.69 24.0395 7.052 24.2395C8.333 24.2975 8.741 24.3115 12 24.3115C15.259 24.3115 15.668 24.2975 16.948 24.2395C21.302 24.0395 23.73 21.6215 23.927 17.2595C23.986 15.9795 24 15.5705 24 12.3115C24 9.05252 23.986 8.64452 23.928 7.36452C23.732 3.01052 21.311 0.584523 16.949 0.384523C15.668 0.325523 15.259 0.311523 12 0.311523ZM12 6.14952C8.597 6.14952 5.838 8.90852 5.838 12.3115C5.838 15.7145 8.597 18.4745 12 18.4745C15.403 18.4745 18.162 15.7155 18.162 12.3115C18.162 8.90852 15.403 6.14952 12 6.14952ZM12 16.3115C9.791 16.3115 8 14.5215 8 12.3115C8 10.1025 9.791 8.31152 12 8.31152C14.209 8.31152 16 10.1025 16 12.3115C16 14.5215 14.209 16.3115 12 16.3115ZM18.406 4.46652C17.61 4.46652 16.965 5.11152 16.965 5.90652C16.965 6.70152 17.61 7.34652 18.406 7.34652C19.201 7.34652 19.845 6.70152 19.845 5.90652C19.845 5.11152 19.201 4.46652 18.406 4.46652Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li className="social-media__item social-media__item--facebook">
                  <a
                    href="https://www.facebook.com/aeropress"
                    target="_blank"
                    rel="noopener"
                    className="social-media__link"
                    aria-label="Follow us on Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={25}
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.675 0.311523H1.325C0.593 0.311523 0 0.904523 0 1.63652V22.9875C0 23.7185 0.593 24.3115 1.325 24.3115H12.82V15.0175H9.692V11.3955H12.82V8.72452C12.82 5.62452 14.713 3.93652 17.479 3.93652C18.804 3.93652 19.942 4.03552 20.274 4.07952V7.31952L18.356 7.32052C16.852 7.32052 16.561 8.03552 16.561 9.08352V11.3965H20.148L19.681 15.0185H16.561V24.3115H22.677C23.407 24.3115 24 23.7185 24 22.9865V1.63652C24 0.904523 23.407 0.311523 22.675 0.311523Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li className="social-media__item social-media__item--pinterest">
                  <a
                    href="https://www.pinterest.com/aeropressofficial/"
                    target="_blank"
                    rel="noopener"
                    className="social-media__link"
                    aria-label="Follow us on Pinterest"
                  >
                    <svg
                      focusable="false"
                      width={12}
                      height={16}
                      className="icon icon--pinterest   "
                      viewBox="0 0 12 16"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.8042 0.00123531C8.79537 -0.0442356 10.6685 1.16769 11.5498 3.29299C11.8407 3.99433 12.1516 5.28439 11.9181 6.35474C11.825 6.78208 11.7985 7.22812 11.6726 7.63086C11.4163 8.4496 11.0829 9.17441 10.6413 9.79945C10.0418 10.6486 9.13196 11.2212 7.98951 11.5091C6.97899 11.7637 6.04959 11.3826 5.50954 10.9732C5.33747 10.843 5.10674 10.6728 5.04304 10.4377C5.03488 10.4377 5.0267 10.4377 5.01853 10.4377C4.97972 10.8669 4.81532 11.3224 4.69924 11.7135C4.53858 12.2545 4.50733 12.8146 4.3064 13.3208C4.08349 13.8828 3.81274 14.3978 3.52072 14.8776C3.36739 15.1292 2.94427 15.9904 2.63675 16C2.60311 15.9354 2.58964 15.9105 2.58761 15.796C2.48858 15.6383 2.55757 15.3724 2.51393 15.1578C2.44604 14.8236 2.39317 14.2217 2.46491 13.8824C2.46491 13.7038 2.46491 13.5248 2.46491 13.3465C2.54397 12.9786 2.54085 12.6015 2.63675 12.2494C2.84537 11.4824 2.96145 10.6699 3.17692 9.87611C3.38398 9.11352 3.57396 8.27939 3.74172 7.50321C3.77957 7.32789 3.56652 6.82389 3.52072 6.63572C3.37628 6.04186 3.48624 5.21874 3.66805 4.77269C3.89698 4.21111 4.56717 3.3535 5.43589 3.57359C6.13407 3.75039 6.57846 4.50528 6.34437 5.46192C6.09862 6.46589 5.7798 7.3653 5.5587 8.37035C5.50173 8.62933 5.59968 8.90442 5.65687 9.05958C5.86357 9.61934 6.49037 10.163 7.32652 9.95278C8.59396 9.63365 9.15431 8.48627 9.53645 7.24791C9.63981 6.91302 9.62743 6.59647 9.70831 6.22709C9.87894 5.44763 9.80648 4.28411 9.56098 3.67556C9.16753 2.70023 8.43329 2.07518 7.42471 1.73624C7.1465 1.68526 6.86819 1.63427 6.58988 1.58329C6.12397 1.47655 5.23532 1.63685 4.92023 1.73624C3.51171 2.18156 2.63952 2.92544 2.09658 4.26247C1.91177 4.71767 1.81046 5.17911 1.77741 5.81884C1.76913 5.8955 1.76094 5.97217 1.75278 6.04883C1.86153 6.62068 1.87259 6.99959 2.09658 7.42657C2.20715 7.63711 2.46971 7.8029 2.51393 8.06444C2.54001 8.2185 2.42705 8.45105 2.39125 8.57467C2.33705 8.76137 2.35676 8.97522 2.26844 9.13625C2.10873 9.42678 1.67383 9.20852 1.48275 9.08491C0.489307 8.44373 -0.329526 6.5895 0.132284 4.79837C0.20342 4.5218 0.206915 4.28118 0.304126 4.03285C0.906661 2.49554 1.80565 1.55101 3.10325 0.741098C3.58947 0.437749 4.24511 0.287354 4.84657 0.128885C5.16574 0.0863481 5.48503 0.0437917 5.8042 0.00123531Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li className="social-media__item social-media__item--youtube">
                  <a
                    href="https://www.youtube.com/c/AeroPressCoffeeMaker"
                    target="_blank"
                    rel="noopener"
                    className="social-media__link"
                    aria-label="Follow us on YouTube"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={25}
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.615 3.49565C16.011 3.24965 7.984 3.25065 4.385 3.49565C0.488 3.76165 0.029 6.11565 0 12.3116C0.029 18.4966 0.484 20.8606 4.385 21.1276C7.985 21.3727 16.011 21.3736 19.615 21.1276C23.512 20.8616 23.971 18.5076 24 12.3116C23.971 6.12665 23.516 3.76265 19.615 3.49565ZM9 16.3116V8.31165L17 12.3046L9 16.3116Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li className="social-media__item social-media__item--tiktok">
                  <a
                    href="https://www.tiktok.com/@aeropress"
                    target="_blank"
                    rel="noopener"
                    className="social-media__link"
                    aria-label="Follow us on TikTok"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={25}
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M18.1155 6.32046C17.0382 5.61803 16.2606 4.49414 16.0181 3.18399C15.9657 2.90092 15.9369 2.6096 15.9369 2.31152H12.4985L12.493 16.0915C12.4352 17.6346 11.1651 18.8731 9.60816 18.8731C9.12425 18.8731 8.6686 18.7521 8.26741 18.541C7.34742 18.0569 6.71783 17.0925 6.71783 15.9828C6.71783 14.389 8.0145 13.0924 9.60816 13.0924C9.90565 13.0924 10.191 13.1414 10.461 13.226V9.71576C10.1816 9.67773 9.89778 9.65395 9.60816 9.65395C6.11842 9.65395 3.27942 12.4931 3.27942 15.9828C3.27942 18.1239 4.34917 20.0187 5.9812 21.1645C7.00918 21.8862 8.2596 22.3115 9.60816 22.3115C13.0979 22.3115 15.9369 19.4726 15.9369 15.9828V8.9952C17.2855 9.96314 18.9377 10.5335 20.7206 10.5335V7.09512C19.7602 7.09512 18.8657 6.80961 18.1155 6.32046Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li className="social-media__item social-media__item--twitter">
                  <a
                    href="https://twitter.com/AeroPress"
                    target="_blank"
                    rel="noopener"
                    className="social-media__link"
                    aria-label="Follow us on Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={22}
                      viewBox="0 0 24 22"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.99079 11.7496L0 0.311523H7.12135L12.6713 7.38103L18.6005 0.343354H22.5226L14.5676 9.79658L24 21.8115H16.8999L10.8905 14.1663L4.47476 21.7903H0.531444L8.99079 11.7496ZM17.9348 19.6923L4.36657 2.43079H6.08565L19.6368 19.6923H17.9348Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              <p className="footer__copyright">
                <span>
                  {copyright}&nbsp;|&nbsp;
                  <a href="/policies/privacy-policy" className="link--faded">
                  {legalLinks[0]?.label}
                  </a>
                  &nbsp;|&nbsp;
                  <a href="/policies/terms-of-service" className="link--faded">
                   {legalLinks[0]?.label}
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer