
import Image from 'next/image'
import { imageBaseUrl } from '@/lib/constants'
import imdb from "@/assets/icons/imdb.png"
import { heroMovieType } from '@/lib/services/service'
import Link from 'next/link'

type movieType = {
    movie: heroMovieType,
    cardRef:any
}

const MovieCard = ({ movie, cardRef }: movieType) => {

    return (
        <div ref={cardRef} className='w-52 hover:-translate-y-2 py-4 transition-all cursor-pointer' >
            <Link href={`/movie/${movie.id}`}>
                <div className='w-full flex items-center justify-center gap-2 flex-col p-3' >
                    <div className='w-44 overflow-hidden' >
                        <Image src={`${imageBaseUrl}w500${movie?.poster_path}`} alt={movie?.title} width={200} height={240} className='object-cover object-center w-full' />
                    </div>
                    <div className='w-full px-1 flex items-center gap-2' >
                        <div className='w-8' >
                            <Image src={imdb} alt='imdb' />
                        </div>
                        <span className='text-xs font-semibold' >{movie?.vote_average}</span>
                    </div>
                    <h3 className='text-base font-semibold w-full px-1' >{movie?.original_title?.length > 12 ? `${movie?.original_title.slice(0, 18)}...` : movie?.original_title}</h3>
                    <p className='text-xs font-medium w-full px-1 text-gray-500' >{movie?.release_date}</p>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard
