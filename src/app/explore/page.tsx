"use client"
import Image from 'next/image'
import React, {useEffect, useState } from 'react'
import { fetchBannerMovie, fetchPopularMovies, fetchTrendingMovies, fetchUpcomingMovies } from "@/lib/services/service"
import { imageBaseUrl } from '@/lib/constants'
import { heroMovieType } from '@/lib/services/service'
import imdb from "../../assets/icons/imdb.png"
import Trending from '@/components/Trending'
import Link from 'next/link'
import Popular from '@/components/Popular'
import Upcoming from '@/components/Upcoming'
import ExploreHeader from '@/components/ExploreHeader'

const page = () => {

    const [heroMovie, setHeroMovie] = useState<heroMovieType | null>(null);
    const [trending, setTrending] = useState<Array<heroMovieType> | []>([]);
    const [popular, setPopular] = useState<Array<heroMovieType> | []>([]);
    const [upcoming, setUpcoming] = useState<Array<heroMovieType> | []>([]);

    useEffect(() => {
        const fetchHeroMovie = async () => {
            try {
                const movieData: any = await fetchBannerMovie();
                const trendingData:any = await fetchTrendingMovies()
                const popularData:any = await fetchPopularMovies()
                const upcomingData:any = await fetchUpcomingMovies()
                setHeroMovie(movieData);
                setTrending(trendingData)
                setPopular(popularData)
                setUpcoming(upcomingData)
                // console.log(movieData);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        fetchHeroMovie();
    }, []);

    return (
        <div className='w-full relative font-[Bebas Neue] text-white' >
            <div className='relative w-full h-[540px] max-[600px]:h-[500px] border-b-4 border-border-bottom' >
                {!!heroMovie && <Image src={`${imageBaseUrl}w500${heroMovie?.backdrop_path || ''}`} width={500} height={500} alt='showcase Image' className='w-full h-full object-cover object-top' />}
                <div className='bg-gradient-radial bg-black/30 absolute top-0 left-0 from-transparent to-black w-full h-full' />
                <div className='bg-gradient-to-tr absolute top-0 left-0 from-black to-transparent w-full h-full' />
               <ExploreHeader />
                <div className='absolute top-36 max-[600px]:top-44 left-0 w-full' >
                    <div className='max-w-5xl w-full mx-auto flex items-center justify-between px-4' >
                        <div className='flex-grow max-w-2xl max-[960px]:max-w-xl max-[600px]:max-w-lg w-full space-y-4' >
                            <div className='flex items-center gap-4 text-xs font-medium ' >
                                <div className='flex items-center gap-2' >
                                    <div className='w-8' >
                                        <Image src={imdb} alt='imdb' className='object-contain w-full' />
                                    </div>
                                    <span>{heroMovie?.vote_average} / 10</span>
                                </div>
                                <Divider />
                                <span>{heroMovie?.release_date}</span>
                                <Divider />
                                <span>{heroMovie?.original_language}</span>
                            </div>
                            <h1 className='text-4xl max-[960px]:text-3xl max-[600px]:text-lg font-bold tracking-wider' >{heroMovie?.original_title}</h1>
                            <p className='max-[600px]:text-[0.6rem]' >{heroMovie?.overview}</p>
                            <div className='flex items-center gap-3' >
                                <Link href={`/movie/${heroMovie?.id}`} className='py-3 px-4 bg-primary rounded-full text-xs font-semibold max-[600px]:text-[0.6rem]' >WATCH NOW</Link>
                            </div>
                        </div>
                        <div className='max-[800px]:hidden' >
                            <Image src={`${imageBaseUrl}w500${heroMovie?.poster_path}`} alt={heroMovie?.original_title || ""} width={180} height={200} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Upcoming */}
            <Upcoming upcoming={upcoming} />

            {/* Trending */}
            <Trending trending={trending} />

            {/* Popular */}
            <Popular popular={popular} />
        </div>
    )
}

export function Divider() {
    return <span className='font-medium' >|</span>
}

export default page
