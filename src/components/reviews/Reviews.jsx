"use client"
import {useState} from 'react';
import Image from "next/image";
import './reviews.css';
import Icon from '../../../public/”.png'
import Arrow from '../../../public/ARROW-SLIDER.png'
import Avatar from '../../../public/AvatarAcc.jpg'
import Avatar1 from '../../../public/0qmK6_5f.jpg'
import Avatar2 from '../../../public/suga-021523.jpg'

const slides = [
  {
    id: 1,
    img: Avatar,
    title: '“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus  Lorem ipsum dolor sit amet.',
    name: 'JungKook',
    major: 'Bloger'
  },
  {
    id: 2,
    img: Avatar2,
    title: '“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.',
    name: 'August D',
    major: 'Recording producer'
  },
  {
    id: 3,
    img: Avatar1,
    title: '“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Purus lorem id penatibus imperdiet. Purus lorem id penatibus imperdiet. Purus lorem id penatibus imperdiet.',
    name: 'Jimin',
    major: 'Author of songs'
  }
]

export function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handlePrevClick() {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  function handleNextClick() {
    setCurrentSlide((currentSlide + 1) % slides.length);
  }

  return (
    <>
      <div className='reviews'>
        <div className='content'>
          <div className='reviews__slide'>
            {slides.map((slide, index) => (
              <div className={index === currentSlide ? 'reviews__current' : 'reviews__item'} key={slide.id}>
                <h2 className='heading-four reviews__title'>{slide.title}</h2>
                <Image className='reviews__icon' src={Icon} alt='"'></Image>
                <div className='reviews__bottom'>
                  <div className='reviews__account'>
                    <Image className='reviews__img' src={slide.img} alt='Foto'></Image>
                    <div>
                      <p className='heading-five reviews__name'>{slide.name}</p>
                      <span className='label reviews__major'>{slide.major}</span>
                    </div>
                  </div>
                  <div className='heading-five reviews__control'>
                    <button type="button"
                            className='reviews__btn reviews__prev'
                            onClick={handlePrevClick}
                            title="prev">
                      <Image src={Arrow} alt='Arrow'></Image>
                    </button>
                    <div className='reviews__count'>{currentSlide + 1}/{slides.length}</div>
                    <button type="button"
                            className='reviews__btn reviews__next'
                            onClick={handleNextClick}
                            title="next"
                    >
                      <Image src={Arrow} alt='Arrow'></Image>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
