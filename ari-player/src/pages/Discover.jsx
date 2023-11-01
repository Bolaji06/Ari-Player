import { genres } from "../assets/constants";
import { Error, Loader, SongCard } from "../components";
import { useGetTopChartQuery } from "../redux/services/shazamCore";

export default function Discover(){
    const { data, error, isLoading } = useGetTopChartQuery();
    const genreTitle = "Pop";

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
                     {data?.map((song, index) =>{
                        return (
                            <SongCard
                                key={index}
                                song={song}
                                songIndex={index}
                            />
                        )
                    })}

                </div>

            </div>
        </>
    )
}