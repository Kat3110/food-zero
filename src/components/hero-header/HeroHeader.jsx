import './hero-header.css'
import Image from "next/image";
import Spices1 from '../../../public/spices1.png'
import Spices2 from '../../../public/spices2.png'
import Spices3 from '../../../public/spices3.png'
import Mussels from '../../../public/Image-min.jpg'
import Сondiment from '../../../public/Image(1)-min.jpg'

export function HeroHeader() {
  return (
    <section className='hero-header'>
      <div className='content'>
        <div className='hero-header__top'>
          <div className='hero-header__text'>
            <h1 className='large-title hero-header__title'>Healthy Eating <br/>is important <br/>part of lifestyle
            </h1>
            <p className='body hero-header__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Neque congue
              arcu
            </p>
          </div>
          <div className='hero-header__img-meat'>
            <div className='hero-header__img'>
              <Image className='hero-header__img-spices' src={Spices1} alt='element menu'/>
              <Image className='hero-header__img-spices' src={Spices2} alt='element menu'/>
              <Image className='hero-header__img-spices' src={Spices3} alt='element menu'/>
            </div>
          </div>
        </div>
        <div className='hero-header__bottom'>
          <div className='hero-header__box'>
            <Image className='hero-header__picture' src={Mussels} alt='element menu'/>
            <div className='hero-header__text'>
              <h2 className='heading-three hero-header__heading'>Start to plan<br/> your diet today</h2>
              <p className='body hero-header__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Neque congue arcu</p>
            </div>
          </div>
          <div className='hero-header__box'>
            <div className='hero-header__text'>
              <p className='body hero-header__subtitle'>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Neque congue arcu</p>
            </div>
            <Image className='hero-header__picture' src={Сondiment} alt='element menu'/>
          </div>
        </div>
      </div>
    </section>
  )
}