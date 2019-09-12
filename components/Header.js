import React, { Fragment } from 'react'
import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'
import { linkResolver, hrefResolver } from 'prismic-configuration'
import { header } from 'styles'

const MenuLinks = ({ menu }) => (
  menu.data.menu_links.map((menuLink) => {
    if (menuLink.link.id) {
      return (
        <li key={menuLink.link.id} onClick={() => { 
          const menu = document.getElementById("menu")
          const menuButton = document.getElementById("toggle")
          menuButton.classList.toggle("on");
          menu.style.display = 'none'
          menuOpen = false 
        }}>
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
            {/* <a href={menuLink.link.url}><img src="../static/glyph-logo_May2016.png" width={10} height={10}/></a> */}
        </li>
      )
    }
  })
) 

let menuOpen = false;

const toggleClick = () => {
  const menuButton = document.getElementById("toggle")
  menuButton.classList.toggle("on");
  const menu = document.getElementById("menu")
  if (menuOpen) {
    menu.style.display = 'none'
    menuOpen = false 
  } else {
    menu.style.display = 'block'
    menuOpen = true
  }
}

const Header = (menu) => {
    console.log(menu.page)
    let toggleButtonColor = '#484d52';
    let toggleMenuBackgroundColor = 'white';
    if (menu.page === 'etusivu'){
      toggleButtonColor = 'white'
      toggleMenuBackgroundColor = '#484d52'
    }
  
    return (
      <Fragment>
    <header className='site-header'>
      <NextLink href='/' passHref prefetch>
        <a onClick={() => { 
          console.log(menuOpen)
          if (menuOpen){
            const menuButton = document.getElementById("toggle")
            menuButton.classList.toggle("on");
          }
          const menu = document.getElementById("menu")
          menu.style.display = 'none'
          menuOpen = false 
        }}><div className='logo'>Etusivu</div></a>
      </NextLink>
      <div id="toggle" onClick={() => toggleClick()}>
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
      <nav id="menu">
        <ul>
          <MenuLinks {...menu} />
        </ul>
      </nav>
    </header>
    <style jsx global>{ header }</style>
    <style jsx>{`

      
      @media (min-width: 767px) {
        #toggle {
          display: none;
        }

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
