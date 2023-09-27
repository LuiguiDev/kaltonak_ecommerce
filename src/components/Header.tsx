import { useRef, useState } from "react"
import { useTheme } from "../hooks/useTheme"
import '../styles/header.css'

interface NavButtonProps {
  text: string
  id: string
}

const NavButton: React.FC<NavButtonProps> = ({ text, id }) => {
  return(
    <li className="header_li">
      <a href={`#${text}`} className="header_anchor" id={id}>
        {text}<span className="underline" ></span>
      </a>
    </li>
  )
}

interface HeaderProps {
  device: string
}

export const Header: React.FC<HeaderProps> = () => {
  const {theme, changeTheme} = useTheme()
  const [menuDisplayed, setMenuDisplayed] = useState<boolean>(false)
  const navRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLElement>(null)
  const tilte = useRef<HTMLHeadingElement>(null)

  function manageChangeTheme () {
    if(theme === 'dark') changeTheme('light')
    else changeTheme('dark')
  }
  function displayMenu () {
    const prevState = structuredClone(menuDisplayed)
    setMenuDisplayed(!prevState)
    menuRef.current?.classList.toggle('nav_active')
  }

  window.addEventListener('scroll', () => {
    if(navRef.current) {
      navRef.current.classList.toggle('on_scroll', window.scrollY > 0)
      tilte.current?.classList.toggle('heading_on_scroll', window.scrollY > 0)
    }
  })

  return (
    <header ref={navRef}>
      <button className="menu" onClick={displayMenu}>
        <i className="fas fa-bars"></i>
      </button>
      <div className="logo">
        <img src="https://i.ibb.co/NWQZM94/icon.jpg" alt="Icono de KALTONAK" className='kaltonak_icon' />
        <h1 className="kaltonak" ref={tilte} >KALTONAK</h1>
      </div>
      <nav className="header_nav" ref={menuRef} >
        <ul className="header_ul">
          <NavButton text="Inicio" id={crypto.randomUUID()} />
          <NavButton text="Cursos" id={crypto.randomUUID()} />
          <NavButton text="Contacto" id={crypto.randomUUID()} />
          <button className="toggle_theme" onClick={manageChangeTheme}>
            <a className="header_anchor">Modo</a>{theme === 'dark' ? <i className="fa-solid fa-moon" style={{color: "#ffffff"}}></i> : <i className="fa-solid fa-sun" ></i>}
          </button>
        </ul>
      </nav>
      <button className="cart_btn">
      <i className="fas fa-shopping-cart"></i>
      </button>
    </header>
  )
}
