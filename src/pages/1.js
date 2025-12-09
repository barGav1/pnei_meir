// VERSION 1: Instagram Stories Style - StoriesViewer.jsx
import React, { useState } from 'react';

function StoriesViewer() {
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

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="bg-white min-h-screen">
      <div className="relative isolate px-2 sm:px-4 pt-20 sm:pt-24 lg:px-8">
        {/* Background top */}
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-800">
              ברוכים הבאים למוסדות פני מאיר
            </h1>
          </div>

          {/* Mobile: Horizontal Scroll Stories */}
          <div className="lg:hidden overflow-x-auto pb-6 mb-8">
            <div className="flex gap-4 px-2">
              {videos.map((id, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedVideo(idx)}
                  className="flex-shrink-0 cursor-pointer"
                >
                  <div className="relative w-32 h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 p-0.5 shadow-xl hover:shadow-2xl transition-shadow">
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-black relative">
                      <img
                        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                        alt={`סרטון ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                        <div className="bg-white/95 rounded-full p-3 shadow-lg">
                          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-center mt-2 text-gray-700 font-medium">סרטון {idx + 1}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: 2x4 Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-8 max-w-7xl mx-auto">
            {videos.map((id, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedVideo(idx)}
                className="cursor-pointer group"
              >
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 p-1 shadow-xl hover:shadow-2xl transition-all">
                  <div className="aspect-video rounded-xl overflow-hidden bg-white relative">
                    <img
                      src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                      alt={`סרטון ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white rounded-full p-5 shadow-xl">
                        <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-3 text-gray-800 font-semibold">סרטון {idx + 1}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Background bottom */}
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

      {/* Fullscreen Video Modal */}
      {selectedVideo !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 left-6 z-10 bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-white/20 transition-colors"
            aria-label="סגור סרטון"
          >
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="w-full max-w-5xl">
            <iframe
              src={`https://www.youtube.com/embed/${videos[selectedVideo]}?autoplay=1`}
              title={`סרטון ${selectedVideo + 1} - מוסדות פני מאיר`}
              className="w-full aspect-video rounded-2xl shadow-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Navigation */}
          {selectedVideo > 0 && (
            <button
              onClick={() => setSelectedVideo(selectedVideo - 1)}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full p-4 hover:bg-white/20 transition-colors"
              aria-label="סרטון קודם"
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {selectedVideo < videos.length - 1 && (
            <button
              onClick={() => setSelectedVideo(selectedVideo + 1)}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full p-4 hover:bg-white/20 transition-colors"
              aria-label="סרטון הבא"
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default StoriesViewer;


