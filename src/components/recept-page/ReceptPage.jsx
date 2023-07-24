import './recept-page.scss'
import Img from '../../../public/recept.png'
import Avatar from '../../../public/Avatar.png'
import Avatar2 from '../../../public/Avatar1.png'
import Img2 from '../../../public/recept1.png'
import {Recept} from "@/components/recept/Recept";

const cards = [
  {
    picture: Img,
    avatar: Avatar,
    nickname: 'Julie Christie',
    data: 'October 17,2021',
    time: '3:33 pm',
    comment: '2 comments',
    title: 'Fruit and vegetables and protection against diseases',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },
  {
    picture: Img2,
    avatar: Avatar2,
    nickname: 'Dianne Russell',
    data: 'October 17,2021',
    time: '3:33 pm',
    comment: '2 comments',
    title: 'Asparagus Spring Salad with Rocket, Goat\'s Cheese',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },
]

export function ReceptPage() {
  return (
      <section className='recept-page content'>
        {cards.map((card) => (
          <Recept
            key={card.nickname}
            picture={card.picture}
            avatar={card.avatar}
            nickname={card.nickname}
            data={card.data}
            time={card.time}
            comment={card.comment}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
      </section>
  )
}