import React, { Fragment } from 'react'

class Slider extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
      currentImageIndex: 0,
      imgUrls: props.slice
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = this.state.imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = this.state.imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.nextSlide(),
      3000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }
	
	render () {
		return (
			<div className="carousel">
				{/* <Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" /> */}
				<ImageSlide url={ this.state.imgUrls[this.state.currentImageIndex] } />
				{/* <Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" /> */}
        <style jsx global>{`
          .carousel {
            height: 500px;
            margin: 0;
            width: 100%;
          }
          
          $theme-blue: #14B6D4;
          
          .image-slide {
            height: 100%;
            width: 100%;
            margin-top: 1em;
            transition: background-image  ease-in 1s;
          }
          
          .slide-arrow {
            color: $theme-blue;
            cursor: pointer;
            font-size: 2rem;
            position: absolute;
            top: 48%;
          }
          
          .slide-arrow.right {
            right: 38rem;
          }
          
          .slide-arrow.left {
            left: 38rem;
          }
        `}</style>
			</div>
		);
	}
}

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph } 
	</div>
);

const ImageSlide = ({ url }) => {
	const styles = {
		backgroundImage: `url(${url})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
	};
	
	return (
		<div className="image-slide" style={styles}></div>
	);
}
/* //https://codepen.io/DZuz14/pen/XxKLVY

//Tsekkaa esim tää vaihtoehto https://codepen.io/letea/pen/RVBmMy

class Slider extends React.Component {
    constructor(props) {
      super(props)
        this.state = {
        images: props.slice,
        currentIndex: 0,
        translateValue: 0
      }
    }
  
    goToNextSlide = () => {

      console.log(this.state.currentIndex)
      console.log(this.state.translateValue)
      console.log(this.slideWidth())
      // Exiting the method early if we are at the end of the images array.
      // We also want to reset currentIndex and translateValue, so we return
      // to the first image in the array.
      if(this.state.currentIndex === this.state.images.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        })
      }
      
      // This will not run if we met the if condition above
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -(this.slideWidth())
      }));
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.goToNextSlide(),
        3000
      );
    }

    componentWillUnmount(){
      clearInterval(this.timerID);
    }
  
    slideWidth = () => {
       return document.querySelector('.slide').clientWidth
    }
  
    render() {
      return (
        <Fragment>
        <div className="slider">
  
          <div className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 1s'
            }}>
              {
                this.state.images.map((image, i) => (
                  <Slide key={i} image={image} />
                ))
              }
          </div>
        </div>
        <style jsx global>{`
        .slider {
          position: relative;
          width: auto;
          margin: 0 auto;
          height: 500px;
          overflow: hidden;
          white-space: nowrap;
        }
        
        .slider-wrapper {
          position: relative;
          height: 100%;
          width: 100%;
        }
        
        .slide {
          display: inline-block;
          height: 100%;
          width: 100%;
        }
      `}</style>
      </Fragment>
      );
    }
  }
  
  
  const Slide = ({ image }) => {
    console.log('safsd')
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'repeat-y',
      backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>
  } */

export default Slider
