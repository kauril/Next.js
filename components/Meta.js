import React, { Fragment } from 'react'
import Head from 'next/head'
import { apiEndpoint } from 'prismic-configuration'
import { reset, globals, medias, modal } from 'styles'

export default () => {
  return (
    <Fragment>
      <Head>
        <meta charSet='utf-8' />
        <link href='https://fonts.googleapis.com/css?family=Lato:400,700,900,400italic,700italic' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
        <link href="https://fonts.googleapis.com/css?family=Courier+Prime&display=swap" rel="stylesheet" />

        <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/static/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
        <link rel="manifest" href="/static/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/static/ms-icon-144x144.png" />
        <script dangerouslySetInnerHTML={{
          __html: `
        window.prismic = { endpoint: "${apiEndpoint}" }
      ` }} />
        <script src='//static.cdn.prismic.io/prismic.min.js' />
      </Head>
      <style jsx global>{reset}</style>
      <style jsx global>{globals}</style>
      <style jsx global>{medias}</style>
      <style jsx global>{modal}</style>
    </Fragment>
  )
}