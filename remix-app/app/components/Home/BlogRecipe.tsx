import React, { useState } from 'react'
import { lazy, Suspense } from "react";
import BlogRecipeSlider from './BlogRecipeSlider'
import { Link } from '@remix-run/react';
import { stegaClean } from '@sanity/client/stega';

const BlogRecipe = ({ recipesData }: any) => {
    const { title, filters, recipes } = recipesData?.data?.blogRecipe
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className='blog-recipe-hp'>
            <div className="container">
                <div className="title-recipe">
                    <h2 className="desktop-heading">{title}</h2>
                    <h2 className="mobile-heading">Get Creative with Thousands of Recipes</h2>
                </div>
                <div className="center-recipe-tab">
                    <ul>
                        {filters.map((filter: any, key: number) => {
                            return (
                                <li className={
                                    activeTab === key ? 'active' : ''
                                } data-attr-tag={stegaClean(filter?.label)} key={key} onClick={() => setActiveTab(key)}>
                                    <div className="svg-recipe">
                                        {filter?.icon?.asset?.url ? (
                                            <img
                                                src={filter?.icon?.asset?.url}
                                                width="20px"
                                                height="20px"
                                                alt={stegaClean(filter?.label)}
                                                loading="lazy"
                                            />
                                        ) : (
                                            <svg
                                                width={20}
                                                height={21}
                                                viewBox="0 0 20 21"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="french-press-coffee-beverage-svgrepo-com 1">
                                                    <g id="French-Press">
                                                        <g id="Group-2">
                                                            <g id="Group">
                                                                <path
                                                                    id="Rectangle"
                                                                    fillRule="evenodd"
                                                                    clipRule="evenodd"
                                                                    d="M14.1667 6.49902H5.83333V15.6657C5.83333 16.1259 6.01988 16.5426 6.32148 16.8442C6.62309 17.1458 7.03976 17.3324 7.49999 17.3324H12.5C12.9602 17.3324 13.3769 17.1458 13.6785 16.8442C13.9801 16.5426 14.1667 16.1259 14.1667 15.6657V6.49902Z"
                                                                    stroke="#383738"
                                                                    strokeWidth="1.2"
                                                                />
                                                                <path
                                                                    id="Path"
                                                                    d="M15 8.99902H15.8333C16.2936 8.99902 16.6667 9.37212 16.6667 9.83236V12.3324"
                                                                    stroke="#383738"
                                                                    strokeWidth="1.2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </g>
                                                            <path
                                                                id="Path-15-Copy"
                                                                d="M5.83333 9.19482H14.1667"
                                                                stroke="#383738"
                                                                strokeWidth="1.2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <g id="Group-3">
                                                                <path
                                                                    id="Path-15-Copy-3"
                                                                    d="M3.33333 6.49902H5.83333"
                                                                    stroke="#383738"
                                                                    strokeWidth="1.2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    id="Path-17"
                                                                    d="M10 4.83203V14.832"
                                                                    stroke="#383738"
                                                                    strokeWidth="1.2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    id="Path-15"
                                                                    d="M9.16666 4.41553H10.8333"
                                                                    stroke="#383738"
                                                                    strokeWidth="1.2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </g>
                                                            <path
                                                                id="Path-15-Copy-2"
                                                                d="M8.33333 14.832H11.6667"
                                                                stroke="#383738"
                                                                strokeWidth="1.2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        )}
                                    </div>
                                    <p>{stegaClean(filter?.label)}</p>
                                </li>
                            )
                        })}
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
    )
}

export default BlogRecipe



// const svgMap: Record<string, JSX.Element> = {
//     "Featured": (
//         <svg
//         width={20}
//         height={21}
//         viewBox="0 0 20 21"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//     >
//         <g id="french-press-coffee-beverage-svgrepo-com 1">
//             <g id="French-Press">
//                 <g id="Group-2">
//                     <g id="Group">
//                         <path
//                             id="Rectangle"
//                             fillRule="evenodd"
//                             clipRule="evenodd"
//                             d="M14.1667 6.49902H5.83333V15.6657C5.83333 16.1259 6.01988 16.5426 6.32148 16.8442C6.62309 17.1458 7.03976 17.3324 7.49999 17.3324H12.5C12.9602 17.3324 13.3769 17.1458 13.6785 16.8442C13.9801 16.5426 14.1667 16.1259 14.1667 15.6657V6.49902Z"
//                             stroke="#383738"
//                             strokeWidth="1.2"
//                         />
//                         <path
//                             id="Path"
//                             d="M15 8.99902H15.8333C16.2936 8.99902 16.6667 9.37212 16.6667 9.83236V12.3324"
//                             stroke="#383738"
//                             strokeWidth="1.2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                     </g>
//                     <path
//                         id="Path-15-Copy"
//                         d="M5.83333 9.19482H14.1667"
//                         stroke="#383738"
//                         strokeWidth="1.2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                     <g id="Group-3">
//                         <path
//                             id="Path-15-Copy-3"
//                             d="M3.33333 6.49902H5.83333"
//                             stroke="#383738"
//                             strokeWidth="1.2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                         <path
//                             id="Path-17"
//                             d="M10 4.83203V14.832"
//                             stroke="#383738"
//                             strokeWidth="1.2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                         <path
//                             id="Path-15"
//                             d="M9.16666 4.41553H10.8333"
//                             stroke="#383738"
//                             strokeWidth="1.2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                     </g>
//                     <path
//                         id="Path-15-Copy-2"
//                         d="M8.33333 14.832H11.6667"
//                         stroke="#383738"
//                         strokeWidth="1.2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                 </g>
//             </g>
//         </g>
//     </svg>
//     ),
//     "Hot": (
//         <svg
//         width={20}
//         height={21}
//         viewBox="0 0 20 21"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//     >
//         <g id="french-press-coffee-beverage-svgrepo-com 1">
//             <g id="French-Press">
//                 <g id="Group-2">
//                     <g id="Group">
//                         <path
//                             id="Rectangle"
//                             fillRule="evenodd"
//                             clipRule="evenodd"
//                             d="M14.1667 6.49902H5.83333V15.6657C5.83333 16.1259 6.01988 16.5426 6.32148 16.8442C6.62309 17.1458 7.03976 17.3324 7.49999 17.3324H12.5C12.9602 17.3324 13.3769 17.1458 13.6785 16.8442C13.9801 16.5426 14.1667 16.1259 14.1667 15.6657V6.49902Z"
//                             stroke="#383738"
//                             strokeWidth="1.2"
//                         />
//                         <path
//                             id="Path"
//                             d="M15 8.99902H15.8333C16.2936 8.99902 16.6667 9.37212 16.6667 9.83236V12.3324"
//                             stroke="#383738"
//                             strokeWidth="1.2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                     </g>
//                     <path
//                         id="Path-15-Copy"
//                         d="M5.83333 9.19482H14.1667"
//                         stroke="#383738"
//                         strokeWidth="1.2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                     <g id="Group-3">
//                         <path
//                             id="Path-15-Copy-3"
//                             d="M3.33333 6.49902H5.83333"
//                             stroke="#383738"
//                             strokeWidth="1.2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                         <path
//                             id="Path-17"
//                             d="M10 4.83203V14.832"
//                             stroke="#383738"
//                             strokeWidth="1.2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                         <path
//                             id="Path-15"
//                             d="M9.16666 4.41553H10.8333"
//                             stroke="#383738"
//                             strokeWidth="1.2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                     </g>
//                     <path
//                         id="Path-15-Copy-2"
//                         d="M8.33333 14.832H11.6667"
//                         stroke="#383738"
//                         strokeWidth="1.2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                 </g>
//             </g>
//         </g>
//     </svg>
//     ),
//     "Cold": (
//         <svg
//         width={20}
//         height={21}
//         viewBox="0 0 20 21"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//     >
//         <g id="french-press-coffee-beverage-svgrepo-com 1">
//             <g id="French-Press">
//                 <g id="Group-2">
//                     <g id="Group">
//                         <path
//                             id="Rectangle"
//                             fillRule="evenodd"
//                             clipRule="evenodd"
//                             d="M14.1667 6.49902H5.83333V15.6657C5.83333 16.1259 6.01988 16.5426 6.32148 16.8442C6.62309 17.1458 7.03976 17.3324 7.49999 17.3324H12.5C12.9602 17.3324 13.3769 17.1458 13.6785 16.8442C13.9801 16.5426 14.1667 16.1259 14.1667 15.6657V6.49902Z"
//                             stroke="#383738"
//                             strokeWidth="1.2"
//                         />
//                         <path
//                             id="Path"
//                             d="M15 8.99902H15.8333C16.2936 8.99902 16.6667 9.37212 16.6667 9.83236V12.3324"
//                             stroke="#383738"
//                             strokeWidth="1.2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                     </g>
//                     <path
//                         id="Path-15-Copy"
//                         d="M5.83333 9.19482H14.1667"
//                         stroke="#383738"
//                         strokeWidth="1.2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                     <g id="Group-3">
//                         <path
//                             id="Path-15-Copy-3"
//                             d="M3.33333 6.49902H5.83333"
//                             stroke="#383738"
//                             strokeWidth="1.2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                         <path
//                             id="Path-17"
//                             d="M10 4.83203V14.832"
//                             stroke="#383738"
//                             strokeWidth="1.2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                         <path
//                             id="Path-15"
//                             d="M9.16666 4.41553H10.8333"
//                             stroke="#383738"
//                             strokeWidth="1.2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                     </g>
//                     <path
//                         id="Path-15-Copy-2"
//                         d="M8.33333 14.832H11.6667"
//                         stroke="#383738"
//                         strokeWidth="1.2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                 </g>
//             </g>
//         </g>
//     </svg>
//     ),
//     "Popular": (
//         <svg
//         width={20}
//         height={21}
//         viewBox="0 0 20 21"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//     >
//         <g id="french-press-coffee-beverage-svgrepo-com 1">
//             <g id="French-Press">
//                 <g id="Group-2">
//                     <g id="Group">
//                         <path
//                             id="Rectangle"
//                             fillRule="evenodd"
//                             clipRule="evenodd"
//                             d="M14.1667 6.49902H5.83333V15.6657C5.83333 16.1259 6.01988 16.5426 6.32148 16.8442C6.62309 17.1458 7.03976 17.3324 7.49999 17.3324H12.5C12.9602 17.3324 13.3769 17.1458 13.6785 16.8442C13.9801 16.5426 14.1667 16.1259 14.1667 15.6657V6.49902Z"
//                             stroke="#383738"
//                             strokeWidth="1.2"
//                         />
//                         <path
//                             id="Path"
//                             d="M15 8.99902H15.8333C16.2936 8.99902 16.6667 9.37212 16.6667 9.83236V12.3324"
//                             stroke="#383738"
//                             strokeWidth="1.2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                     </g>
//                     <path
//                         id="Path-15-Copy"
//                         d="M5.83333 9.19482H14.1667"
//                         stroke="#383738"
//                         strokeWidth="1.2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                     <g id="Group-3">
//                         <path
//                             id="Path-15-Copy-3"
//                             d="M3.33333 6.49902H5.83333"
//                             stroke="#383738"
//                             strokeWidth="1.2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                         <path
//                             id="Path-17"
//                             d="M10 4.83203V14.832"
//                             stroke="#383738"
//                             strokeWidth="1.2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                         <path
//                             id="Path-15"
//                             d="M9.16666 4.41553H10.8333"
//                             stroke="#383738"
//                             strokeWidth="1.2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                     </g>
//                     <path
//                         id="Path-15-Copy-2"
//                         d="M8.33333 14.832H11.6667"
//                         stroke="#383738"
//                         strokeWidth="1.2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                 </g>
//             </g>
//         </g>
//     </svg>
//       ),
//      "See All": (
//         <svg
//         width={21}
//         height={22}
//         viewBox="0 0 21 22"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//     >
//         <path
//             d="M17.383 6.11829C17.205 6.11829 17.0258 6.10847 16.8491 6.12417C16.7974 6.12875 16.7136 6.20008 16.7084 6.24849C16.6116 7.09583 16.5232 7.94383 16.4356 8.79182C16.3112 10.001 16.1863 11.2102 16.0659 12.42C15.9429 13.6547 15.827 14.8907 15.704 16.1254C15.6216 16.9551 15.5352 17.7841 15.4436 18.6131C15.403 18.9795 15.2146 19.1562 14.8515 19.1935C14.7821 19.2007 14.7114 19.2013 14.6414 19.2013C11.8854 19.2013 9.12946 19.2013 6.37348 19.2007C6.27206 19.2007 6.16933 19.1948 6.06988 19.1771C5.77347 19.1235 5.59746 18.9619 5.56016 18.6635C5.48492 18.0641 5.42668 17.4622 5.36583 16.8609C5.26965 15.9049 5.17739 14.9483 5.08251 13.9917C4.99876 13.1496 4.91435 12.3075 4.82929 11.4654C4.71937 10.37 4.60879 9.27471 4.49886 8.17873C4.43539 7.54535 4.36734 6.91263 4.31107 6.27859C4.29733 6.12221 4.22798 6.09735 4.08991 6.09997C3.74705 6.10585 3.40288 6.10455 3.06067 6.08884C2.74071 6.07314 2.50712 5.82711 2.49993 5.52548C2.49273 5.2258 2.7152 4.96734 3.02534 4.91696C3.06264 4.91107 3.10124 4.91107 3.13919 4.90911C3.53963 4.89013 3.54356 4.89144 3.67377 4.5054C3.85894 3.95773 4.03692 3.40745 4.21881 2.85848C4.36342 2.42532 4.56168 2.27418 5.02166 2.27352C8.66882 2.27221 12.3153 2.27221 15.9625 2.27549C16.4519 2.27549 16.6194 2.40439 16.7732 2.86372C16.9708 3.45456 17.1723 4.0441 17.3575 4.63822C17.419 4.83583 17.5191 4.92023 17.7259 4.90584C17.8436 4.89799 17.9686 4.91369 18.0825 4.94575C18.3475 5.02034 18.5209 5.28796 18.498 5.55885C18.4757 5.81599 18.2382 6.05613 17.9739 6.08688C17.898 6.09604 17.8221 6.10324 17.7455 6.1052C17.6245 6.10847 17.5041 6.10585 17.383 6.10585C17.383 6.10978 17.383 6.11371 17.383 6.11763V6.11829ZM5.50389 6.13203C5.51174 6.24457 5.51632 6.33944 5.52614 6.43367C5.61643 7.33924 5.70869 8.24481 5.79768 9.15104C5.87358 9.92379 5.94098 10.6978 6.01884 11.4706C6.13989 12.6739 6.26944 13.8765 6.39115 15.0791C6.48275 15.9782 6.57108 16.8779 6.65353 17.7782C6.66858 17.9405 6.73139 17.9915 6.89235 17.9909C9.30482 17.9876 11.7173 17.9889 14.1297 17.9948C14.2717 17.9948 14.3234 17.9398 14.3365 17.8129C14.3758 17.4327 14.419 17.0532 14.4569 16.6737C14.5387 15.8499 14.6166 15.0262 14.6997 14.2024C14.8207 12.9991 14.945 11.7958 15.0661 10.5925C15.1767 9.49652 15.2853 8.40054 15.3919 7.30456C15.4292 6.92048 15.4593 6.53509 15.4947 6.13137H5.50389V6.13203ZM16.1738 4.89079C16.1738 4.84695 16.1817 4.81358 16.1725 4.78544C16.0417 4.38042 15.9128 3.97475 15.7695 3.57365C15.7525 3.52654 15.655 3.48335 15.5941 3.48204C15.174 3.47616 14.754 3.48466 14.3339 3.48401C11.3554 3.48074 8.37765 3.47681 5.3992 3.47027C5.28862 3.47027 5.24086 3.51476 5.20945 3.61225C5.1113 3.92109 5.00596 4.22731 4.90585 4.53549C4.86921 4.64804 4.84238 4.76385 4.8077 4.89013H16.1725L16.1738 4.89079Z"
//             fill="#383738"
//         />
//     </svg>
//       ),
//   };