import './home.css'
import {HeroHeader} from "@/components/hero-header/HeroHeader";
import {Menu} from "@/components/menu/Menu";
import {ExcellentCook} from "@/components/excellent-cook/ExcellentCook";

export default function Home() {
  return (
    <main className='main'>
      <HeroHeader />
      <Menu />
      <ExcellentCook/>
    </main>
  )
}
