/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useGetAlbumDetailsQuery } from "../redux/services/shazamCore"
import Error from "./Error"
import Loader from "./Loader";

export default function AlbumCard({ artistBgImage, albumList }){
    const [albumImage, setAlbumImage] = useState("");
    const [albumTitle, setAlbumTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [albumData, setAlbumData] = useState([]);


    return (
        <>
        
                    <div className="w-[180px] bg-slate-500 bg-opacity-20 rounded-lg p-4
                    shadow-lg">
        
                        
                             <div>
                                    <img src={albumImage} alt="" className="rounded-lg"/>
                                    <div className="py-5">
                                        <h5 className="font-bold text-slate-100 truncate">{albumTitle}</h5>
                                        <p className="text-slate-400">{subtitle}</p>
                                    </div>
                                </div>
                    </div>
        </>
    )
}


