import React from 'react'

const HomeTechnologySection = () => {
    return (
        <section className='section home_technology'>
            <div className="section__color-wrapper">
                <div className="container">
                    <div className="technology_grid">
                        <div className="technology_left technology_item">
                            <div className="section__header">
                                <h2 className="heading">Patented 3-in-1 Technology</h2>
                                <div><p>Our patented design transforms coffee brewing into a quick, portable, and globally embraced experience.</p></div>
                                <div className="button-wrapper">
                                    <span className="video_popup_btn">
                                        <svg
                                            width={48}
                                            height={49}
                                            viewBox="0 0 48 49"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx={24} cy="24.4617" r="23.5" stroke="white" />
                                            <path
                                                d="M36.1384 22.9031L19.7639 12.7334C19.4879 12.5618 19.1717 12.4681 18.848 12.462C18.5244 12.4559 18.205 12.5376 17.9228 12.6988C17.6434 12.8574 17.4106 13.0887 17.2484 13.369C17.0862 13.6493 17.0005 13.9683 17 14.2934V34.6305C17.0021 35.1181 17.1948 35.5849 17.5358 35.9283C17.8768 36.2716 18.3381 36.4635 18.8184 36.4617C19.1536 36.4615 19.4823 36.3677 19.7685 36.1905L36.1384 26.0208C36.4015 25.8579 36.619 25.6291 36.7699 25.3563C36.9207 25.0836 37 24.776 37 24.4631C37 24.1502 36.9207 23.8426 36.7699 23.5699C36.619 23.2971 36.4015 23.0683 36.1384 22.9055V22.9031ZM18.8184 34.6086V14.3084L35.1644 24.462L18.8184 34.6086Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <span>See AeroPress in action</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="technology_right technology_item">
                            <div className="home_technology_block">
                                <div className="multi-column__image">
                                    <img src="https://aeropress.com/cdn/shop/files/AeroPress_Clear_Addition_1_605x.png?v=1713417072" alt="AeroPress clear Demo" />
                                    <div className="tech-text1 technology_text" data-id="technology_tab_modal1">
                                        <span>Fast immersion</span>
                                        <img
                                            src="https://aeropress.com/cdn/shop/files/Frame_5684.svg?v=1709091109"
                                            width="41px"
                                            height="41px"
                                            alt="Fast immersion"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="tech-text2 technology_text" data-id="technology_tab_modal2">
                                        <img
                                            src="https://aeropress.com/cdn/shop/files/Air_Pressure.svg?v=1699587036"
                                            width="41px"
                                            height="42px"
                                            alt="Air_Pressure"
                                            loading="lazy"
                                        />
                                        <span>Air Pressure</span>
                                    </div>
                                    <div className="tech-text3 technology_text" data-id="technology_tab_modal3">
                                        <img
                                            src="https://aeropress.com/cdn/shop/files/Frame_5684_f4e6daeb-2d1c-4b13-a993-a3ba8f02b795.svg?v=1709091115"
                                            width="41px"
                                            height="41px"
                                            alt="Micro-Filtration"
                                            loading="lazy"
                                        />
                                        <span>Micro-Filtration</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeTechnologySection