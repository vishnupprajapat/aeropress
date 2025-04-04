import headerNavigation from "./objects/headerNavigation"
import { linkEmailType } from "./objects/link/linkEmailType"
import { linkExternalType } from "./objects/link/linkExternalType"
// import { linkInternalType } from "./objects/link/linkInternalType"
import header from "./singlton/header"

const annotations = [linkEmailType, linkExternalType]
const objects = [
    headerNavigation,
  ]
const singletons = [  header]

export const schemaTypes = [...annotations, ...objects, ...singletons, ]
