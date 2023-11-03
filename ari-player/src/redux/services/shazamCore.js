
import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '6914218c0fmshd18c6ef6d0592a4p1a6104jsn25df1ef2bcb4',
//       'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam.p.rapidapi.com/charts/track', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

// /shazam-songs/list-similarities

    export const shazamCoreApi = createApi({
        reducerPath: "shazamCoreApi",
        baseQuery: fetchBaseQuery({
            baseUrl: "https://shazam.p.rapidapi.com",
            prepareHeaders: (headers) => {
                headers.set("X-RapidAPI-Key", "6914218c0fmshd18c6ef6d0592a4p1a6104jsn25df1ef2bcb4");
                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => "/charts/track" }),
            getSongDetails: builder.query({ query: ({ songid }) => `/songs/get-details?key=${songid}`}),
            getRelatedSongs: builder.query({ query: ({ songid }) => `/shazam-songs/list-similarities?id=track-similarities-id-${songid}`}),
        }),
    })
    export const 
    { useGetTopChartsQuery, useGetSongDetailsQuery, useGetRelatedSongsQuery }  = shazamCoreApi;