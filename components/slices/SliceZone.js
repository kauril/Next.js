import React from 'react'
import {
  TextSection,
  Quote,
  FullWidthImage,
  ImageGallery,
  ImageHighlight
} from './'

import Slider from './Slider';




const SliceZone = ({ sliceZone }) => {
  return (
    <div className='container'>
      {sliceZone.map((slice, index) => {
        console.log(slice)
        switch (slice.slice_type) {
          case ('text_section'):
            return <TextSection slice={slice} key={'slice-' + index} />
          case ('quote'):
            return <Quote slice={slice} key={'slice-' + index} />
          case ('full_width_image'):
            return <FullWidthImage slice={slice} key={'slice-' + index} />
          case ('image_gallery'):
            return <ImageGallery slice={slice} key={'slice-' + index} />
          case ('slider'):
            const images = slice.items.map((item) => {
              return item.gallery_image.url
            })
            console.log(images)
            return <Slider slice={images} key={'slice-' + index} />
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
