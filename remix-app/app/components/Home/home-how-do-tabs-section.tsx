import React, { useState } from 'react'
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
const HomeHowDoTabsSection = ({ filters, title }: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const comparisonData = [
    {
      feature: "Smooth, Rich, Full Bodied",
      aeropress: true,
      frenchPress: false,
    },
    {
      feature: "No Grit or Bitterness",
      aeropress: true,
      frenchPress: false,
    },
    {
      feature: "Travel Friendly",
      aeropress: true,
      frenchPress: false,
    },
    {
      feature: "100s of recipes",
      aeropress: true,
      frenchPress: false,
    },
    {
      feature: "Ready in 1 minute",
      aeropress: true,
      frenchPress: false,
    },
    {
      feature: "Cleans in seconds",
      aeropress: true,
      frenchPress: false,
    },
    {
      feature: "All Grind sizes",
      aeropress: true,
      frenchPress: false,
    },
    {
      feature: "Shatterproof",
      aeropress: true,
      frenchPress: false,
    },
    {
      feature: "Metal Filter",
      aeropress: true,
      frenchPress: true,
    },
    {
      feature: "Paper Filter",
      aeropress: true,
      frenchPress: false,
    },

  ];
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleItems = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <section className='section home_aeropress_tabs'>
      <div className="container">
        <div className="section__header">
          <h2 className="heading">{title}</h2>
        </div>
        <div className="home_aeropress_tabs_ul">
          <ul className="tabs">
            {filters.map((filter: any, key: number) => (
              <li
                key={key}
                className={activeTab === key ? 'active' : ''}
                rel={`tab${key + 1}`}
                onClick={() => setActiveTab(key)}
              >
                {/* Example SVG — you can customize per filter */}
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
                <span>{filter}</span>
              </li>
            ))}
          </ul>
        </div>
        <div id="tab1" className="tab_content">
          <div className="tab_grid_content">
            <div className="stackup_block stackup_block1">
              <ul className="stackup_images">
                <li>
                  <span>
                    <img src="Aeropress_PNG_190x.png" alt="Aeropress" />
                  </span>
                  <span className="stackup_title">Aeropress</span>
                </li>
                <li>
                  <span className="vd_image">
                    <img src="VS.png" alt="VS" />
                  </span>
                </li>
                <li>
                  <span>
                    <img src="French_Press.png" alt="French Press" />
                  </span>
                  <span className="stackup_title">French Press</span>
                </li>
              </ul>

              {comparisonData.map((item, index) => (
                <ul 
                key={index}
                style={
                 { display: index < 6 || isExpanded ? 'flex' : 'none',}
                }
                >
                  <li>
                    <span>{item.aeropress ? <CheckIcon /> : <CrossIcon />}</span>
                  </li>
                  <li>
                    <span>{item.feature}</span>
                  </li>
                  <li>
                    <span>{item.frenchPress ? <CheckIcon /> : <CrossIcon />}</span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <button   onClick={toggleItems} className="stackup_btn stackup_btn1">
            <span id="loadMore"> {isExpanded ? 'Show Less' : 'Show More'} </span>
            {isExpanded ? <SlArrowUp />: <SlArrowDown /> }
           
          </button>
        </div>
      </div>
    </section>
  )
}

export default HomeHowDoTabsSection


const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
    <path
      d="M29.3332 16.0001C29.3332 8.63449 23.3475 2.66675 15.9998 2.66675C8.65217 2.66675 2.6665 8.63449 2.6665 16.0001C2.6665 23.3657 8.63425 29.3334 15.9998 29.3334C23.3654 29.3334 29.3332 23.3657 29.3332 16.0001Z"
      fill="#006C37"
      stroke="#006C37"
      strokeWidth="1.6"
      strokeMiterlimit={10}
    />
    <path
      d="M7.81006 16.5375L12.8997 21.6271L24.1721 10.3547"
      stroke="white"
      strokeWidth="2.5"
      strokeLinejoin="bevel"
    />
  </svg>
);

const CrossIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
    <path
      d="M29.3332 16.0001C29.3332 8.63449 23.3475 2.66675 15.9998 2.66675C8.65217 2.66675 2.6665 8.63449 2.6665 16.0001C2.6665 23.3657 8.63425 29.3334 15.9998 29.3334C23.3654 29.3334 29.3332 23.3657 29.3332 16.0001Z"
      fill="#A30A0A"
      stroke="#A30A0A"
      strokeWidth="1.6"
      strokeMiterlimit={10}
    />
    <path d="M10 22L22 10" stroke="white" strokeWidth="2.5" />
    <path d="M22 22L10 10" stroke="white" strokeWidth="2.5" />
  </svg>
);