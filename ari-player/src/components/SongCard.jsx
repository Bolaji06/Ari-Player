/* eslint-disable react/prop-types */
import PlayPause from "./PlayPause";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import { playPause, setActiveSong } from "../redux/features/playerSlice"


export default function SongCard({ song, index, activeSong, isPlaying, data }){
  //const activeSong = "Test";

  const dispatch = useDispatch();

  function handlePlayClick(){
   dispatch(setActiveSong({ song, data, index}));
   dispatch(playPause(true));

  }

  function handlePauseClick(){
    dispatch(playPause(false));

  }



  return (
    <>
      <div className="flex flex-col lg:w-[250px] w-[180px]  p-4 bg-white/5
      bg-opacity-80 backdrop-blur-sm rounded-lg
      cursor-pointer pulse">

        <div className="relative w-full lg:h-56 sm:h-[150px] group">
          <div className={`absolute inset-0 justify-center items-center
          bg-black bg-opacity-50 group-hover:flex ${activeSong?.title
          === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          
          <PlayPause 
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            isPlaying={isPlaying}
            activeSong={activeSong}/>

          </div>
          <img src={song.images?.coverart || song.images.default} alt="Cover Image" />
        </div>
        <div className="mt-4 flex flex-col">
          <p className="font-semibold text-base lg:text-lg text-white truncate hover:underline">
            <Link to={`/songs/${song?.key}`}>
              {song.title || song.heading.title}
            </Link>
          </p>
          <p className="text-sm truncate text-gray-300 mt-1 hover:underline">
            <Link to={song.artists ? `/artists/${song?.artists[0]
            ?.adamid}` : '/top-artists'}>
              {song.subtitle || song.heading.subtitle}
            </Link>
          </p>

        </div>

      </div>
    </>
  ) 
}