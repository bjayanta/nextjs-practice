import Head from "next/head";
import 'styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/layout.css';
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

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
