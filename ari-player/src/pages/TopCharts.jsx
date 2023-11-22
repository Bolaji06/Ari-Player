import { useDispatch, useSelector } from "react-redux";
import { genres } from "../assets/constants";
import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

export default function TopCharts(){
    const { data, error, isLoading } = useGetTopChartsQuery();

    const dispatch = useDispatch()
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    //console.log(data)

    if (isLoading) return <Loader title="Loading Songs..."/>;
    if (error) return <Error message="Can't retrieve song now"/>

    return (
        <>
            <div className="flex flex-col">
                <h2 className="text-2xl text-white font-bold">Top Chart</h2>
                <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                     {data?.tracks?.map((song, index) =>{
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