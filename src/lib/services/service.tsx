

type response = {
    page: Number,
    results: any
}

export type heroMovieType = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: [],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export const fetchBannerMovie = () => {
    return new Promise(async (resolved, rejected) => {
        try {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}`).then((res) => res.json()).then((data: response) => {
                // console.log(data);
                const rn = Math.floor(Math.random() * data.results.length)
                const returnData: heroMovieType = data.results[rn]
                resolved(returnData)
            })
        } catch (err: any) {
            console.log(err.message)
            rejected(err.message)
        }
    })
}

export const fetchTrendingMovies = () => {
    return new Promise(async (resolved, rejected) => {
        try {
            fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`).then((res) => res.json()).then((data: response) => {
                const returnData = data.results
                resolved(returnData)
            })
        } catch (err: any) {
            console.log(err.message)
            rejected(err.message)
        }
    })
}

export const fetchPopularMovies = () => {
    return new Promise(async (resolved, rejected) => {
        try {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`).then((res) => res.json()).then((data: response) => {
                const returnData = data.results
                resolved(returnData)
            })
        } catch (err: any) {
            console.log(err.message)
            rejected(err.message)
        }
    })
}

export const fetchUpcomingMovies = () => {
    return new Promise(async (resolved, rejected) => {
        try {
            fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}`).then((res) => res.json()).then((data: response) => {
                const returnData = data.results
                resolved(returnData)
            })
        } catch (err: any) {
            console.log(err.message)
            rejected(err.message)
        }
    })
}

type movieById = {
    movieId:string
}

export type ProductionCompaniesType = {
    id:number,
    logo_path:string,
    name:string,
    origin_country:string
}

type ProductionCountriesType = {
    iso_3166_1:string,
    name:string
}

type SpokenEnglishType = {
    english_name:string,
    iso_639_1:string,
    name:string
}

export type MovieType = {
    adult:boolean,
    backdrop_path:string,
    belongs_to_collection:any,
    budget:number,
    genres:Array<{id:number, name:string}>,
    homepage:string,
    id:number,
    imdb_id:string,
    original_language:string,
    original_title:string,
    overview:string,
    popularity:number,
    poster_path:string,
    production_companies:Array<ProductionCompaniesType>,
    production_countries:Array<ProductionCountriesType>
    release_date:string,
    revenue:number,
    runtime:number,
    spoken_languages:Array<SpokenEnglishType>,
    status:string,
    tagline:string,
    title:string,
    video:boolean,
    vote_average:number,
    vote_count:number
}

export const fetchMovieById = ({movieId}: movieById) => {
    return new Promise(async (resolved, rejected) => {
        try {
            fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`).then((res) => res.json()).then((data: MovieType) => {
                resolved(data)
            })
        } catch (err: any) {
            console.log(err.message)
            rejected(err.message)
        }
    })
}