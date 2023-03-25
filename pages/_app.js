import '../styles/globals.css'
import { AppProvider } from '../context/context'
import AudioPlayer from '../components/AudioPlayer';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
        <AudioPlayer />
        <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
