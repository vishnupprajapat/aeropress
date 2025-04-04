import {DefaultDocumentNodeResolver, ListItemBuilder, StructureResolver} from 'sanity/structure'
import headerStructure from './headerStructure'
const hiddenDocTypes = (listItem: ListItemBuilder) => {
    const id = listItem.getId()
  
    if (!id) {
      return false
    }
  
    return ![
      'header',
    ].includes(id)
  }
  export const defaultDocumentNode: DefaultDocumentNodeResolver = (S) => {
    return S.document().views([S.view.form()])
  }
  export const structure: StructureResolver = (S, context) =>
    S.list()
      .title('Content')
      .items([
        headerStructure(S, context),
        S.divider(),
        ...S.documentTypeListItems().filter(hiddenDocTypes),
      ])
  