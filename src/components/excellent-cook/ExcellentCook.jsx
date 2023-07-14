import './excellent-cook.css'
import Image from "next/image";
import Flower from '../../../public/Leaf.svg'
import Men from '../../../public/men.png'


export function ExcellentCook() {
  return (
    <section className='excellent-cook'>
      <div className='content'>
        <div className='excellent-cook__picture'>
          <Image className='excellent-cook__flower-left' src={Flower} alt='flower'/>
          <Image className='excellent-cook__men' src={Men} alt='men'/>
        </div>
        <div>
          <div className='excellent-cook__text'>
            <h1 className='heading-one excellent-cook__title'>Excellent cook</h1>
            <p className='body excellent-cook__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. </p>
          </div>
          <Image className='excellent-cook__flower' src={Flower} alt='flower'/>
        </div>
      </div>
    </section>
  )
}