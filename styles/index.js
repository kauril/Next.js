import css from 'styled-jsx/css'

export const header = css.global`
.site-header {
  height: 30px;
  padding: 20px 0;
}
.site-header,
.site-header a {
  color: black;
  font-weight: 700;
}
.site-header nav a:hover {
  color: #72767B;
}
.homepage .site-header,
.homepage .site-header a {
  color: black;
}
.homepage .site-header nav a:hover {
  color: #c8c9cb;
}
.site-header .logo {
  display: inline-block;
  font-size: 22px;
  font-weight: 900;
}
.site-header nav {
  float: right;
}
.site-header nav ul {
  margin: 0;
}
.site-header nav li {
  display: inline-block;
  margin-left: 35px;
}

@media (max-width: 1060px) {
  .site-header {
    padding-left: 20px;
    padding-right: 20px;
  }

}

@media (max-width: 871px) {
  .site-header nav li {
    margin-left: 20px;
  }
}

@media (max-width: 767px) {
  .site-header {
    height: auto;
  }
  .homepage .site-header {
    position: absolute;
    left: 0;
    right: 0;
  }
  .site-header .logo {
    display: block;
    text-align: center;
  }
  .site-header nav {
    float: none;
    text-align: center;
  }
  .site-header nav li {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}`

export const modal = css.global`
/* Style the Image Used to Trigger the Modal */
#modalImage {
    transition: 0.3s;
    clear: right;
    margin: auto;
    display: block;
    max-height: 80%;
    max-width: 90%
}

/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}


/* Caption of Modal Image (Image Text) - Same Width as the Image */
#caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
}

/* Add Animation - Zoom in the Modal */
.modal-content, #caption { 
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
    from {-webkit-transform:scale(0)} 
    to {-webkit-transform:scale(1)}
}

@keyframes zoom {
    from {transform:scale(0)} 
    to {transform:scale(1)}
}

/* The Close Button */
.close {
  float: right;
  padding: 3% 3% 1% 0;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
}

.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
}

}

`
export const reset = css.global`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}`

export const globals = css.global`
* {
  -webkit-font-smoothing: antialiased;
}
::selection {
  background: #FFF7C7; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #FFF7C7; /* Gecko Browsers */
}

/*
* Globals
*/
body {
  padding: 20px;
  color: #72767b;
  font-family: 'Courier Prime', monospace;
  font-size: 16px;
  font-weight: 400;
  letter-spacing : 0.4;
  line-height: 28px;
  background-color: white;
}
a {
  color: #72767B;
  font-size: 14px;
  font-weight: 400;
  letter-spacing : 0.35;
  line-height: 28px;
  text-decoration: none;
}
p a {
  text-decoration: underline;
}
h2, h3, h4, h5, h6 {
  font-family: 'Courier Prime', monospace;
}
h1 {
  font-family: 'Courier Prime', monospace;
  font-size: 42px; 
  font-weight: normal; 
  color: #484D52; 
  line-height: 52px; 
  letter-spacing : 1.14;
  margin-bottom: 1rem;
}
h2, h2 a {
  margin-bottom: 1rem;
  color: #484d52;
  font-size: 32px;
  font-weight: 700;
  letter-spacing : 0.85;
  line-height: 42px;
}
h3, h3 a {
  margin-bottom: 1rem;
  Color: #484d52;
  font-size: 20px;
  font-weight: 400;
  letter-spacing : 0.52;
  line-height: 34px;
}
p {
  margin-bottom: 2rem;
}
pre, ul {
  margin-bottom: 20px;
}
strong {
  font-weight: bold;
}
em {
  font-style: italic;
}
img {
  max-width: 100%;
}
.container, header, footer {
  max-width: 980px;
  margin: auto;
}
.content-section {
  margin-bottom: 3.75rem;
}
.wio-link {
  background-color: #4846b0 !important;
  color: white;
  position: fixed;
  z-index: 10000;
  padding: 6px 10px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  border-radius: 50%;
  bottom: 30px;
  right: 30px;
  height: 50px;
  width: 50px !important;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-shadow: 0 2px 7px 0 rgba(90, 90, 140, 0.4);
          box-shadow: 0 2px 7px 0 rgba(90, 90, 140, 0.4); 
}
.wio-link img {
  display: none;
}
.wio-link:after {
  font-family: 'Material Icons';
  content: '\\E3C9';
  color: white;
  font-size: 24px;
}`

export const medias = css.global`
@media (max-width: 767px) {
  h1 {
    font-size: 32px;
    line-height: 40px;
  }
  h2 {
    font-size: 26px;
  }
  h3 {
    font-size: 18px;
  }
  .content-section {
    margin-bottom: 2rem;
  }
  
}


@media all and (min-width: 480px) and (max-width: 768px) { 
  h1 {
    font-size: 32px;
    line-height: 40px;
  }
  h2 {
    font-size: 26px;
  }
  h3 {
    font-size: 18px;
  }
  .content-section {
    margin-bottom: 2rem;
  }
}

@media all and (max-width: 480px) { 
  .modal {
    padding-top: 10%; /* Location of the box */
  }
}


/* Portrait */
@media screen and (orientation:portrait) { /* Portrait styles here */ }
/* Landscape */
@media screen and (orientation:landscape) { /* Landscape styles here */ }


/* CSS for iPhone, iPad, and Retina Displays */

/* Non-Retina */
@media screen and (-webkit-max-device-pixel-ratio: 1) {
}

/* Retina */
@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
only screen and (-o-min-device-pixel-ratio: 3/2),
only screen and (min--moz-device-pixel-ratio: 1.5),
only screen and (min-device-pixel-ratio: 1.5) {
}

/* iPhone Portrait */
@media screen and (max-device-width: 480px) and (orientation:portrait) {
} 

/* iPhone Landscape */
@media screen and (max-device-width: 480px) and (orientation:landscape) {
}

/* iPad Portrait */
@media screen and (min-device-width: 481px) and (orientation:portrait) {
}

/* iPad Landscape */
@media screen and (min-device-width: 481px) and (orientation:landscape) {
}`
