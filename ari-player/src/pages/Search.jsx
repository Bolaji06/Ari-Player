import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";

import { useParams } from "react-router-dom";
import { useGetSongBySearchQuery } from "../redux/services/shazamGenre";


export default function Search(){
    const { searchTerm } = useParams()
    const { data, error, isLoading } = useGetSongBySearchQuery(searchTerm);

    const { activeSong, isPlaying } = useSelector((state) => state.player);

    if (isLoading) return <Loader title="Loading Songs..."/>;
    if (error) return <Error message="Can't retrieve song now"/>

    return (
        <>
            <div className="flex flex-col">
                <h2 className="text-2xl mb-4 text-white font-bold">Search: <span
                className="capitalize">{searchTerm}</span></h2>
                <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                     {data?.tracks?.hits?.map((song, index) =>{
                        //console.log(song)
                        return (
                            <SongCard
                                key={song.key}
                                song={song}
                                isPlaying={isPlaying}
                                activeSong={activeSong}
                                songIndex={index}
                                data={data}
                            />
                        )
                    })}

                </div>

            </div>
        </>
    )
}