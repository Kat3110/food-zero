import {MenuHeader} from '@/components/menu-header/Menu-header';
import {Reservation} from '@/components/reservation/Reservation';
import {Starters} from '@/components/starters/Starters';
import Footer from '@/components/footer/Footer';

import Blueberry from '../../../public/Blueberry.svg';
import Avocado from '../../../public/Avocado.svg';
import ImgContentStarters from '../../../public/Starters.png';
import ImgContentMains from '../../../public/Mains.png';
import ImgContentDrinks from '../../../public/Drinks.png';

export default function NewMenu() {
  return (
    <main className="main">
      <MenuHeader/>
      <Starters
        title='Starters'
        icon={Blueberry}
        ImgContent={ImgContentStarters}
      />
      <Starters
        isRevers
        title='Mains'
        ImgContent={ImgContentMains}
      />
      <Starters
        isAvocado
        title='Pastries & Drinks'
        icon={Avocado}
        ImgContent={ImgContentDrinks}
      />
      <Reservation/>
      <Footer/>
    </main>
  )
}