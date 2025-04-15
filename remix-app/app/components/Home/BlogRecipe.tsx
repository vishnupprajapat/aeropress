import React, { useState, useMemo } from 'react';
import { Suspense, lazy } from 'react';
import { Link } from '@remix-run/react';
import { stegaClean } from '@sanity/client/stega';

const BlogRecipeSlider = lazy(() => import('./BlogRecipeSlider'));

const PlaceholderIcon = () => (
  <svg
    width={20}
    height={21}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M14.1667 6.49902H5.83333V15.6657C5.83333 16.1259 6.01988 16.5426 6.32148 16.8442C6.62309 17.1458 7.03976 17.3324 7.49999 17.3324H12.5C12.9602 17.3324 13.3769 17.1458 13.6785 16.8442C13.9801 16.5426 14.1667 16.1259 14.1667 15.6657V6.49902Z"
        stroke="#383738"
        strokeWidth="1.2"
      />
      <path
        d="M15 8.99902H15.8333C16.2936 8.99902 16.6667 9.37212 16.6667 9.83236V12.3324"
        stroke="#383738"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83333 9.19482H14.1667"
        stroke="#383738"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33333 6.49902H5.83333"
        stroke="#383738"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 4.83203V14.832"
        stroke="#383738"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.16666 4.41553H10.8333"
        stroke="#383738"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33333 14.832H11.6667"
        stroke="#383738"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const BlogRecipe = ({ recipesData }: any) => {
  const { title, filters = [], recipes = [] } = recipesData?.data?.blogRecipe || {};
  const [activeTab, setActiveTab] = useState(0);

  const cleanedFilters = useMemo(() =>
    filters.map((filter: any) => ({
      label: stegaClean(filter?.label),
      iconUrl: filter?.icon?.asset?.url || null,
    }))
  , [filters]);

  return (
    <section className="blog-recipe-hp">
      <div className="container">
        <div className="title-recipe">
          <h2 className="desktop-heading">{title}</h2>
          <h2 className="mobile-heading">Get Creative with Thousands of Recipes</h2>
        </div>

        <div className="center-recipe-tab">
          <ul>
            {cleanedFilters.map((filter:any, index:number) => (
              <li
                key={index}
                className={activeTab === index ? 'active' : ''}
                data-attr-tag={filter.label}
                onClick={() => setActiveTab(index)}
              >
                <div className="svg-recipe">
                  {filter.iconUrl ? (
                    <img
                      src={filter.iconUrl}
                      width="20"
                      height="20"
                      alt={filter.label}
                      loading="lazy"
                    />
                  ) : (
                    <PlaceholderIcon />
                  )}
                </div>
                <p>{filter.label}</p>
              </li>
            ))}
          </ul>
        </div>

        <Suspense fallback={<div>Loading slider...</div>}>
          <BlogRecipeSlider recipes={recipes} />
        </Suspense>

        <div className="all-recipe-link">
          <Link to="/blogs/aeropress-recipes">See All Recipes</Link>
        </div>
      </div>
    </section>
  );
};

export default BlogRecipe;
