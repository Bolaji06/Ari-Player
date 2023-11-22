import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCountryApi = createApi({
    reducerPath: "shazamCountry",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-api6.p.rapidapi.com",
        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", "da7fe6416emsh98f4aa5a1edb13ep19d200jsn5b91b6a03e26")
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCountrySongs: builder.query({query: (countryCode) => `/shazam/top_tracks_country?country_code=${countryCode}`}),
       
    })
})
export const { useGetCountrySongsQuery} = shazamCountryApi;