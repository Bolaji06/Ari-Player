import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useGetCountrySongsQuery } from '../redux/services/shazamCountry';

import Loader from '../components/Loader';
import Error from '../components/Error';
import SongBar from '../components/SongBar';
import SongCard from '../components/SongCard';

export default function AroundYou(){
    const [country, setCountry] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    const { data, isFetching, error } = useGetCountrySongsQuery(country);
    
    const trackList = data?.result?.tracks?.slice(0, 90);

    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_GecOCnvZwjfu5YejDwgCY8y7YrtM3`)
        .then((response) => setCountry(response?.data?.location?.country))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }, [country]);

    if (isFetching && isLoading) return <Loader title="Loading Songs Around You"/>;
    if (error && country) return <Error />

    return (
        <>
            <div className='flex flex-col'>
                <h2 className='font-bold text-2xl text-white text-left
                 mb-10'
                >Around You <span className='text-lg'>{country}</span></h2>

                <div className='flex flex-wrap sm:justify-start
                justify-center gap-8'>
                   {
                    trackList ? trackList.map((track, index) =>{
                        return (
                            <SongCard
                                key={track.key}
                                song={track}
                                data={data}
                                isPlaying={isPlaying}
                                activeSong={activeSong}
                                i={index}
                            />
                        )
                    }): <Loader title={"Loading"}/>
                   }

                </div>

            </div>

        </>
    )
}
