import Container from '../components/Container';
import '../styles/reset.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp