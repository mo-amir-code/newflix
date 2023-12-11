'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { fetchMovieById, fetchPopularMovies, fetchTrendingMovies, fetchUpcomingMovies, heroMovieType, MovieType } from '@/lib/services/service'
import { imageBaseUrl } from '@/lib/constants'
import Image from 'next/image'
import { Divider } from '@/app/explore/page'
import ProductionCompanies from '@/components/ProductionCompanies'
import imdb from "@/assets/icons/imdb.png"
import Upcoming from '@/components/Upcoming'
import Trending from '@/components/Trending'
import Popular from '@/components/Popular'
import MovieHeader from '@/components/MovieHeader'


const MoviePage = () => {
    const [programInfo, setProgramInfo] = useState<MovieType | null>(null)
    const [trending, setTrending] = useState<Array<heroMovieType> | []>([]);
    const [popular, setPopular] = useState<Array<heroMovieType> | []>([]);
    const [upcoming, setUpcoming] = useState<Array<heroMovieType> | []>([]);
    const { movieId } = useParams();

    useEffect(() => {
        try {
            const fetchMovieByIdInit = async () => {
                const data: MovieType = await fetchMovieById({ movieId });
                console.log(data);
                setProgramInfo(data)
            }
            fetchMovieByIdInit()
        } catch (err: any) {
            console.log(err.message);

        }
    }, [movieId])

    useEffect(() => {
        const fetchHeroMovie = async () => {
            try {
                const trendingData: any = await fetchTrendingMovies()
                const popularData: any = await fetchPopularMovies()
                const upcomingData: any = await fetchUpcomingMovies()
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
                {!!programInfo && <Image src={`${imageBaseUrl}w500${programInfo?.backdrop_path || ''}`} width={500} height={500} alt='showcase Image' className='w-full h-full object-cover object-top' />}
                <div className='bg-gradient-radial bg-black/30 absolute top-0 left-0 from-transparent to-black w-full h-full' />
                <div className='bg-gradient-to-tr absolute top-0 left-0 from-black to-transparent w-full h-full' />
                <MovieHeader/>
                <div className='absolute top-36 max-[600px]:top-44 max-[400px]:top-32 max-[310px]:top-24 left-0 w-full' >
                    <div className='max-w-5xl w-full mx-auto flex items-center justify-between px-4' >
                        <div className='flex-grow max-w-2xl max-[960px]:max-w-xl max-[600px]:max-w-lg w-full space-y-4' >
                            <div className='flex items-center flex-wrap gap-4 text-xs font-medium max-[600px]:text-[0.6rem]' >
                                {programInfo?.genres.map((genre: { id: number, name: string }) => (
                                    <>
                                        <span key={genre.id} >{genre.name}</span>
                                        <Divider />
                                    </>
                                ))}
                                <div className='flex items-center gap-2' >
                                    <div className='w-8' >
                                        <Image src={imdb} alt='imdb' className='object-contain w-full' />
                                    </div>
                                    <span>{programInfo?.vote_average} / 10</span>
                                </div>
                            </div>
                            <h1 className='text-4xl max-[960px]:text-3xl max-[600px]:text-lg font-bold tracking-wider' >{programInfo?.original_title}</h1>
                            <p className='max-[600px]:text-[0.6rem]' >{programInfo?.overview}</p>
                            <div className='flex items-center gap-4 text-xs font-medium max-[600px]:text-[0.6rem]' >
                                {programInfo?.spoken_languages.map((language: {
                                    english_name: string,
                                    iso_639_1: string,
                                    name: string
                                }) => (
                                    <>
                                        <span key={language.name} >{language.name}</span>
                                        <Divider />
                                    </>
                                ))}
                                <span>Release Date: {programInfo?.release_date}</span>
                            </div>
                            <div className='flex items-center gap-3' >
                                <button className='py-3 px-4 bg-primary rounded-full text-xs font-semibold max-[600px]:text-[0.6rem]' >WATCH NOW</button>
                            </div>
                        </div>
                        <div className='max-[800px]:hidden' >
                            <Image src={`${imageBaseUrl}w500${programInfo?.poster_path}`} alt={programInfo?.original_title || ""} width={180} height={200} />
                        </div>
                    </div>
                </div>
            </div>

            {!!programInfo && <ProductionCompanies productionCompanies={programInfo?.production_companies} />}

            {/* Trending */}
            <Trending trending={trending} />

            {/* Upcoming */}
            <Upcoming upcoming={upcoming} />

            {/* Popular */}
            <Popular popular={popular} />
        </div>
    )
}

export default MoviePage
