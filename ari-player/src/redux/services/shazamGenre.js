// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// export const shazamGenreApi = createApi({
//     reducerPath: "shazamGenre",
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://shazam-api7.p.rapidapi.com',
//         prepareHeaders: (headers) => {
//             headers.set('X-RapidAPI-Key', 'da7fe6416emsh98f4aa5a1edb13ep19d200jsn5b91b6a03e26')
//             return headers
//         }
//     }),
//     endpoints: (builder) => ({
//         getSongGenre: builder.query({ query: (genre) => `/charts/get-top-songs-in_world_by_genre/genre?=${genre}`})
//     })
// })
// export const { useGetSongGenreQuery } = shazamGenreApi

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamGenreApi = createApi({
    reducerPath: "shazamGenre",
    baseQuery: fetchBaseQuery({
                baseUrl: 'https://shazam-api7.p.rapidapi.com',
                prepareHeaders: (headers) => {
                    headers.set('X-RapidAPI-Key', 'da7fe6416emsh98f4aa5a1edb13ep19d200jsn5b91b6a03e26')
                    return headers
                }
            }),
    endpoints: (builder) => ({
        getSongGenre: builder.query({query: (genre) => `/charts/get-top-songs-in_world_by_genre?genre=${genre}`}),
        getSongBySearch: builder.query({query: (searchTerm) => `/search?term=${searchTerm}&limit=10`}),
    })
})
export const { useGetSongGenreQuery, useGetSongBySearchQuery} = shazamGenreApi;