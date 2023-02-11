import '../styles/global.css'
import Header from '../components/header'
import 'tailwindcss/tailwind.css'
import { Auth0Provider } from '@auth0/auth0-react'

export default function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTHO_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: process.env.NEXT_PUBLIC_AUTH0_URL
      }}
    >
      <div className="antialiase text-gray-700">
        <Header />
        <main className="mt-6 mb-20">
          <Component {...pageProps} />
        </main>
      </div>
    </Auth0Provider>
  )
}
