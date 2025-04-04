import React from 'react'

const HomeHowDoTabsSection = () => {
  return (
    <section className='section home_aeropress_tabs'>
      <div className="container">
        <div className="section__header">
          <h2 className="heading">How Do We Stack Up?</h2>
        </div>
        <div className="home_aeropress_tabs_ul">
          <ul className="tabs">
            <li className="active" rel="tab1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 7.00812H17V18.0013C17 18.6009 16.7 19.0006 16.4 19.4004C16.1 19.8001 15.6 20 15 20H9C8.5 20 8 19.8001 7.6 19.4004C7.2 19.1006 7 18.6009 7 18.0013V7.00812ZM7 7.00812H4M20 14.0037V11.0056C20 10.406 19.6 10.0062 19 10.0062H17H7M12 4V16.9919M11 4.00999H13M10 17.0019H14"
                  stroke="#383738"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span> French Press</span>
            </li>
            <li className="" rel="tab2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.00937 18H17.0019M9.00687 20H13.0044M10.0062 13H12.005M8.0075 9H14.0037M17.0019 9H18.0013C19.1006 9 20 9.9 20 11V12C20 13.1 19.1006 14 18.0013 14H16.0025M17.9913 5H4L7.9975 18H13.9938C13.9938 18 17.9913 5.01 17.9913 5Z"
                  stroke="#383738"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span> Pour Over</span>
            </li>
            <li className="" rel="tab3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 13H15M9 13L8 20H16L15 13M9 13L8 6M15 13L16 6H8M8 6H6M16 8H18C18.55 8 19 8.45 19 9V12M12 19.5V4"
                  stroke="#383738"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span> Moka Pot</span>
            </li>
            <li className="" rel="tab4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16 10L17.28 16.41C17.65 18.27 16.23 20 14.34 20H7.66C5.77 20 4.35 18.27 4.72 16.41L6 10M16 10H6M16 10V8M6 10V8M16 8V6L4 5L6 8M16 8H6M20 14V11C20 9.9 19.1 9 18 9H16M5 15H17"
                  stroke="#383738"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span> Drip</span>
            </li>
          </ul>

        </div>
      </div>
    </section>
  )
}

export default HomeHowDoTabsSection