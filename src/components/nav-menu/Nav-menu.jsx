'use client'
import React, {useState} from 'react';
import Link from 'next/link'
import './nav-menu.scss';
import Image from 'next/image';
import Instagram from '../../../public/Icon_instagram-min.svg';
import Twitter from '../../../public/Icon_twitter-min.svg';
import Facebook from '../../../public/Icon_facebook-min.svg';
import Youtube from '../../../public/Icon_youtube-min.svg';

const links = [
  {
    id: 1,
    href: '/',
    name: 'Home'
  },
  {
    id: 2,
    href: '/new-menu',
    name: 'Menu'
  },
  {
    id: 3,
    href: '/contact',
    name: 'Contact'
  },
  {
    id: 4,
    href: '/about',
    name: 'About'
  },
]

export function NavMenu({isOpen, onMenuToggle}) {

  const [isMenuOpen, setIsMenuOpen] = useState(isOpen);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    onMenuToggle(true);
  };

  return (
    <section className={`nav-menu ${isOpen ? 'nav-menu-open' : ''}`}>
      <div className="nav-menu__close" onClick={handleMenuClose}>
        <div className="nav-menu__line nav-menu__line-1"></div>
        <div className="nav-menu__line nav-menu__line-2"></div>
      </div>
      <div className="nav-menu__box">
        <div className="nav-menu__links">
          {links.map((link) => (
            <Link
              className="nav-item"
              href={link.href}
              key={link.id}
              onClick={handleMenuClose}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className='nav-menu__contact'>
          <h2 className='heading-five nav-menu__title'>Contact</h2>
          <div className="divider"></div>
          <div className='nav-menu__date' >
            <div className="widgets-text nav-menu__connection">
              <a href="tel:+1+86852346000">+1+86 852 346 000</a>
              <a href="mailto:info@foodzero.com">info@foodzero.com</a>
            </div>
            <a className="widgets-text nav-menu__map"
               href="https://www.waze.com/en/live-map/directions/us/ca/los-angeles/1959-s-sepulveda-blvd?place=EjExOTU5IFMgU2VwdWx2ZWRhIEJsdmQsIExvcyBBbmdlbGVzLCBDQSA5MDAyNSwgVVNBIjESLwoUChIJZ6ni5nW7woARuwuOYCmN0j0Qpw8qFAoSCRvd0P9cusKAETmBZ6QcUSze">
              1959 Sepulveda Blvd.<br /> Culver City, CA, 90230
            </a>
            <div className="nav-menu__social">
              <a className="nav-menu__link" href="https://www.instagram.com/">
                <Image src={Instagram} alt="Instagram"></Image>
              </a>
              <a className="nav-menu__link" href="https://twitter.com/">
                <Image src={Twitter} alt="Twitter"></Image>
              </a>
              <a className="nav-menu__link" href="https://facebook.com/">
                <Image src={Facebook} alt="Facebook"></Image>
              </a>
              <a className="nav-menu__link" href="https://www.youtube.com/">
                <Image src={Youtube} alt="Youtube"></Image>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}