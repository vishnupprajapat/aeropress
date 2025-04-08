import {type LinksFunction, json} from '@remix-run/node'
import styles from './styles/index.css'
import fontStyles from './styles/fonts/font.css';
import homeStyle from './styles/home.css';

import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import {Suspense, lazy} from 'react'
import Header from './components/header'
import Footer from './components/footer';
import { loadQuery } from './sanity/loader.server';
import { FOOTER_QUERY, HEADER_QUERY, } from './sanity/queries';
import { Header as HeaderType,  } from './sanity/types';
import { Footer as FooterType } from './sanity/types';
import { useQuery } from '@sanity/react-loader';


export const loader = async () => {
    const header = await loadQuery<HeaderType[]>(HEADER_QUERY)
    const footer = await loadQuery<FooterType[]>(FOOTER_QUERY)
  return json({
    ENV: {
      SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID,
      SANITY_STUDIO_DATASET: process.env.SANITY_STUDIO_DATASET,
      SANITY_STUDIO_URL: process.env.SANITY_STUDIO_URL,
      SANITY_STUDIO_STEGA_ENABLED: process.env.SANITY_STUDIO_STEGA_ENABLED,
    },
    header, query: HEADER_QUERY, params: {},
    footer
  })
}

export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: styles},
  {rel: 'stylesheet', href: fontStyles},
  {rel: 'stylesheet', href: homeStyle},
  ]
}

export default function App() {
  const {ENV,query ,header ,footer ,params} = useLoaderData<typeof loader>()
    const {data, loading, error, encodeDataAttribute} = useQuery<typeof header>(query, params, {
      // @ts-expect-error -- TODO fix the typing here
      header,
    })
    // console.log(header)

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="">
          <Header header = {header}/>
          <main>
            <Outlet />
          </main>
          <Footer footer ={footer} />
        </div>
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
