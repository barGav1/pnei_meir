import React from "react";
import Menu from "../components/Menu";
import "../styles/Home.css";
import img1 from "../stuff/meir1.jpg" 
import img2 from "../stuff/meir2.jpg" 
import tora from "../stuff/tora.jpg" 


function MediaGallery() {
  // Replace these with your actual YouTube video IDs
  const videos = [
    { id: "-e0dtIjR5_k", title: "סרטון 1" },
    { id: "xsv82WrNa2M", title: "סרטון 2" },
    { id: "qTCT6F339JA", title: "סרטון 3" }
  ];

  // Replace these with your actual image URLs
  const photos = [
    { url: img1, title: "תמונה 1" },
    { url: img2, title: "תמונה 2" },
    { url: tora, title: "תמונה 3" }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <Menu />
        
        {/* Background decoration */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-300 to-blue-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl py-32 sm:py-40" dir="rtl">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
              ברוכים הבאים למוסדות פני מאיר
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              צפו בסרטונים ותמונות ממוסדות פני מאיר
            </p>
          </div>

          {/* Videos Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              סרטונים
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photos Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              תמונות
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photos.map((photo, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{photo.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom background decoration */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-300 to-blue-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
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

export default MediaGallery;