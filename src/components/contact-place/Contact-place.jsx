// import './contact-place.scss';
// import Image from 'next/image';
// import ContactPlaceContent from '../../../public/page-cont-img.png'
// import ContactPlaceContent2 from '../../../public/page-cont-img2.png'
//
//
// export function ContactPlace() {
//   return (
//     <section className="contact-place">
//       <div className="content">
//         <div className="contact-place__block">
//           <Image src={ContactPlaceContent} alt="desk"/>
//           <p className="heading-five contact-place__text">
//             We can be contacted via<br/>
//             email <a target="_blank" href="mailto:info@foodzero.com"> info@foodzero.com</a><br/>
//             or telephone on<a target="_blank" href="tel:+86852346000"> +86 852 346 000</a><br/>
//           </p>
//         </div>
//         <div className="contact-place__block">
//           <Image src={ContactPlaceContent2} alt="house"/>
//           <div className='contact-place__date'>
//             <p className="heading-five contact-place__text">
//               We are located in 1959 Sepulveda Blvd. Culver<br/> City, CA, 90230
//             </p>
//             <a className="contact-place__btn btn heading-five"
//                target="_blank"
//                href="https://www.waze.com/en/live-map/directions/us/ca/los-angele
//             s/1959-s-sepulveda-blvd?place=EjExOTU5IFMgU2VwdWx2ZWRhIEJsdmQsIExvcyBBbmdlbGVzLCBDQSA5MDAyNSwgV
//             VNBIjESLwoUChIJZ6ni5nW7woARuwuOYCmN0j0Qpw8qFAoSCRvd0P9cusKAETmBZ6QcUSze"
//             >
//               View in maps
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'
import './contact-place.scss';
import Image from 'next/image';
import ContactPlaceContent from '../../../public/page-cont-img.png'
import ContactPlaceContent2 from '../../../public/page-cont-img2.png'
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export function ContactPlace() {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();

  const animation1 = useSpring({
    opacity: inView1 ? 1 : 0,
    transform: inView1 ? 'translateY(0)' : 'translateY(150px)',
  });

  const animation2 = useSpring({
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? 'translateY(0)' : 'translateY(150px)',
  });

  return (
    <section className="contact-place">
      <div className="content">
        <div className="contact-place__block">
          <div ref={ref1}>
            <animated.div style={animation1}>
              <Image src={ContactPlaceContent} alt="desk" />
            </animated.div>
          </div>
          <p className="heading-five contact-place__text">
            We can be contacted via<br />
            email <a target="_blank" href="mailto:info@foodzero.com"> info@foodzero.com</a><br />
            or telephone on<a target="_blank" href="tel:+86852346000"> +86 852 346 000</a><br />
          </p>
        </div>
        <div className="contact-place__block">
          <div ref={ref2}>
            <animated.div style={animation2}>
              <Image src={ContactPlaceContent2} alt="house" />
            </animated.div>
          </div>
          <div className='contact-place__date'>
            <p className="heading-five contact-place__text">
              We are located in 1959 Sepulveda Blvd. Culver<br /> City, CA, 90230
            </p>
            <a className="contact-place__btn btn heading-five"
               target="_blank"
               href="https://www.waze.com/en/live-map/directions/us/ca/los-angele
            s/1959-s-sepulveda-blvd?place=EjExOTU5IFMgU2VwdWx2ZWRhIEJsdmQsIExvcyBBbmdlbGVzLCBDQSA5MDAyNSwgV
            VNBIjESLwoUChIJZ6ni5nW7woARuwuOYCmN0j0Qpw8qFAoSCRvd0P9cusKAETmBZ6QcUSze"
            >
              View in maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}