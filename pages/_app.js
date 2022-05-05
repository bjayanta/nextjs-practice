import 'styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/layout.css';
import Header from "components/Header";
import Footer from "components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
    
  }
  return <>
    <Head>
      <title>Home page</title>
      <meta name='description' content='Next JS is awesome.' />
    </Head>

    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
