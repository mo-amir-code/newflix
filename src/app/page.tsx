import {CallToAction, Featured_1, Featured_2, Featured_3} from '@/components/Featured'
import Hero from '@/components/Hero'

export default function Home() {
  return (
   <div>
    <Hero/>
    <Featured_1 />
    <Featured_2 />
    <Featured_3/>
    <CallToAction />
   </div>
  )
}
