/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules'
import { Link } from 'react-router-dom';

import PlayPause from './PlayPause';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import 'swiper/css';
import 'swiper/css/free-mode';
import { useEffect, useRef } from 'react';

function TopChartCard({ song, index, isPlaying, activeSong,
   handlePauseClick, handlePlayClick}){

  return (
    <>
      <div className='w-full flex flex-row items-center hover:bg-[#4c426e]
      py-2 p-4 rounded-lg cursor-pointer mb-2'>
        <h3 className='text-white text-base mr-3'>{index + 1}.</h3>
        <div className='flex-1 flex flex-row justify-between items-center'>
          <img className='w-20 h-20 rounded-lg' src={song?.images?.coverart} alt={song?.title} />
          <div className='flex-1 flex flex-col justify-center mx-3'>
            <Link to={`/songs/${song.key}`}>
              <p className='text-white text-xl font-bold'>{song?.title}</p>
            </Link>

            <Link to={`/artists/${song?.artists[0].adamid}`}>
              <p className='text-base text-gray-300 mt-1'>{song?.subtitle}</p>
            </Link>
          </div>
        </div>
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={()=> handlePlayClick(song, index)}/>


      </div>
    </>
  )
}

export default function TopPlay(){
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  useEffect(()=>{
    divRef.current.scrollIntoView({ behavior: 'smooth' });

  });

  const topPlays = data?.tracks?.slice(0, 5);


  function handlePlayClick(song, index){
    dispatch(setActiveSong({ song, data, index}));
    dispatch(playPause(true));
 
   }
 
   function handlePauseClick(){
     dispatch(playPause(false));
 
   }

  return (
    <>
      <div ref={divRef} className='xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1
      xl:max-w-[500px] max-w-full flex flex-col'>
        <div className='w-full flex flex-col'>
          <div className='flex flex-row justify-between items-center'>
            <h2 className='text-white text-2xl font-bold'>
              Top Charts
            </h2>
            <Link to={'/top-charts'}>
              <p className='text-gray-300 text-base cursor-pointer'>
                See more</p>
            </Link>
          </div>

          <div className='mt-4 flex flex-col gap-1'>
            {topPlays?.map((song, index) => {
              return <TopChartCard
                key={song.key}
                song={song}
                index={index}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}/>
            })}
          </div>
        </div>

        <div className='w-full flex flex-col mt-8'>
          <div className='flex flex-row justify-between items-center'>
              <h2 className='text-white text-2xl font-bold'>
                Top Artists
              </h2>
              <Link to={'/top-artists'}>
                <p className='text-gray-300 text-base cursor-pointer'>
                  See more</p>
              </Link>
            </div>
            <Swiper
              slidesPerView="auto"
              spaceBetween={15}
              freeMode
              centeredSlides
              centeredSlidesBounds
              modules={[FreeMode]}
              className='mt-4'
              >
                 {topPlays?.map((song, index) =>{
                  return <SwiperSlide
                      key={song?.key}
                      style={{width: "25%", height: 'auto'}}
                      className='shadow-lg rounded-full
                      animate-slideright scroll-smooth'> 

                    <Link to={`/artists/${song?.artists[0].adamid}`}>
                      <img src={song?.images.background} alt="name"
                      className='rounded-full w-full object-cover'/>
                    </Link>
                  </SwiperSlide>
                })}
            </Swiper>
        </div>

      </div>

    </>
  )
}