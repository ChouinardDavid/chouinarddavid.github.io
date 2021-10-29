import Head from 'next/head';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import createMyMuiTheme from '../styles/createMyMuiTheme';
import '../styles/globals.scss';

function MyApp(props) {
    const { Component, pageProps } = props;

    const myMuiTheme = createMyMuiTheme();

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    const title = 'David Chouinard-Lavoie';
    const description = 'Ma page web personnelle';
    const image = '/ogImage.png';
    const url = 'https://chouinarddavid.github.io/';

    return (
        <>
            <Head>
                <title>David Chouinard-Lavoie</title>
                <link rel='icon' href='/faviconCode.ico' />
                <meta
                    name='viewport'
                    content='minimum-scale=1, initial-scale=1, width=device-width'
                />

                {/* <!-- Primary Meta Tags --> */}
                <title>David Chouinard-Lavoie</title>
                <meta name='title' content={title} />
                <meta name='description' content={description} />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property='og:type' content='website' />
                <meta property='og:url' content={url} />
                <meta property='og:title' content={title} />
                <meta property='og:description' content={description} />
                <meta property='og:image' content={image} />

                {/* <!-- Twitter --> */}
                <meta property='twitter:card' content='summary_large_image' />
                <meta property='twitter:url' content={url} />
                <meta property='twitter:title' content={title} />
                <meta property='twitter:description' content={description} />
                <meta property='twitter:image' content={image} />
            </Head>

            <MuiThemeProvider theme={myMuiTheme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
            </MuiThemeProvider>
        </>
    );
}

export default MyApp;
