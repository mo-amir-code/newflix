import React from 'react'
import Image from 'next/image'
import tvLed from "../assets/frames/newflix_led_frame.png"
import children from "../assets/images/newflix_children.png"
import mobile from "../assets/images/newflix_mobile.jpg"
import mobile2 from "../assets/images/newflix_mobile_2.png"
import led_screen_1 from "../assets/images/newflix_led_1.jpg"
import download from "../assets/icons/arrow-download-svgrepo-com.svg"
import rightCaret from "../assets/icons/right-arrow-backup-2-svgrepo-com.svg"

const Featured_1 = () => {
    return (
        <div className='w-full h-[500px] font-[Bebas Neue] text-white border-b-8 border-border-bottom' >
            <div className='max-w-5xl h-full mx-auto flex max-[960px]:flex-col max-[600px]:gap-0 items-center justify-center px-4 py-4' >
                <div className='flex-grow max-[960px]:flex-none' >
                    <h3 className='text-5xl font-extrabold max-[960px]:text-3xl max-[600px]:text-xl max-[960px]:text-center' >Enjoy on your TV</h3>
                    <p className='text-2xl font-medium mt-4 max-[960px]:text-lg max-[600px]:text-sm max-[960px]:text-center' >Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className='w-[750px] max-[960px]:w-[400px] max-[450px]:w-[300px] relative' >
                    <Image src={led_screen_1} alt='movie' />
                    <div className='w-full h-full absolute left-0 top-0' >
                        <Image src={tvLed} alt='frame' />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Featured_2 = () => {
    return (
        <div className='w-full h-[500px] font-[Bebas Neue] text-white border-b-8 border-border-bottom' >
            <div className='max-w-5xl h-full mx-auto flex max-[960px]:flex-col max-[960px]:flex-col-reverse max-[600px]:gap-0 items-center justify-center px-4 py-4' >

                <div className='w-[750px] max-[960px]:w-[400px] max-[450px]:w-[300px] relative' >
                    <Image src={mobile} alt='movie' />
                    <div className='w-full h-full absolute left-0 top-52 max-[450px]:top-40' >
                        <div className='p-2 w-[300px] max-[450px]:w-[220px] flex items-center justify-between mx-auto rounded-lg border-border-bottom border-4 bg-black' >
                            <div className='flex items-center justify-center gap-4' >
                                <div className='w-[60px]' >
                                    <Image src={mobile2} alt='frame' />
                                </div>
                                <div>
                                    <h4 className='text-base font-bold' >Stranger Things</h4>
                                    <p className='text-xs font-medium text-blue-600' >Downloading...</p>
                                </div>
                            </div>
                            <div className='w-12' >
                                <Image src={download} alt='download' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex-grow max-[960px]:flex-none' >
                    <h3 className='text-5xl font-extrabold max-[960px]:text-3xl max-[600px]:text-xl max-[960px]:text-center' >Download your shows to watch offline</h3>
                    <p className='text-2xl font-medium mt-4 max-[960px]:text-lg max-[600px]:text-sm max-[960px]:text-center' >Save your favourites easily and always have something to watch.</p>
                </div>

            </div>
        </div>
    )
}

const Featured_3 = () => {
    return (
        <div className='w-full h-[500px] font-[Bebas Neue] text-white border-b-8 border-border-bottom' >
            <div className='max-w-5xl h-full mx-auto flex max-[960px]:flex-col max-[600px]:gap-0 items-center justify-center px-4 py-4' >
                <div className='flex-grow max-[960px]:flex-none max-[960px]:gap-2' >
                    <h3 className='text-5xl font-extrabold max-[960px]:text-3xl max-[600px]:text-xl max-[960px]:text-center' >Watch everywhere</h3>
                    <p className='text-2xl font-medium mt-4 max-[960px]:text-lg max-[600px]:text-sm max-[960px]:text-center' >Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className='w-[750px] max-[960px]:w-[400px] max-[450px]:w-[300px] relative' >
                    <Image src={children} alt='movie' />
                </div>
            </div>
        </div>
    )
}

const CallToAction = () => {
    return (
        <div className='w-full font-[Bebas Neue] text-white border-b-8 border-border-bottom' >
            <div className='max-w-5xl h-full mx-auto flex px-4 py-24' >
                <div className='max-w-5xl mx-auto flex flex-col gap-4' >
                    <p className='text-xl max-[960px]:text-base max-[400px]:text-sm font-base text-center' >Ready to watch? Enter your email to create or restart your membership.</p>
                    <form className='flex flex-wrap items-center justify-center w-full gap-3 max-w-2xl mx-auto' >
                        <input type="email" placeholder='Email address' className='py-[0.85rem] rounded-md px-3 bg-black/30 outline-none border border-gray-500 flex-grow' />
                        <button className='px-5 py-3 bg-primary rounded-md flex items-center gap-2 text-2xl max-[960px]:text-lg max-[400px]:text-base font-semibold' >Get Started <Image src={rightCaret} alt='caret button icon' className='w-4 text-white' /></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export { Featured_1, Featured_2, Featured_3, CallToAction }
