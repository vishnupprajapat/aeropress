import {useLoaderData, type MetaFunction} from '@remix-run/react'
import {useQuery} from '@sanity/react-loader'
import Card from '~/components/Card'
import Home from '~/components/Home'
import Welcome from '~/components/Welcome'
import {loadQuery} from '~/sanity/loader.server'
import {HERO_BANNER_QUERY, HOME_COMPANY_REW_QUERY, HOME_REVIEWS_IMAGES_SECTION, HOW_DO_WE_STACK_UP_QUERY, POSTS_QUERY, PRODUCT_SECTION_QUERY, RECIPES_QUERY, TESTIMONIALS_QUERY, THREE_IN_ONE_TECH_QUERY} from '~/sanity/queries'
import {HeroSectionType, Post} from '~/sanity/types'

export const meta: MetaFunction = () => {
  return [{title: 'New Remix App'}]
}

export const loader = async () => {
  const initial = await loadQuery<Post[]>(POSTS_QUERY)
  const HeroBanner = await loadQuery<HeroSectionType[]>(HERO_BANNER_QUERY)
  const product = await loadQuery<HeroSectionType[]>(PRODUCT_SECTION_QUERY)
  const HomeHowDoTabsSection = await loadQuery<HeroSectionType[]>( HOW_DO_WE_STACK_UP_QUERY)
  const threeInOneTech = await loadQuery<HeroSectionType[]>(THREE_IN_ONE_TECH_QUERY)
  const homeCompanyRew = await loadQuery<HeroSectionType[]>(HOME_COMPANY_REW_QUERY)
  const homeReviewsImagesSection = await loadQuery<HeroSectionType[]>(HOME_REVIEWS_IMAGES_SECTION)
  const testimonials = await loadQuery<HeroSectionType[]>(TESTIMONIALS_QUERY)
  const recipes = await loadQuery<HeroSectionType[]>(RECIPES_QUERY)
  return {initial,HeroBanner,product,HomeHowDoTabsSection,threeInOneTech,homeCompanyRew,homeReviewsImagesSection,testimonials,recipes, query: POSTS_QUERY, params: {}}
}

export default function Index() {
  const {initial,HeroBanner, query,product,HomeHowDoTabsSection,threeInOneTech,homeCompanyRew,homeReviewsImagesSection,testimonials,recipes, params} = useLoaderData<typeof loader>()
  const {data, loading, error, encodeDataAttribute} = useQuery<typeof initial.data>(query, params, {
    // @ts-expect-error -- TODO fix the typing here
    initial,
  })
  if (error) {
    throw error
  } else if (loading && !data) {
    return <div>Loading...</div>
  }

  return (
    <section>
      {data?.length ? (
        data.map((post, i) => (
          <Card key={post._id} post={post} encodeDataAttribute={encodeDataAttribute.scope([i])} />
        ))
      ) : (
        <Home
          HeroBannerData ={HeroBanner}
          productData={product}
          HomeHowDoTabsData={HomeHowDoTabsSection}
          threeInOneTechData={threeInOneTech}
          homeCompanyRewData={homeCompanyRew}
          homeReviewsImagesData={homeReviewsImagesSection}
          testimonialsData={testimonials} 
          recipesData={recipes}
          />
      )}
    </section>
  )
}
