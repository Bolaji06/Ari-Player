
export default function AlbumCard({ artistBgImage, titleColor, subtitleColor }){

    return (
        <>
            <div className="w-[180px] bg-slate-500 bg-opacity-20 rounded-lg p-4
            shadow-lg">
                <img src={artistBgImage} alt="" className="rounded-lg"/>

                <div className="py-5">
                    <h5 className="font-bold text-slate-100">Album Title</h5>
                    <p className="text-slate-400">Subtitle</p>
                </div>
            </div>
        </>
    )
}