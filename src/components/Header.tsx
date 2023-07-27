import { useState } from "react"
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

export const Header: React.FC<HeaderProps> = ({ device }) => {
  const {theme, changeTheme} = useTheme()
  const [menuDisplayed, setMenuDisplayed] = useState<boolean>(false)

  function manageChangeTheme () {
    if(theme === 'dark') changeTheme('light')
    else changeTheme('dark')
  }
  function displayMenu () {
    const prevState = structuredClone(menuDisplayed)
    setMenuDisplayed(!prevState)
  }

  return (
    <header>
      <div className="logo">
        <img src="./src/images/icon.jpg" alt="Icono de KALTONAK" className='kaltonak_icon' />
        <h1 className="kaltonak">KALTONAK</h1>
      </div>
      {
        menuDisplayed &&        
        <nav className="header_nav">
          <ul className="header_ul">
            <NavButton text="Inicio" id={crypto.randomUUID()} />
            <NavButton text="Cursos" id={crypto.randomUUID()} />
            <NavButton text="Contacto" id={crypto.randomUUID()} />
            <button className="toggle_theme" onClick={manageChangeTheme}>{theme === 'dark'? '🌙' : '☀️'}</button>
          </ul>
        </nav>
      }
      {device === 'mobile' &&
        <button className="manu" onClick={displayMenu} >
          <i className="fas fa-bars"></i>
        </button>
      }
    </header>
  )
}
