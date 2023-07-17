import './recept.css'
import Image from "next/image";

export function Recept({
                         picture,
                         avatar,
                         nickname,
                         data,
                         time,
                         comment,
                         title,
                         subtitle
                       }) {
  return (
    <>
      <div className='recept content'>
        <div className='recept__card'>
          <Image src={picture} alt='Foto' className='recept__img'/>
          <div className='recept__label heading-six'>Fashion</div>
          <div className='recept__container'>
            <div className='recept__account'>
              <Image src={avatar} alt='Avatar' className='recept__account_img'/>
              <ul className='label recept__list'>
                <li>{nickname}</li>
                <li>{data}</li>
                <li>{time}</li>
                <li>{comment}</li>
              </ul>
            </div>
            <div className='recept__text'>
              <h4 className='heading-four recept__title'>{title}</h4>
              <div className='recept__border'></div>
              <p className='body recept__subtitle'>{subtitle}</p>
            </div>
            <button className='recept__btn' title='Read More'>
              <a className='body recept__link' href="#">Read More</a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}