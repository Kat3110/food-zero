import './calories.css';
import {CaloriesCard} from "@/components/calories-card/Calories-card";
import Menu from '../../../public/MenuCategory.png'
import Menu1 from '../../../public/MenuCategory1.png'
import Menu2 from '../../../public/MenuCategory2.png'

const cards = [
  {
    picture: Menu,
    title: 'Starters'
  },
  {
    picture: Menu1,
    title: 'Mains'
  },
  {
    picture: Menu2,
    title: 'Soups'
  },
]

export function Calories() {

  return (
    <div className='calories'>
      <div className='content'>
        <div className='calories__text'>
          <h1 className='heading-one calories__title'>Calories Energy<br/> Balance</h1>
          <p className='body calories__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='calories__card'>
          {cards.map((card) => (
            <CaloriesCard
              key={card.title}
              picture={card.picture}
              title={card.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}