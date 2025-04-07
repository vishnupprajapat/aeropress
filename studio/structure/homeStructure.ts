import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'


export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Home')
    .id('home')
    .schemaType('home')
    .child(S.editor().title('Home').schemaType('home').documentId('home')),
)
