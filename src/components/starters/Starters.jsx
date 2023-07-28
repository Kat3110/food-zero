'use client'
import './starters.scss';
import Image from 'next/image';
import React from 'react';
import {animated, useTrail} from 'react-spring';
import {PriceList} from '@/components/price-list/PriceList';
import {useInView} from 'react-intersection-observer';

const cards = [
  {
    cost: '$20',
    title: 'Grilled Okra and Tomatoes ',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    cost: '$18',
    title: 'Cucumber Salad',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    cost: '$22',
    title: ' Basil Pancakes',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  }
]

export function Starters({
                           title,
                           icon,
                           ImgContent,
                           isAvocado,
                           isRevers
                         }) {
  const [ref, inView] = useInView({
    threshold: .5,
    triggerOnce: true,
  });

  const trail = useTrail(cards.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(70px)',
    config: {
      tension: 900,
      friction: 80,
    },
  });

  return (
    <section className="starters">
      <div className="content">
        {icon && (
          <Image
            src={icon}
            alt='icon'
            className={
              isAvocado
                ? "starters__avocado"
                : "starters__blueberry"
            }
          />
        )}
        <div className="starters__text">
          <h2 className="heading-one starters__title">{title}</h2>
          <p className="body-text starters__subtitle">
            This is a section of your menu. Give your section a brief description
          </p>
        </div>
        <div className={
          isRevers
            ? "starters__content-revers"
            : "starters__content"
        }>
          <Image className="starters__image" src={ImgContent} alt="Starters"/>
          <div className="starters__list" ref={ref}>
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

      </div>
    </section>
  )
}