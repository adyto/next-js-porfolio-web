import Link from "next/link"
import React from 'react'
import { withRouter } from "next/router"

function Navbar({ router }) {
  const navs = [
    { text: 'Home', href: '/'},
    { text: 'About', href: '/about'},
    { text: 'Porfolio', href: '/porfolio'},
    { text: 'Contact', href: '/contact'},
    // { text: '', href: ''}
  ]
  return (
    <nav>
      <div className="navbar">
        <div className="container">
          <Link href="/">
            <a className="logo">Adi.</a>
          </Link>
    
          <ul className="nav-links">
            { navs.map(nav => (
              <li key={nav}><Link href={nav.href}><a className={`nav-item ${router.pathname == nav.href ? 'active' : ''}`}>{nav.text}</a></Link></li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default withRouter (Navbar)
