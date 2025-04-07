import React, { useState } from 'react'

const HomeHowDoTabsSection = ({filters,title}:any) => {
  const [activeTab, setActiveTab] = useState(0);
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
      </div>
    </section>
  )
}

export default HomeHowDoTabsSection