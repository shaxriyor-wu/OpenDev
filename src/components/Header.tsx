import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo-container" aria-label="OpenDev logotipi" onClick={closeMenu}>
            <img src="/image.png" alt="OpenDev Logo" className="logo-img" onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }} />
            <span className="logo-text">OpenDev</span>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`} aria-label="Asosiy navigatsiya">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Main
            </Link>
            <Link
              to="/projects"
              className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              to="/courses"
              className={`nav-link ${isActive('/courses') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Courses
            </Link>
            <Link
              to="/contacting"
              className={`nav-link ${isActive('/contacting') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              SeniorDevs
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            aria-label="Menyuni ochish"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

