/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

export default  function DetailsHeader({ artistId, artistData, songData}){
  
  const artist = artistData?.artists[artistId].attributes

  return (
    <>
        <div className="relative w-full flex flex-col">
          <div className="w-full sm:h-48 h-28 bg-gradient-to-l
          from-transparent to-[#6F7777]"/>

          <div className="absolute inset-0 flex items-center">
            <img src={
              artistId ? artist?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
              : songData?.images?.coverart
            } alt="cover art"
            className="sm:w-48 sm:h-48 sm: w-28 h-28 rounded-full
            object-cover border-2 shadow-xl shadow-gray-900"/>

            <div className="ml-5">
              <p className="font-bold sm:text-3xl text-xl text-white">
                {artistId ? artist?.name : songData?.title}</p>

                {!artistId && (
                  <Link to={`/artist/${songData?.artists[0].adamid}`}>
                    <p className="text-base text-white mt-2">
                      {songData?.subtitle}
                    </p>
                  </Link>
                )}
                <p className="text-base text-gray-400 mt-2">
                  {
                    artistId ? artist?.genreNames[0] : songData?.genres?.primary
                  }

                </p>
            </div>
          </div>
          <div className="w-full sm:h-44 h-24"/>
        </div>
    </>
  )
}