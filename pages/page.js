import React from 'react'
import Prismic from 'prismic-javascript'
import { apiEndpoint, accessToken } from 'prismic-configuration'
import { Header, SliceZone } from 'components'
import DefaultLayout from 'layouts'
import Error from './_error'
import Head from 'next/head'
import defaultSEO from '../defaultSEO';

export default class Page extends React.Component {

  // Fetch relevant data from Prismic before rendering
  static async getInitialProps(context) {
  
    const scrollPos = context.query.scrollPos ? context.query.scrollPos : 0
    const { uid } = context.query
    let lang = context.lang
  
  
    const req = context.req
    const page = await this.getPage(uid, req, lang.locale)
    // Extra call to render the edit button, in case we've been routed client-side
    if (process.browser) window.prismic.setupEditButton()
    return {
      doc: page.document,
      menu: page.menu,
      uid: uid,
      scrollPos: scrollPos
    }
  }

  static async getPage(uid, req, lang) {
    try {
     
      // Initializes the API, including the preview information and access token if there's any
      const API = await Prismic.getApi(apiEndpoint, { req, accessToken })
      // Queries both the specific page and navigation menu documents
      //const document = await API.getByUID('page', uid)
      const document = await API.getByUID('page', uid, {lang: lang})

      const menu = await API.getSingle('menu', {lang: lang})

      return { document, menu }
    } catch (error) {
      console.error(error)
      return error
    }
  }

 

  componentDidMount() {
  
    window.scrollTo(0, this.props.scrollPos); 
    // Cleans the url when in works page.
    // Scrollrestoration is only on works-page, when modal is opened and 
    // backbutton is pressed

    if (this.props.uid === 'works' || this.props.uid === 'portraits') {
      const url = this.props.lang.slug === 'fi' ? `/${this.props.uid}` : `/en/${this.props.uid}`
      const state = window.history.state
      window.history.pushState(state, '', url);
    } 
  }

  render() {
    
    // If the query returns null, then we don't attempt to render the page
    if (!this.props.doc) {

      return (
        // Call the standard error page if the document was not found
        // Essential for dealing with previews of documents that have not been published
        <Error statusCode='404' />
      )
    } else {
      
      let title = this.props.doc.data.meta_title ?
        this.props.doc.data.meta_title :
        defaultSEO.title

      let description = this.props.doc.data.meta_description ?
        this.props.doc.data.meta_description :
        defaultSEO.description

      return (
        <DefaultLayout>
          <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta property="og:url" content={defaultSEO.openGraph.url + this.props.uid} />
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
          <div className='page' data-wio-id={this.props.doc.id}>
            <Header menu={this.props.menu} page={this.props.uid} lang={this.props.doc.lang} />
            <SliceZone sliceZone={this.props.doc.data.page_content} uid={this.props.uid} lang={this.props.doc.lang}/>
          </div>
          <style jsx global>{`
          body {
            background-color: white;
          }
        `}</style>
        </DefaultLayout>
      )
    }
  }
}
