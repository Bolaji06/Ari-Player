import { useDispatch, useSelector } from "react-redux";
import { genres } from "../assets/constants";
import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

export default function Discover(){
    const { data, error, isLoading } = useGetTopChartsQuery();
    const genreTitle = "Pop";

    const dispatch = useDispatch()
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    //console.log(data)

    if (isLoading) return <Loader title="Loading Songs..."/>;
    if (error) return <Error message="Can't retrieve song now"/>

    return (
        <>
            <div className="flex flex-col">
                <div className="flex justify-between items-center
                sm:flex-row flex-col mt-4 mb-10">
                    <h2 className="font-bold text-3xl
                     text-white text-left">Discover {genreTitle}</h2>
                    <select
                    className="bg-black text-gray-300 p-3 text-sm
                    rounded-lg outline-none sm:mt-0 mt-5"
                    onChange={() => {}}
                    value={""}>
                        {
                            genres.map((genre) => {
                                return (
                                    <option key={genre.value}>{genre.title}</option>
                                )
                            })
                        }
                    </select>
                </div>

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