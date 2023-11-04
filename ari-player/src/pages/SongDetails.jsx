
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetRelatedSongsQuery, useGetSongDetailsQuery } from "../redux/services/shazamCore";

export default function SongDetails(){
    const { songid } = useParams();
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    const { data: songData, isFetching: isFetchingSongDetails
     } = useGetSongDetailsQuery({ songid });

    const { data: relatedSong, isFetching: isFetchingRelatedSongDetails, error} =
    useGetRelatedSongsQuery({ songid });

    //console.log(relatedSong);


     //console.log(songid);

     if (isFetchingRelatedSongDetails || isFetchingSongDetails) return(
        <Loader title={"Searching song details"}/>
     )
     if (error) return <Error />
    
     function handlePlayClick(song, index){
        dispatch(setActiveSong({ song, index}));
        dispatch(playPause(true));
       }
     
        function handlePauseClick(){
            dispatch(playPause(false));
        }
     

     //const lyrics = <p>{songData?.sections[1].text}</p>
    return (
        <>
            <div className="flex flex-col">
                 <DetailsHeader 
                    artistId={""}
                    songData={songData}/>

                    <div className="mb-10">
                        <h2 className="text-white text-3xl font-bold">
                            Lyrics: 
                        </h2>

                        <div className="mt-5">
                            {songData?.sections[1].type === "LYRICS" ?
                             songData?.sections[1]?.text.map((line, index) =>{
                               return <p  key={index} className="text-gray-400 text-base my-1">{line}</p>
                             }) : <p className="text-gray-400 text-base my-1">No Lyrics</p>}
                        </div>
                        <footer className="text-center mt-10">
                           <p className="text-gray-500">{songData?.sections[1]?.footer}</p> 
                        </footer>
                    </div>
            </div>
            <RelatedSongs
                data={relatedSong}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePlayClick={handlePlayClick}
                handlePauseClick={handlePauseClick}
                />

        </>
    )
}