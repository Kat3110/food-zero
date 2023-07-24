import './footer.css'
import Image from "next/image";
import Instagram from '../../../public/Icon_instagram-min.svg'
import Facebook from '../../../public/Icon_facebook-min.svg'
import Youtube from '../../../public/Icon_youtube-min.svg'
import Twitter from '../../../public/Icon_twitter-min.svg'


export default function Footer() {
  return (
    <footer className='footer'>

      <div className='footer__top'>
        <h2 className='footer__logo'>Food Zero.</h2>
        <div className='footer__contacts'>
          <h2 className='heading-five footer__title'>Contact</h2>
          <div className='widgets-text footer__links'>
            <a href="tel:+1+86852346000">+1+86 852 346 000</a>
            <a href="mailto:info@foodzero.com">info@foodzero.com</a>
          </div>
          <a className='widgets-text footer__map'
             href="https://www.waze.com/en/live-map/directions/us/ca/los-angeles/1959-s-sepulveda-blvd?place=EjExOTU5IFMgU2VwdWx2ZWRhIEJsdmQsIExvcyBBbmdlbGVzLCBDQSA5MDAyNSwgVVNBIjESLwoUChIJZ6ni5nW7woARuwuOYCmN0j0Qpw8qFAoSCRvd0P9cusKAETmBZ6QcUSze">
            1959 Sepulveda Blvd. Culver City, CA, 90230
          </a>
        </div>

        <div className='footer__subscription'>
          <h2 className='heading-five footer__title'>Never Miss a Recipe</h2>
          <div className='footer__form'>
            <input className='body footer__input' type="text" placeholder='Email Address' />
            <button className='heading-five btn footer__btn'>Subscribe</button>
          </div>
          <p className='footer__subtitle widgets-text'>
            Join our subscribers and get best recipe delivered each week!
          </p>
        </div>
      </div>

      <div className='footer__border'></div>

      <div className='footer__bottom'>
        <span className='footer__copyright'>© 2020 Zero Inc. All rights Reserved</span>
        <div>
          <a className='footer__link' href="">
            <Image src={Instagram} alt='Instagram'></Image>
          </a>
          <a className='footer__link' href="">
            <Image src={Twitter} alt='Twitter'></Image>
          </a>
          <a className='footer__link' href="">
            <Image src={Facebook} alt='Facebook'></Image>
          </a>
          <a className='footer__link' href="">
            <Image src={Youtube} alt='Youtube'></Image>
          </a>
        </div>
      </div>


    </footer>)
}
