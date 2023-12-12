
import React, { useRef } from 'react'
import MovieCard from './MovieCard'
import { heroMovieType } from '@/lib/services/service'
import rightArrow from "@/assets/icons/right.png"
import leftArrow from "@/assets/icons/left.png"
import Image from 'next/image'

type upcomingType = {
    upcoming: Array<heroMovieType> | []
}

const Upcoming = ({ upcoming }: upcomingType) => {
    const listRef = useRef<HTMLDivElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)

    const handleNext = () => {
        if (listRef.current && cardRef.current) {
                listRef.current.scrollBy({ left: 220, behavior: 'smooth' });
        }
    }

    const handlePrev = () => {
        if (listRef.current && cardRef.current) {
            listRef.current.scrollBy({ left: -220, behavior: 'smooth' });
    }
    }

    return (
        <div className='relative w-full border-b-4 border-border-bottom py-12 px-4' >
            <div className='max-w-5xl w-full mx-auto space-y-6 relative' >
                <h2 className='text-4xl font-bold max-[960px]:text-3xl max-[600px]:text-xl' >Upcoming</h2>
                <div ref={listRef} className='w-full overflow-auto flex items-center gap-4 hideScrollbar' >
                    {upcoming?.map((movie: heroMovieType) => (
                        <MovieCard cardRef={cardRef} key={movie.id} movie={movie} />
                    ))}
                </div>
                <div onClick={handlePrev} className='absolute top-[40%] cursor-pointer -translate-y-[50%] left-6 p-2 rounded-full bg-white' >
                    <Image src={leftArrow} alt='left arrow' className='w-6' />
                </div>
                <div onClick={handleNext} className='absolute top-[40%] cursor-pointer -translate-y-[50%] right-6 p-2 rounded-full bg-white' >
                    <Image src={rightArrow} alt='right arrow' className='w-6' />
                </div>
            </div>
        </div>
    )
}

export default Upcoming
