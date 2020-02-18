import React from 'react'
import { default as NextLink } from 'next/link'
import { linkResolver, hrefResolver } from 'prismic-configuration'

const FullWidthImage = ({ slice }) => {
  if (slice.primary.image_link.url) {
    return (
      <section className='full-width-image content-section'>
        <NextLink
            as={slice.primary.image_link.url}
            href={slice.primary.image_link.url}
            passHref
            prefetch
          >
        <a><img src={slice.primary.image.url} alt={slice.primary.image.alt} /></a>
        </NextLink>
        <style jsx global>{`
          .full-width-image{
            margin-top: 2em;
          }
        `}</style>
      </section>
    )
  } else {
    return (
      <section className='full-width-image content-section'>
        <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
        <style jsx global>{`
          .full-width-image{
            margin-top: 2em;
          }
        `}</style>
      </section>
    )
  }
  
}

export default FullWidthImage
