
import {MenuHeader} from '@/components/menu-header/Menu-header';
import {Reservation} from '@/components/reservation/Reservation';
import Footer from '@/components/footer/Footer';

export default function NewMenu()  {
  return (
    <main className='main'>
      <MenuHeader />
      <Reservation />
      <Footer />
    </main>
  )
}