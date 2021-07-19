import '../styles/globals.css';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import createMyMuiTheme from '../styles/createMyMuiTheme';



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

    return (
        <>
            <Head>
                <title>My Web Space</title>
                <link rel='icon' href='/favicon.ico' />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

                {/* <!-- Primary Meta Tags --> */}
                <title>David Chouinard-Lavoie</title>
                <meta name="title" content="David Chouinard-Lavoie" />
                <meta name="description" content="Une description de mon site" />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://chouinarddavid.github.io/" />
                <meta property="og:title" content="David Chouinard" />
                <meta property="og:description" content="Consulter ma page web pour plus de détails sur mon parcourt professionnel" />
                <meta property="og:image" content='/photoPerso.png' />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://chouinarddavid.github.io/" />
                <meta property="twitter:title" content="David Chouinard" />
                <meta property="twitter:description" content="Consulter ma page web pour plus de détails sur mon parcourt professionnel" />
                <meta property="twitter:image" content='/photoPerso.png' />

            </Head>
            {/* <ContextWrapper> */}
            {/* <ThemeProvider> */}

            <MuiThemeProvider theme={myMuiTheme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
            </MuiThemeProvider>

            {/* </ThemeProvider> */}
            {/* </ContextWrapper> */}
        </>
    );
}


export default MyApp;
