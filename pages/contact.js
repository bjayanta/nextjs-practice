import styles from '../styles/Contact.module.scss'
import Head from 'next/head';

function Contact() {
    return <>
        <Head>
            <title>Test contact</title>
            <meta name='description' content='Free tutorial on web development' />
        </Head>

        <div className='content'>
            <div>
                <h2>Contact page</h2>
                <button className="btn btn-primary">Primary</button>
                <p className={styles.highlight}>Hello from contact page.</p>
            </div>
        </div>
    </>
}

export default Contact;
