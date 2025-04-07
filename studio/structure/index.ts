import {DefaultDocumentNodeResolver, ListItemBuilder, StructureResolver} from 'sanity/structure'
import headerStructure from './headerStructure'
import footerStucture from './footerStucture'
import homeStructure from './homeStructure'
const hiddenDocTypes = (listItem: ListItemBuilder) => {
    const id = listItem.getId()
  
    if (!id) {
      return false
    }
  
    return ![
      "home",
      'header',
      'footer',
    ].includes(id)
  }
  export const defaultDocumentNode: DefaultDocumentNodeResolver = (S) => {
    return S.document().views([S.view.form()])
  }
  export const structure: StructureResolver = (S, context) =>
    S.list()
      .title('Content')
      .items([
        homeStructure(S,context),
        S.divider(),
        headerStructure(S, context),
        S.divider(),
        footerStucture(S, context),
        S.divider(),
        ...S.documentTypeListItems().filter(hiddenDocTypes),
      ])
  