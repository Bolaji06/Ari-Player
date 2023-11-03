/* eslint-disable react/prop-types */

import  SongBar  from './SongBar'
export default function RelatedSongs({
  data, isPlaying, activeSong, handlePauseClick, handlePlayClick,artistId
}){
  //console.log(data?.resources?.['shazam-songs'])
  const shazamRelatedSong = data?.resources?.['shazam-songs'];

  console.log(Object.values(shazamRelatedSong).forEach((item) => console.log(item.attributes)));

  const relatedSongList = Object.values(shazamRelatedSong)

  return (
    <>
      <div className='flex flex-col'>
        <h1 className='font-bold text-white text-3xl'>
          Related Songs:
        </h1>
        <div className='mt-6 w-full flex flex-col'>
         
         {
          relatedSongList.map((song, index) => {
           return <SongBar 
            key={index}
            song={song.attributes}
            i={index}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
            activeSong={activeSong}
            artistId={artistId}
            />
          })
         }
        </div>

      </div>
    </>
  )
}