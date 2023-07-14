import './structure.css'
import Image from "next/image";
import Fish from '../../../public/Icon_fish.svg'
import Lemon from '../../../public/Icon_lemon.svg'
import Carrot from '../../../public/Icon_carrot.svg'

export function Structure() {
  return (
   <div className='structure content'>
     <div className='structure__card'>
       <span className='structure__icon'>
         <Image src={Fish} alt='fish'/>
       </span>
       <h2 className='heading-four structure__title'>Premium Quality</h2>
       <p className='body structure__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
     </div>

     <div className='structure__card'>
       <span className='structure__icon'>
         <Image src={Carrot} alt='Carrot'/>
       </span>
       <h2 className='heading-four structure__title'>Seasonal Vegetables</h2>
       <p className='body structure__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
     </div>

     <div className='structure__card'>
       <span className='structure__icon'>
         <Image src={Lemon} alt='Lemon'/>
       </span>
       <h2 className='heading-four structure__title'>Fresh Fruit</h2>
       <p className='body structure__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
     </div>
   </div>
  )
}