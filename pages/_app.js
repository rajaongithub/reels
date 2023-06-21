import '@/styles/globals.css'
import './signup.css'
import './login.css'
import '../Components/Feed.css'
import '../Components/Profile.css'
// import 'pure-react-carousel/dist/react-carousel.es.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import AuthWrapper from '@/Context/auth';

export default function App({ Component, pageProps }) {
  return(
    <AuthWrapper>
      <Component {...pageProps} />
    </AuthWrapper>
  )
}
