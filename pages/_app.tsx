import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { AppStateContextStore } from '../src/context/AppStateContext'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppStateContextStore>
    <Component {...pageProps} />
    </AppStateContextStore>
  );
}

export default MyApp;
