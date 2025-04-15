import { Suspense, lazy } from 'react';
import { useInView } from 'react-intersection-observer';

// 👇 Lazy imports for code-splitting
const HeroBanner = lazy(() => import('./HeroBanner'));
const ProductSection = lazy(() => import('./product-section'));
const HomeHowDoTabsSection = lazy(() => import('./home-how-do-tabs-section'));
const HowToCleanSection = lazy(() => import('./how-to-clean-section'));
const HomeTechnologySection = lazy(() => import('./home-technology-section'));
const HomeCompanyRew = lazy(() => import('./home-company-rew'));
const HomeReviewsImagesSection = lazy(() => import('./HomeReviewsImagesSection'));
const HomeWorldwideReviewsSection = lazy(() => import('./home-worldwide-reviews-section'));
const BlogRecipe = lazy(() => import('./BlogRecipe'));

const Home = ({
  HeroBannerData,
  productData,
  HomeHowDoTabsData,
  threeInOneTechData,
  homeCompanyRewData,
  homeReviewsImagesData,
  testimonialsData,
  recipesData,
}: any) => {
  const { title, filters, stepsTitle, steps } = HomeHowDoTabsData?.data.howDoWeStackUp;

  // 👇 Intersection Observers for below-the-fold lazy mount
  const { ref: cleanRef, inView: cleanVisible } = useInView({ triggerOnce: true });
  const { ref: techRef, inView: techVisible } = useInView({ triggerOnce: true });
  const { ref: companyRef, inView: companyVisible } = useInView({ triggerOnce: true });
  const { ref: reviewsRef, inView: reviewsVisible } = useInView({ triggerOnce: true });
  const { ref: blogRef, inView: blogVisible } = useInView({ triggerOnce: true });

  return (
    <div>
      <Suspense fallback={<div>Loading hero...</div>}>
        <HeroBanner HeroBannerData={HeroBannerData} />
      </Suspense>

      <Suspense fallback={<div>Loading products...</div>}>
        <ProductSection productData={productData} />
      </Suspense>

      <Suspense fallback={<div>Loading comparison tabs...</div>}>
        <HomeHowDoTabsSection title={title} filters={filters} />
      </Suspense>

      {/* Lazy load below the fold */}
      <div ref={cleanRef}>
        {cleanVisible && (
          <Suspense fallback={<div>Loading cleaning steps...</div>}>
            <HowToCleanSection stepsTitle={stepsTitle} steps={steps} />
          </Suspense>
        )}
      </div>

      <div ref={techRef}>
        {techVisible && (
          <Suspense fallback={<div>Loading technology section...</div>}>
            <HomeTechnologySection TechnologyData={threeInOneTechData} />
          </Suspense>
        )}
      </div>

      <div ref={companyRef}>
        {companyVisible && (
          <Suspense fallback={<div>Loading company review...</div>}>
            <HomeCompanyRew homeCompanyRewData={homeCompanyRewData} />
          </Suspense>
        )}
      </div>

      <div ref={reviewsRef}>
        {reviewsVisible && (
          <>
            <Suspense fallback={<div>Loading review images...</div>}>
              <HomeReviewsImagesSection homeReviewsImagesData={homeReviewsImagesData} />
            </Suspense>
            <Suspense fallback={<div>Loading worldwide reviews...</div>}>
              <HomeWorldwideReviewsSection testimonialsData={testimonialsData} />
            </Suspense>
          </>
        )}
      </div>

      <div ref={blogRef}>
        {blogVisible && (
          <Suspense fallback={<div>Loading blog recipes...</div>}>
            <BlogRecipe recipesData={recipesData} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Home;
