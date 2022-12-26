import Head from 'next/head';
import LandingPage from '../src/components/landing-page';

export default function Index() {
    return (
        <div>
            <Head>
                <title>Toan Nguyen Ba (Michael)</title>
                <meta name="description" content="Toan Nguyen Ba (Michael)" />
                <link rel="shortcut icon" href="/images/favicon-32x32.png" />
            </Head>
            <LandingPage />
        </div>
    );
}
