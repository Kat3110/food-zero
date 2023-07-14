import './home.css'
import {HeroHeader} from "@/components/hero-header/HeroHeader";
import {Menu} from "@/components/menu/Menu";

export default function Home() {
  return (
    <main className='main'>
      <HeroHeader />
      <Menu />
    </main>
  )
}
