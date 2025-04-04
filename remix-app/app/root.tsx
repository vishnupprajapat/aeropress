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
import { HEADER_QUERY } from './sanity/queries';
import { Header as HeaderType } from './sanity/types';
import { useQuery } from '@sanity/react-loader';

const LiveVisualEditing = lazy(() => import('~/components/LiveVisualEditing'))

export const loader = async () => {
    const header = await loadQuery<HeaderType[]>(HEADER_QUERY)
  return json({
    ENV: {
      SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID,
      SANITY_STUDIO_DATASET: process.env.SANITY_STUDIO_DATASET,
      SANITY_STUDIO_URL: process.env.SANITY_STUDIO_URL,
      SANITY_STUDIO_STEGA_ENABLED: process.env.SANITY_STUDIO_STEGA_ENABLED,
    },
    header, query: HEADER_QUERY, params: {}
  })
}

export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: styles},
  {rel: 'stylesheet', href: fontStyles},
  {rel: 'stylesheet', href: homeStyle}
  ,
  ]
}

export default function App() {
  const {ENV,query ,header ,params} = useLoaderData<typeof loader>()
    const {data, loading, error, encodeDataAttribute} = useQuery<typeof header.data>(query, params, {
      // @ts-expect-error -- TODO fix the typing here
      header,
    })
    console.log(data)

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
          <Header/>
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
        {ENV.SANITY_STUDIO_STEGA_ENABLED ? (
          <Suspense>
            <LiveVisualEditing />
          </Suspense>
        ) : null}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
