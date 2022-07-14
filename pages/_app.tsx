import {NextPage} from 'Next';
import { AppProps } from 'next/app';
import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
  
//   return <Component {...pageProps} />
// }

type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

function MyApp({Component, pageProps}: AppPropsWithLayout){

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout ( < Component{...pageProps} /> )
}

export default MyApp
