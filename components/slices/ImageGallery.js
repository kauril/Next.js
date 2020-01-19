import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'prismic-configuration'
import Router from 'next/router'

const openModal = (item, lang, uid) => {
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = item.link.url;
  captionText.innerHTML = item.image_description[0].text;

  //const state = window.history.state
  //window.history.pushState(state, '', url);
  //Push new state to history so that Router.beforePopState
  //would work also after first time


  //window.scrollTo(0, 0); 
  //Router.push(`/works`,`/works/${item.image.alt}`, {shallow:true});

  

  //Handles browser backbutton when pressed while modal open
  //Redirects user to 'works' page

  Router.beforePopState(({ url, as, options }) => {
    //const location = lang === 'fi' ? `/works/${window.scrollY}` : '/en/works'
    modal.style.display = "none";
    modalImg.src = '';
    captionText.innerHTML = ''
    window.location.href = lang === 'fi' ? `/${uid}&scrollPos=${window.scrollY}` : `/en/${uid}&scrollPos=${window.scrollY}`
    
    
    //Router.push(`/works/${window.scrollY}`,`/works/${window.scrollY}`, {shallow:true});
    /* Router.push({
      pathname: '/works',
      query: { scrollPos: window.scrollY },
    }); */
    return false
  })

  modal.onclick = () => {
    modal.style.display = "none";
    modalImg.src = '';
    captionText.innerHTML = ''
    /* modalImg.style.maxHeight = "80%"
    modalImg.style.maxWidth = "90%" */
  }

  /* const zoomInButton = document.getElementById('zoomin')
  const zoomOutButton = document.getElementById('zoomout')

  zoomInButton.onclick = () => {
    modalImg.style.maxHeight = "150%"
    modalImg.style.maxWidth = "150%"
  }
  
  zoomOutButton.onclick = () => {
    modalImg.style.maxHeight = "80%"
    modalImg.style.maxWidth = "90%"
  } */


  // Handles backbutton if pressed and closes the modal
  /* window.onpopstate = function (event) {
    event.preventDefault()
    modal.style.display = "none";

    modalImg.src = '';
    captionText.innerHTML = ''
    modalImg.style.maxHeight = "80%"
    modalImg.style.maxWidth = "90%"
  } */


  // Get the <span> element that closes the modal
  //const span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  /*  span.onclick = () => { 
       modal.style.display = "none";
       modalImg.src = '';
       captionText.innerHTML = ''
       modalImg.style.maxHeight = "80%"
     modalImg.style.maxWidth = "90%"
   } */

}

const GalleryItem = ({ slice, lang, uid }) => (
  slice.items.map((item, index) => {
    return (
      <div onClick={() => openModal(item, lang, uid)} className='gallery-item noSelect' key={index}>
        <img src={item.image.url} alt={item.image.alt} />
        {RichText.render(item.image_description, linkResolver)}
      </div>
    )
  })
)

const ImageGallery = (props) => (
  <Fragment>
    <section className='image-gallery content-section'>
      {RichText.render(props.slice.primary.gallery_title, linkResolver)}
      <div className='gallery'>
        <GalleryItem {...props} />
      </div>
    </section>
    <style jsx global>{`
      .image-gallery h2{
        margin-bottom: 2em;
      }
      .gallery {
        display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
        display: -ms-flexbox;  /* TWEENER - IE 10 */
        display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
        display: flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-justify-content: space-between; 
        justify-content: space-between; 
      }
      .gallery-item {
        cursor: pointer;
        -webkit-box-flex: 0 1 48%;
        -moz-box-flex:  0 1 48%;
        -webkit-flex:  0 1 48%;
        -ms-flex:  0 1 48%;
        flex: 0 1 48%;
        text-align: center;
      }
      .gallery-link {
        margin-top: -20px;
        text-transform: uppercase;
      }
      .gallery img {
        margin-bottom: 1rem;
      }

      /* Removes blue selection area of element when clicked */
      .noSelect {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }
      @media (max-width: 767px) {
        .gallery-item {
          -webkit-box-flex: 100%;
          -moz-box-flex:  100%;
          -webkit-flex:  100%;
          -ms-flex:  100%;
          flex: 100%;
        }
      }
    `}</style>
  </Fragment>
)

export default ImageGallery
