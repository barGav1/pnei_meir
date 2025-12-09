import React, { useState } from 'react';

function TikTokViewer() {
  const videos = [
    "F29BWfDCKGE",
    "uNCqe8Vh0HQ",
    "_JBoPl9_4ws",
    "dCjtV6o5wXk",
    "9QjTfO9hmO8",
    "f8cPSdcBO4c",
    "0k0Y228qGas",
    "TAbhqm0QhxU",
  ];

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="bg-black min-h-screen" dir="rtl">
      <div className="max-w-2xl mx-auto">
        <div className="sticky top-0 z-40 bg-gradient-to-b from-black to-transparent pt-6 pb-4 px-4">
          <h1 className="text-2xl font-bold text-white text-center">
            פני מאיר
          </h1>
        </div>

        <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
          {videos.map((id, idx) => (
            <div
              key={idx}
              className="snap-start h-screen relative flex items-center justify-center px-4 py-20"
            >
              <div className="relative w-full max-w-md aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl">
                {activeVideo === idx ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=1&modestbranding=1`}
                    title={`סרטון ${idx + 1} - מוסדות פני מאיר`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div
                    onClick={() => setActiveVideo(idx)}
                    className="w-full h-full cursor-pointer group"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                      alt={`סרטון ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/95 backdrop-blur-sm rounded-full p-8 group-hover:scale-110 transition-transform shadow-2xl">
                        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                <div className="absolute left-4 bottom-24 flex flex-col gap-6">
                  <button className="bg-white/20 backdrop-blur-md rounded-full p-4 hover:bg-white/30 transition-colors">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="bg-white/20 backdrop-blur-md rounded-full p-4 hover:bg-white/30 transition-colors">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>

                <div className="absolute bottom-0 right-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-bold text-xl mb-1">סרטון {idx + 1}</h3>
                  <p className="text-white/90 text-base">מוסדות פני מאיר</p>
                </div>
              </div>

              {idx === 0 && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-sm animate-bounce">
                  <svg className="w-8 h-8 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TikTokViewer;