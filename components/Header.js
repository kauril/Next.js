import React, { Fragment } from 'react'
import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'
import { linkResolver, hrefResolver } from 'prismic-configuration'
import { header } from 'styles'
import Link from 'next/link'
import Router from 'next/router'

const MenuLinks = ({ menu }) => {
  
  
  return (
    
    menu.data.menu_links.map((menuLink) => {
      if (menuLink.link.id) {
        return (
          <li key={menuLink.link.id} onClick={() => linkClick()}>
            <NextLink
              as={linkResolver(menuLink.link)}
              href={hrefResolver(menuLink.link)}
              passHref
              prefetch
            >
              <a>{RichText.asText(menuLink.label)}</a>
            </NextLink>
          </li>
        )
      } else {
        return (
          <li key={menuLink.label[0].text}>
            <a href={menuLink.link.url}>{RichText.asText(menuLink.label)}</a>
          </li>
        )
      }
    })
  )
}


let menuOpen = false;

const toggleButtonClick = () => {
  const menu = document.getElementById("menu")
  const menuButton = document.getElementById("toggle")
  menuButton.classList.toggle("on");
  if (menuOpen) {
    menu.style.display = 'none'
    menuOpen = false
  } else {
    menu.style.display = 'block'
    menuOpen = true
  }
}

const linkClick = () => {
  const menu = document.getElementById("menu")
  const menuButton = document.getElementById("toggle")
  if (menuOpen) {
    menuButton.classList.toggle("on");
  }
  menu.style.display = 'none'
  menuOpen = false
}

const Header = (menu) => {

  const toggleButtonColor = menu.page === 'etusivu' ? 'black' : 'black';
  const toggleMenuBackgroundColor = menu.page === 'etusivu' ? 'white' : 'white';
  const logoText = menu.page === 'etusivu' ? '' : 'Raana Lehtinen'
  const uid = menu.page === 'etusivu' ? '' : menu.page

  const languageChangingLinkText = menu.lang === 'fi' ? 'Eng' : 'Fi'
  let pageUrl = menu.lang === 'fi' ? `/en/${uid}` : `/${uid}`
  const homePageUrlAs = menu.lang === 'fi' ? '/' : '/en'
  const homePageUrlHref = menu.lang === 'fi' ? '/?lang=fi' : '/?lang=en'

  if (menu.page === 'etusivu') {
    pageUrl = menu.lang === 'fi' ? `/en` : `/`
  }
  
  
  return (
    <Fragment>
      <header className='site-header'>
        <NextLink as={homePageUrlAs} href={homePageUrlHref} passHref prefetch>
          <a onClick={() => linkClick()}><div className='logo'>{logoText}</div></a>
        </NextLink>
        <div id="toggle" onClick={() => toggleButtonClick()}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <nav id="menu">
          <ul>
            <MenuLinks {...menu} />
            <li onClick={() => linkClick()}>
              {/* <Link href={pageUrl} passHref prefetch><a>{language}</a></Link>  */}
              {/* <a onClick={() => Router.push(pageUrl)}>{language}</a> */}
              <a href={pageUrl}>{languageChangingLinkText}</a>
            </li>
          </ul>
        </nav>
      </header>
      <style jsx global>{header}</style>
      <style jsx>{`
      @media (min-width: 768px) {
        
        #toggle {
          display: none;
        }

        /* !important keeps menu visible on desktop after clicking
        otherwise linkClick() would set it display: block; */
        #menu {
          display: block !important;
        }
      }
      
      @media (max-width: 767px) {

        #toggle {
          display: block;
          width: 28px;
          height: 30px;
          margin: 10px auto;
          cursor: pointer;
        }
        
        #toggle div {
          width: 100%;
          height: 5px;
          background: ${toggleButtonColor};
          margin: 4px auto;
          transition: all 0.3s;
          backface-visibility: hidden;
        }
        
        #toggle.on .one {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        #toggle.on .two {
          opacity: 0;
        }
        
        #toggle.on .three {
          transform: rotate(-45deg) translate(7px, -8px);
        }
        
        #menu {
          color: black;          
          background-color: ${toggleMenuBackgroundColor};
          padding: 10px;          
          line-height: 50px;
          text-align: center;
          margin: auto;
          display: none;
        }   
      }
    `}</style>
    </Fragment>

  )
}

export default Header
