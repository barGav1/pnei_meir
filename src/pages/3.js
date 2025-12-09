import React, { useState } from 'react';

function CardsViewer() {
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

  const [expandedVideo, setExpandedVideo] = useState(null);

  return (
    <div className="bg-white min-h-screen">
      <div className="relative isolate px-2 sm:px-4 pt-20 sm:pt-24 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem]
            -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-300 to-blue-500
            opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>

        <div className="mx-auto max-w-full py-20 sm:py-24 lg:py-32 px-2 sm:px-4 lg:px-10" dir="rtl">
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-800 mb-2">
              ברוכים הבאים
            </h1>
            <p className="text-xl sm:text-2xl text-blue-600 font-semibold">למוסדות פני מאיר</p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {videos.map((id, idx) => (
                <div
                  key={idx}
                  onClick={() => setExpandedVideo(expandedVideo === idx ? null : idx)}
                  className="relative group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-200 transition-all">
                    {expandedVideo === idx ? (
                      <div className="aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                          title={`סרטון ${idx + 1} - מוסדות פני מאיר`}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                          alt={`סרטון ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white rounded-full p-5 shadow-xl group-hover:scale-110 transition-transform">
                            <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-white">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">סרטון {idx + 1}</h3>
                      <p className="text-gray-600">גלה עוד על הפעילות שלנו</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem]
            -translate-x-1/2 bg-gradient-to-tr from-blue-300 to-blue-500 opacity-30
            sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default CardsViewer;
