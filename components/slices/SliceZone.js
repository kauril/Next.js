import React from 'react'
import {
  TextSection,
  Quote,
  FullWidthImage,
  ImageGallery,
  ImageHighlight
} from './'

import Carousel from './Carousel';


const SliceZone = ({ sliceZone, uid, lang }) => {
  return (
    <div className='container'>
      {sliceZone.map((slice, index) => {
        switch (slice.slice_type) {
          case ('text_section'):
            return <TextSection slice={slice} uid={uid} key={'slice-' + index}/>
          case ('quote'):
            return <Quote slice={slice} key={'slice-' + index} />
          case ('full_width_image'):
            return <FullWidthImage slice={slice} key={'slice-' + index} />
          case ('image_gallery'):
            return <ImageGallery slice={slice} key={'slice-' + index} lang={lang} uid={uid}/>
          case ('carousel'):
            return <Carousel slice={slice} key={'slice-' + index} />
          case ('image_highlight'):
            return <ImageHighlight slice={slice} key={'slice-' + index} />
          default:
            return null
        }
      })}
    </div>
  )
}

export default SliceZone
