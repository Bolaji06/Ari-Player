
import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


    export const shazamCoreApi = createApi({
        reducerPath: "shazamCoreApi",
        baseQuery: fetchBaseQuery({
            baseUrl: "https://shazam.p.rapidapi.com",
            prepareHeaders: (headers) => {
                headers.set("X-RapidAPI-Key", "da7fe6416emsh98f4aa5a1edb13ep19d200jsn5b91b6a03e26");
                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => "/charts/track" }),
            getSongDetails: builder.query({ query: ({ songid }) => `/songs/get-details?key=${songid}`}),
            getRelatedSongs: builder.query({ query: ({ songid }) => `/shazam-songs/list-similarities?id=track-similarities-id-${songid}`}),
            getArtistsDetails: builder.query({ query: (artistId) => `/artists/get-details?id=${artistId}`}),
            getAlbumDetails: builder.query({ query: (albumId) => `/albums/get-details?id=${albumId}`}),
            
        }), 
    })
    export const { useGetTopChartsQuery, useGetSongDetailsQuery,
         useGetRelatedSongsQuery, useGetArtistsDetailsQuery, useGetAlbumDetailsQuery }  = shazamCoreApi;