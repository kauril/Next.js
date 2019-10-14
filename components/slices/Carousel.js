import React from 'react'
import { default as NextLink } from 'next/link'
import { linkResolver, hrefResolver } from 'prismic-configuration'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    const images = props.slice.items.map((item) => {
      return { url: item.carousel_image.url, alt: item.carousel_image.alt }
    })
    this.state = {
      index: 0,
      images: images,
      link: props.slice.primary.carousel_link
    };
    this.carousel = this.carousel.bind(this);
  }

  carousel() {
    let i;
    let x = document.getElementsByClassName("carousel-image");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    this.setState((state) => {
      return { index: state.index + 1, windowHeight: window.innerHeight };
    });
    if (this.state.index > x.length) {
      this.setState((state) => {
        return { index: state.index = 1 };
      });
    }
    x[this.state.index - 1].style.display = "block";
  }

  componentDidMount() {
    this.initialCall = setTimeout(() => this.carousel(),
      0);
    this.timerID = setInterval(
      () => this.carousel(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <>
        <NextLink
          as={linkResolver(this.state.link)}
          href={hrefResolver(this.state.link)}
          passHref
          prefetch
        >
          <a><div className="carousel">
            <CarouselImage images={this.state.images} />
            <style jsx global>{`

              /* position:relative ja z-index:-1 are for homepage. 
              Otherwise when menu is toggled above 506px width carousel 
              will cover opened menu */

              .carousel {
                padding-top: 1em;
                height: 500px;
                width: 100%;
                margin: auto;
                position: relative;
                z-index: -1;
              }
              
              .carousel-image {
                cursor: pointer;
                margin: auto;
                max-width: 100%;
                max-height: 100%;
              }

              .animate-fading{
                animation:fading 5s infinite
              }
              
              @keyframes fading{
                0%{
                  opacity:0
                }
                25%{
                  opacity:1
                }
                75%{
                  opacity:1
                }
                100%{
                  opacity:0
                }
              }
            `}</style>
          </div></a>
        </NextLink>
      </>
    );
  }
}

const CarouselImage = (images) => {
  const imgElements = images.images.map((image, index) => {
    const imgStyle = {
      display: 'none'
    }
    return (
      <img key={index} src={image.url} alt={image.alt} className="carousel-image animate-fading" style={imgStyle} />
    );
  })
  return imgElements
}

export default Carousel
