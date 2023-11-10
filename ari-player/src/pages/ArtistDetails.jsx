
import { useParams } from "react-router-dom";
import { useSelector,} from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetAlbumDetailsQuery, useGetArtistsDetailsQuery} from "../redux/services/shazamCore";
import AlbumCard from "../components/AlbumCard";


export default function ArtistDetails(){
  const {id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  
  const { data: artistsData, isFetching: isFetchingArtistsDetails, error} =
  useGetArtistsDetailsQuery(artistId);

  
   if (isFetchingArtistsDetails) return(
      <Loader title={"Loading artist details"}/>
   )
   if (error) return <Error />
   const artwork = artistsData?.data[0]?.attributes?.artwork;
   const artist = artistsData?.data[0]?.attributes;
   const artistBgImage = artwork?.url.replace('{w}', 2000).replace('{h}', 2000);
   const bgColor = artwork?.bgColor;

   const textColor1 = artwork?.textColor1;
   const textColor2 = artwork?.textColor2;
   const textColor3 = artwork?.textColor3;
   const textColor4 = artwork?.textColor4;

    const albumList = artistsData?.data[0].relationships?.albums?.data[0].id;
    //console.log(albumList);
  
   const artsistName = artist?.name
   const genreNames = artist?.genreNames[0];

   //console.log(albumList?.id)
  return (
      <>
    

         <div className={`flex flex-col h-52 relative px-4 pb-5
           rounded-lg bg-center bg-no-repeat bg-cover`} style={{backgroundImage: `url(${artistBgImage})`}}>

         <div className={`absolute inset-0 bg-[#${bgColor}] opacity-40 bg-opacity-40 rounded-lg`} style={{backgroundColor: `#${bgColor}`}}/>
         <div className="flex flex-col relative z-10 justify-center mt-10 items-center">
          <div className="self-start mt-10">
            <h2 className={`text-[#${textColor1}]  text-3xl font-extrabold`} style={{color: `#${textColor1}`}}>
            {artsistName}
          </h2>
          <p className={`text-[#${textColor4}] font-semibold ml-1 mt-1`} style={{color: `#${textColor4}`}}>{genreNames}</p>
          </div>
         </div>
          
         </div>
        <h3 className="mt-8  text-xl text-white">Album</h3>
         <div className="mt-3 flex flex-row flex-wrap
           gap-2">
                 <AlbumCard
                  albumList={albumList}
                  artistBgImage={artistBgImage} />
            
          </div>
         
         </>
  )
}