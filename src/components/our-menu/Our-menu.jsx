import './our-menu.css'
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

export function OurMenu() {
  return (
    <section className='our-menu'>
      <Image className='our-menu__twig' src={Twig} alt='flower'/>
      <div className='content'>
        <div>
          <h2 className='heading-one our-menu__title'>Our Menu</h2>
          <p className='body-text our-menu__subtitle'>This is a section of your menu. Give your section<br/> a brief description</p>
        </div>
        <div className='our-menu__list'>
          {cards.map((card) => (
            <PriceList
              key={card.title}
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