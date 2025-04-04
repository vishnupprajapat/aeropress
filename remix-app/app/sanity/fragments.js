 import pkg from 'groqd';
 const { q } = pkg;
import {LINK_REFERENCE_FRAGMENT, LINKS_LIST_SELECTION} from './links';
/*
|--------------------------------------------------------------------------
| Image Fragment
|--------------------------------------------------------------------------
*/
export const IMAGE_FRAGMENT = {
    _ref: q('asset').grabOne('_ref', q.string()),
    _type: q.literal('image'),
    altText: q('asset').deref().grabOne('altText', q.string()).nullable(),
    asset: q.object({
      _ref: q.string(),
      _type: q.literal('reference'),
    }),
    crop: q
      .object({
        bottom: q.number(),
        left: q.number(),
        right: q.number(),
        top: q.number(),
      })
      .nullable(),
    hotspot: q.object({
      height: q.number(),
      width: q.number(),
      x: q.number(),
      y: q.number(),
    }),
  };

  /*
|--------------------------------------------------------------------------
| Menu Fragment
|--------------------------------------------------------------------------
*/
export const MENU_FRAGMENT = q('menu[]', {isArray: true})
.select(LINKS_LIST_SELECTION)
.nullable();