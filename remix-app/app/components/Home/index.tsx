
import HeroBanner from './HeroBanner';

import ProductSection from './product-section';
import HomeHowDoTabsSection from './home-how-do-tabs-section';
import HowToCleanSection from './how-to-clean-section';
import HomeTechnologySection from './home-technology-section';
import HomeCompanyRew from './home-company-rew';
import HomeReviewsImagesSection from './HomeReviewsImagesSection';
import HomeWorldwideReviewsSection from './home-worldwide-reviews-section';
import BlogRecipe from './BlogRecipe';



const Home = ({HeroBannerData ,productData,HomeHowDoTabsData ,threeInOneTechData ,homeCompanyRewData,homeReviewsImagesData,testimonialsData,recipesData}:any) => {
  const {title, filters, stepsTitle, steps} = HomeHowDoTabsData?.data.howDoWeStackUp
  return (
    <div>
      <HeroBanner HeroBannerData ={HeroBannerData} />
      <ProductSection productData = {productData}/>
      <HomeHowDoTabsSection title ={title} filters ={filters}  />
      <HowToCleanSection stepsTitle ={stepsTitle} steps={steps}/>
      <HomeTechnologySection TechnologyData = {threeInOneTechData}/>
      <HomeCompanyRew homeCompanyRewData = {homeCompanyRewData} />
      <HomeReviewsImagesSection homeReviewsImagesData ={homeReviewsImagesData}/>
      <HomeWorldwideReviewsSection testimonialsData ={testimonialsData}/>
      <BlogRecipe recipesData = {recipesData}/>
    </div>
  );
};

export default Home;
