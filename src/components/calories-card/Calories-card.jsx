import './calories-card.css';
import Image from "next/image";
import Menu from '../../../public/MenuCategory.png'

export function CaloriesCard({
                               picture,
                               title
                             }) {

  return (
    <div className='calories-card'>
      <Image src={picture} alt='Food'></Image>
      <div className='calories-head'>
        <h2 className='heading-four calories-title'>{title}</h2>
        <a href="">→</a>
      </div>
    </div>
  );
}