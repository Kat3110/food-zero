'use client'
import React from 'react';
import './our-menu.scss'
import { useInView } from 'react-intersection-observer';
import { useTrail, animated } from 'react-spring';
import Image from "next/image";
import Twig from '/public/twig.png';
import { PriceList } from '@/components/price-list/PriceList';

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
  const [ref, inView] = useInView({
    threshold: .5,
    triggerOnce: true,
  });

  const trail = useTrail(cards.length,  {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(70px)',
    config: {
      tension: 900,
      friction: 80,
    },
  });

  return (
    <section className='our-menu'>
      <Image className='our-menu__twig' src={Twig} alt='flower'/>
      <div className='content'>
        <div className='our-menu__text'>
          <h2 className='heading-one our-menu__title'>Our Menu</h2>
          <p className='body-text our-menu__subtitle'>This is a section of your menu. Give your section<br/> a brief description</p>
        </div>
        <div className='our-menu__list' ref={ref}>
          {trail.map((style, index) => (
            <animated.div key={cards[index].title} style={style}>
              <PriceList
                cost={cards[index].cost}
                title={cards[index].title}
                subtitle={cards[index].subtitle}
              />
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  )
}