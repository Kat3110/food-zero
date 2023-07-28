import './footer.scss'
import Image from "next/image";
import Instagram from '../../../public/Icon_instagram-min.svg'
import Facebook from '../../../public/Icon_facebook-min.svg'
import Youtube from '../../../public/Icon_youtube-min.svg'
import Twitter from '../../../public/Icon_twitter-min.svg'


export default function Footer() {
  return (
    <footer className='footer'>
      <div className='content'>
        <div className='footer__top'>
          <h2 className='footer__logo'>Food Zero.</h2>
          <div className='footer__contacts'>
            <h3 className='heading-five footer__title'>Contact</h3>
            <div className='widgets-text footer__links'>
              <a target="_blank" href="tel:+1+86852346000">+1+86 852 346 000</a>
              <a target="_blank" href="mailto:info@foodzero.com">info@foodzero.com</a>
            </div>
            <a target="_blank" className='widgets-text footer__map'
               href="https://www.waze.com/en/live-map/directions/us/ca/los-angeles/1959-s-sepulveda-blvd?place=EjExOTU5IFMgU2VwdWx2ZWRhIEJsdmQsIExvcyBBbmdlbGVzLCBDQSA5MDAyNSwgVVNBIjESLwoUChIJZ6ni5nW7woARuwuOYCmN0j0Qpw8qFAoSCRvd0P9cusKAETmBZ6QcUSze">
              1959 Sepulveda Blvd. Culver City, CA, 90230
            </a>
          </div>

          <div className='footer__subscription'>
            <h3 className='heading-five footer__title'>Never Miss a Recipe</h3>
            <form className='footer__form'>
              <input className='body-text footer__input' type="text" placeholder='Email Address'/>
              <button className='heading-five btn footer__btn'>Subscribe</button>
            </form>
            <p className='footer__subtitle widgets-text'>
              Join our subscribers and get best recipe delivered each week!
            </p>
          </div>
        </div>
      </div>
      <div className='divider'></div>
      <div className='content'>
        <div className='footer__bottom'>
          <div className='footer__copyright'>© 2020 Zero Inc. All rights Reserved</div>
          <div className='footer__social'>
            <a target="_blank" className='footer__link' href="https://www.instagram.com/">
              <Image src={Instagram} alt='Instagram'></Image>
            </a>
            <a target="_blank" className='footer__link' href="https://twitter.com/">
              <Image src={Twitter} alt='Twitter'></Image>
            </a>
            <a target="_blank" className='footer__link' href="https://facebook.com/">
              <Image src={Facebook} alt='Facebook'></Image>
            </a>
            <a target="_blank" className='footer__link' href="https://www.youtube.com/">
              <Image src={Youtube} alt='Youtube'></Image>
            </a>
          </div>
        </div>
      </div>
    </footer>)
}
