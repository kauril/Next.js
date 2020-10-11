import React from 'react';
import Prismic from 'prismic-javascript';

import App, { Container } from 'next/app';
import { Router } from 'next/router';
import { trackPageView } from '../helpers/index';
import { getLanguage, getDefaultLanguage } from '../config/language'

import Head from 'next/head';

class MyApp extends App {

    static async getInitialProps({ Component, router, ctx }) {

        

        let pageProps = {};

        console.log('ctx.query', ctx.query)
       
        //GRAB CURRENT LANGUAGE FROM req.query ON THE SERVER, HTML.LANG ON CLIENT
        let lang = ((ctx.req) ? ctx.query.lang : document.querySelector("html").lang);
        lang = getLanguage(ctx.query.lang)

        //IF language is not found choose default language (originally defined in next.config.js)
        if (!lang) {
            lang = getDefaultLanguage()
        }

        ctx.lang = lang;


        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        pageProps.lang = lang
        return { pageProps };
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Router.events.on('routeChangeStart', (url) => {
            TweenLite.to(".container", 0, { autoAlpha: 0 });
        });

        Router.events.on('routeChangeComplete', (url) => {
            trackPageView(url);
            TweenLite.to(".container", .4, { autoAlpha: 1, delay: .2 })
        });
    }

    componentWillUnmount() {

    }


    render() {
        const { Component, pageProps } = this.props;
        return (
            <Component {...pageProps} />
        );
    }
}

export default MyApp;