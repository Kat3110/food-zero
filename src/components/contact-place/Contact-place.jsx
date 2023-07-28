import './contact-place.scss';
import Image from 'next/image';
import ContactPlaceContent from '../../../public/page-cont-img.png'
import ContactPlaceContent2 from '../../../public/page-cont-img2.png'


export function ContactPlace() {
  return (
    <section className="contact-place">
      <div className="content">
        <div>
          <Image src={ContactPlaceContent} alt='desk' />
          <p>
            We can be contacted via
            email <a href="mailto:info@foodzero.com">info@foodzero.com</a>
            or telephone on<a href="tel:+86852346000">+86 852 346 000</a>
          </p>
        </div>
        <div>
          <Image src={ContactPlaceContent2} alt='house' />
          <p></p>

          <a className='widgets-text footer__map'
             href="https://www.waze.com/en/live-map/directions/us/ca/los-angeles/1959-s-sepulveda-blvd?place=EjExOTU5IFMgU2VwdWx2ZWRhIEJsdmQsIExvcyBBbmdlbGVzLCBDQSA5MDAyNSwgVVNBIjESLwoUChIJZ6ni5nW7woARuwuOYCmN0j0Qpw8qFAoSCRvd0P9cusKAETmBZ6QcUSze">
            1959 Sepulveda Blvd. Culver City, CA, 90230
          </a>

          <button></button>
        </div>
      </div>
    </section>
  )
}