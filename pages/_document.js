


// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx) {
     
        const initialProps = await Document.getInitialProps(ctx);

        const isProduction = process.env.NODE_ENV === 'production';

        let lang = (ctx.lang.locale) ? ctx.lang.locale : "fi";
        initialProps.lang = lang;
        return { ...initialProps, isProduction };
    }

    setGoogleTags() {
        return {
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GTAG_ID}');
          `
        };
    }



    render() {
        const { isProduction } = this.props;
        return (
            <Html lang={this.props.lang}>
                <Head>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenLite.min.js" />

                    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/plugins/CSSPlugin.min.js" />
                    {
                        isProduction
                            ?
                            <>
                                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-150124399-1"></script>
                                <script dangerouslySetInnerHTML={this.setGoogleTags()} />
                            </>
                            :
                            null
                    }
                    <meta name="theme-color" content="#5ae4a7"/>

                    

                    
                </Head>
                <body>
                    {
                        isProduction
                            ?
                            <noscript>
                                <iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTAG_ID}`} height={"0"} width={"0"} style={{ display: 'none', visibility: 'hidden' }} />
                            </noscript>
                            :
                            null
                    }
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;