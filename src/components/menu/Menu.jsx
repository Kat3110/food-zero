import './menu.css'
import Image from "next/image";
import Twig from '/public/twig.png'
import {PriceList} from "@/components/price-list/PriceList";

const cards = [
  {
    cost: '$20',
    title: 'Deep Sea Snow White Cod Fillet',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    cost: '$18',
    title: 'Steak With Rosemary Butter',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    cost: '$22',
    title: 'Cucumber Salad',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    cost: '$90',
    title: 'Natural Wine Pairing',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  }
]

export function Menu() {
  return (
    <section className='menu'>
      <Image className='menu__twig' src={Twig} alt='flower'/>
      <div className='content'>
        <div>
          <h1 className='heading-one menu__title'>Our Menu</h1>
          <p className='body menu__subtitle'>This is a section of your menu. Give your section<br/> a brief description</p>
        </div>
        <div className='menu__list'>
          {cards.map((card) => (
            <PriceList
              id={card.title}
              cost={card.cost}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}