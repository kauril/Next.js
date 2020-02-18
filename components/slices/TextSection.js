import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'prismic-configuration'
import htmlSerializer from 'utils/htmlSerializer'

const TextSection = ({ slice }) => {
  const sectionClass = slice.slice_label ? 'text-section-' + slice.slice_label : 'text-section-1col'
  let textalign = 'inherit'
  let color = 'inherit';
 

  if (slice.primary.rich_text[0].label === 'center-align') {
    textalign = 'center'
  }

  if (slice.primary.color) {
    color = slice.primary.color
  }

  return (
    <Fragment>
      <section className={`content-section ${sectionClass} ${'textalign' + textalign} ${'color' + color.replace('#', '')} `}>
        {RichText.render(slice.primary.rich_text, linkResolver, htmlSerializer)}
      </section>
      <style jsx global>{`

          .text-section-1col h1 {
            margin-top: 1em;
          }

          .${'textalign' + textalign} {
            text-align: ${textalign};
          }

          .${'color' + color.replace('#', '')}{
            color: ${color} 
          }

          .${'textalign' + textalign} h1 {
            text-align: ${textalign};
          }

          .${'color' + color.replace('#', '')} h1 {
            color: ${color} 
          }

          .text-section-2col {
            -webkit-column-count: 2; /* Chrome, Safari, Opera */
            -moz-column-count: 2; /* Firefox */
            column-count: 2;
            -webkit-column-gap: 40px; /* Chrome, Safari, Opera */
            -moz-column-gap: 40px; /* Firefox */
            column-gap: 40px;
          }

          .text-section-1col img,
          .text-section-2col img,
          .gallery img {
            margin-bottom: 1rem;
          }

          .text-section-1col p:last-child,
          .text-section-2col p:last-child {
            margin-bottom: 0;
          }

          .content-section.text-section-2col {
            margin-bottom: 0;
          }
          
          @media (max-width: 767px) {

            .text-section-1col h1 {
              margin-top: 0em;
            }

            .text-section-2col {
              -webkit-column-count: 1; /* Chrome, Safari, Opera */
              -moz-column-count: 1; /* Firefox */
              column-count: 1;
              -webkit-column-gap: 40px; /* Chrome, Safari, Opera */
              -moz-column-gap: 40px; /* Firefox */
              column-gap: 40px;
            }
          }
          
      `}</style>
    </Fragment>
  )

}

export default TextSection
