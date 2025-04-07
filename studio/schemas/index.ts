import Home from "./documents/Home"
import headerNavigation from "./objects/headerNavigation"
import blogRecipe from "./objects/home/blogRecipe"
import heroSection from "./objects/home/heroSection"
import homeCompanyRew from "./objects/home/home-company-rew"
import homeReviewsImagesSection from "./objects/home/homeReviewsImagesSection"
import howDoWeStackUp from "./objects/home/howDoWeStackUp"
import productSection from "./objects/home/productSection"
import technologySection from "./objects/home/technologySection"
import testimonialSection from "./objects/home/testimonialSection"
import { linkEmailType } from "./objects/link/linkEmailType"
import { linkExternalType } from "./objects/link/linkExternalType"
import footer from "./singlton/footer"
// import { linkInternalType } from "./objects/link/linkInternalType"
import header from "./singlton/header"

const annotations = [linkEmailType, linkExternalType]
const objects = [
    headerNavigation,
    heroSection,
    productSection,
    howDoWeStackUp,
    technologySection,
    homeCompanyRew,
    homeReviewsImagesSection,
    testimonialSection,
    blogRecipe,
  ]
  const document = [
    Home
  ]
const singletons = [  header,footer]

export const schemaTypes = [...annotations,...document, ...objects, ...singletons, ]
