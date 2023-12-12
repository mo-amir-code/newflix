import React from 'react'
import Image from 'next/image'
import logo from "../assets/images/newflix_bg.png"
import rightCaret from "../assets/icons/right-arrow-backup-2-svgrepo-com.svg"
import HeroHeader from './HeroHeader'
import Link from 'next/link'


const Hero = () => {

  return (
    <div className='w-full h-[580px] max-[600px]:h-[500px] relative font-[Bebas Neue] text-white border-b-8 border-border-bottom' >
      <Image src={logo} alt='logo' className='w-full h-full object-cover object-top' />
      <div className='bg-gradient-radial bg-black/30 absolute top-0 left-0 from-transparent to-black w-full h-full' />
      <HeroHeader />
      <div className='absolute top-0 left-0 w-full h-full px-4 z-0' >
        <div className='max-w-5xl mx-auto mt-60 max-[600px]:mt-32 max-[400px]:mt-28 flex flex-col gap-4' >
          <h2 className='text-5xl max-[960px]:text-3xl max-[400px]:text-2xl font-extrabold text-center' >Laughter. Tears. Thrills. Find it all on Netflix.</h2>
          <p className='text-2xl max-[960px]:text-lg max-[400px]:text-base font-base text-center' >Endless entertainment starts at just ₹149. Cancel anytime.</p>
          <p className='text-xl max-[960px]:text-base max-[400px]:text-sm font-base text-center' >Ready to watch? Enter your email to create or restart your membership.</p>
          <form className='flex flex-wrap items-center justify-center w-full gap-3 max-w-2xl mx-auto' >
            <input type="email" placeholder='Email address' className='py-[0.85rem] rounded-md px-3 bg-black/30 outline-none border border-gray-500 flex-grow' />
            <Link href={"/signin"} className='px-5 py-3 bg-primary rounded-md flex items-center gap-2 text-2xl max-[960px]:text-lg max-[400px]:text-base font-semibold' >Get Started <Image src={rightCaret} alt='caret button icon' className='w-4 text-white' /></Link>
          </form>
        </div>
      </div>
    </div>
  )
}
// ${process.env.NEXT_PUBLIC_API_KEY}

export default Hero
