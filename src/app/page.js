import './home.css'
import {HeroHeader} from "@/components/hero-header/HeroHeader";
import {OurMenu} from "@/components/our-menu/Our-menu";
import {ExcellentCook} from "@/components/excellent-cook/ExcellentCook";
import {Structure} from "@/components/structure/Structure";
import {ReceptPage} from "@/components/recept-page/ReceptPage";
import {Reservation} from "@/components/reservation/Reservation";
import {Calories} from "@/components/calories/Calories";
import {Reviews} from "@/components/reviews/Reviews";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className='main'>
      <HeroHeader />
      <OurMenu />
      <ExcellentCook/>
      <Structure/>
      <ReceptPage/>
      <Reservation />
      <Calories />
      <Reviews />
      <Footer />
    </main>
  )
}
