import { LinksFunction } from '@remix-run/node';
import HeroBanner from './HeroBanner';
import homeStyles from '~/styles/home.css'; // Use absolute import with `~`
import ProductSection from './product-section';
import HomeHowDoTabsSection from './home-how-do-tabs-section';
import HowToCleanSection from './how-to-clean-section';
import HomeTechnologySection from './home-technology-section';
import HomeCompanyRew from './home-company-rew';
import HomeReviewsImagesSection from './HomeReviewsImagesSection';
import HomeWorldwideReviewsSection from './home-worldwide-reviews-section';
import BlogRecipe from './BlogRecipe';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: homeStyles }, // Ensure styles are correctly passed
  ];
};

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <ProductSection/>
      <HomeHowDoTabsSection/>
      <HowToCleanSection/>
      <HomeTechnologySection/>
      <HomeCompanyRew/>
      <HomeReviewsImagesSection/>
      <HomeWorldwideReviewsSection/>
      <BlogRecipe/>
    </div>
  );
};

export default Home;
