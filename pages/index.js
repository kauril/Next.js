import React from 'react'
import Prismic from 'prismic-javascript'
import { apiEndpoint, accessToken } from 'prismic-configuration'
import { Header, HomeBanner, SliceZone } from 'components'
import Head from 'next/head'
import defaultSEO from '../defaultSEO';
import DefaultLayout from 'layouts'


export default class extends React.Component {
  // Fetch relevant data from Prismic before rendering
  static async getInitialProps(context) {

    const req = context.req;

    /*   if(!process.browser)
        console.log("SERVER SIDE: ", context);
      else
        console.log("CLIENT SIDE: ", context.lang);
   */

    let lang = context.lang
    


    const home = await this.getHomePage(req, lang.locale)
    // Extra call to render the edit button, in case we've been routed client-side
    if (process.browser) window.prismic.setupEditButton()
    return {
      doc: home.document,
      menu: home.menu
    }
  }

  static async getHomePage(req, lang) {
    try {
      // Initializes the API, including the preview information and access token if there's any
      const API = await Prismic.getApi(apiEndpoint, { req, accessToken })
      // Queries both the homepage and navigation menu documents
      const document = await API.getSingle('homepage', { lang: lang })
      const menu = await API.getSingle('menu', { lang: lang })
      return { document, menu }
    } catch (error) {
      console.error(error)
      return error
    }
  }

  render() {

    console.log('pageProps indexis', this.props)
    let title = this.props.doc.data.meta_title ?
      this.props.doc.data.meta_title :
      defaultSEO.title

    let description = this.props.doc.data.meta_description ?
      this.props.doc.data.meta_description :
      defaultSEO.description

    // With the Prismic data in this.props we can render the components for the Homepage
    // passing to each component the required object
    return (
      <DefaultLayout>
        <Head>
          <title>{title}</title>
          <meta name='description' content={description} />
          <meta property="og:url" content={defaultSEO.openGraph.url} />
          <meta property="og:title" content={this.props.doc.data.socialmedia_title ?
            this.props.doc.data.socialmedia_title :
            defaultSEO.openGraph.title} />
          <meta property="og:description" content={this.props.doc.data.socialmedia_description ?
            this.props.doc.data.socialmedia_description :
            defaultSEO.openGraph.description} />
          <meta property="og:image" content={this.props.doc.data.socialmedia_image.url ?
            this.props.doc.data.socialmedia_image.url :
            defaultSEO.openGraph.image} />
            
        </Head>
        <div className='homepage' data-wio-id={this.props.doc.id}>
          <Header menu={this.props.menu} page={'etusivu'} lang={this.props.doc.lang} />
          <HomeBanner banner={this.props.doc.data.homepage_banner[0]} />
          <SliceZone sliceZone={this.props.doc.data.page_content} />
        </div>
      </DefaultLayout>
    )
  }
}
