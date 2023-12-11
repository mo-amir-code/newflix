import React from 'react'
import MovieCard from './MovieCard'
import { heroMovieType } from '@/lib/services/service'

type trendingType = {
    popular: Array<heroMovieType> | []
}

const Popular = ({ popular }: trendingType) => {

    return (
        <div className='relative w-full border-b-4 border-border-bottom py-12 px-4' >
            <div className='max-w-5xl w-full mx-auto space-y-6' >
                <h2 className='text-4xl font-bold max-[960px]:text-3xl max-[600px]:text-xl' >Popular</h2>
                <div className='w-full overflow-auto flex items-center gap-4 hideScrollbar' >
                    {popular?.map((movie: heroMovieType) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Popular