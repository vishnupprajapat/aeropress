import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'


export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Footer')
    .id('footer')
    .schemaType('footer')
    .child(S.editor().title('Footer').schemaType('footer').documentId('footer')),
)
