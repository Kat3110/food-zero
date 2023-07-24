import './calories-card.css';
import Image from "next/image";

export function CaloriesCard({
                               picture,
                               title
                             }) {

  return (
    <div className='calories-card'>
      <Image src={picture} alt='Food'></Image>
      <div className='calories-head'>
        <h3 className='heading-four calories-title'>{title}</h3>
        <a href="">→</a>
      </div>
    </div>
  );
}