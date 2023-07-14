import './hero-header.css'
import Image from "next/image";
import Spices1 from '../../../public/spices1.png'
import Spices2 from '../../../public/spices2.png'
import Spices3 from '../../../public/spices3.png'

export function HeroHeader() {
  return (
    <section className='hero-header'>
      <div className='hero-header__text'>
        <h1 className='hero-header__title'>Healthy Eating <br/>is important <br/>part of lifestyle
        </h1>
        <p className='hero-header__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Neque congue
          arcu
        </p>
      </div>
      <div className='hero-header__img-meat'>
        <div className='hero-header__images'>
          <Image className='hero-header__img-spices' src={Spices1} alt='element menu'/>
          <Image className='hero-header__img-spices' src={Spices2} alt='element menu'/>
          <Image className='hero-header__img-spices' src={Spices3} alt='element menu'/>
        </div>
      </div>
    </section>
  )
}