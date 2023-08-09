

import Footer from '@/components/footer/Footer';
import {Reservation} from '@/components/reservation/Reservation';
import {AboutHeader} from '@/components/about-header/About-header';
import {AboutStory} from '@/components/about-story/About-story';


export default function Contact() {
  return (
    <main className="main">
      <AboutHeader />
      <AboutStory />
      <Reservation />
      <Footer/>
    </main>
  )
}