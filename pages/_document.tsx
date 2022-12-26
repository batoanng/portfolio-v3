import Document, { Html, Head, Main, NextScript } from 'next/document';
import GlobalFonts from '../src/global-font';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <GlobalFonts />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
