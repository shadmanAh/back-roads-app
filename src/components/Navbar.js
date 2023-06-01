import React from 'react'
import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parntClass="nav-links" itemClass="nav-link" />
        <ul className="nav-icons">
          {socialLinks.map((Link) => {
            return <SocialLink key={Link.id} {...Link} classitem="nav-icon" />
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
