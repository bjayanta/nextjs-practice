import Footer from '../components/layout/Footer';
import styles from '../styles/About.module.scss'
import Head from 'next/head';

function About() {
    return (<>
        <Head>
            <title>About | Next JS</title>
            <meta name='description' content='This is a test from about page.' />
        </Head>

        <div className='content'>
            <div>
                <h2>About page</h2>
                <p className={styles.highlight}>Hello from about page.</p>
            </div>
        </div>
    </>);
    
}

export default About;

About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    );
    
}