import React, { useState } from 'react';
import Menu from "../components/Menu";
import "../styles/Home.css";
import opendayImage from "../stuff/openday.jpg"

function VideoViewer() {
  const videos = [
    { 
      id: "1Ji44bkbvDU",
      title: "דבר מנהל המוסד",
      subtitle: "חזון ההובלה החינוכית במוסדות"
    },
    { 
      id: "TAbhqm0QhxU",
      title: "הגיל הרך שלנו",
      subtitle: "חינוך מוקדם ופיתוח יכולות יסוד"
    },
    { 
      id: "uNCqe8Vh0HQ",
      title: "שיעורי אומנות ויצירה",
      subtitle: "פיתוח כישורים ידניים ויצירתיות "
    },
    { 
      id: "_JBoPl9_4ws",
      title: "לימודי מדעים מרתקים",
      subtitle: "חקר והתנסות בעולם המדע"
    },
    { 
      id: "dCjtV6o5wXk",
      title: "שיעורי חשבון מעמיקים",
      subtitle: "מתמטיקה מעשית וחשיבה לוגית"
    },
    { 
      id: "9QjTfO9hmO8",
      title: "הפסקה בחצר המוסד",
      subtitle: "משחקי חברה ופעילות במרחב"
    },
    { 
      id: "f8cPSdcBO4c",
      title: "שיעורי אנגלית מתקדמים",
      subtitle: "שפה ותקשורת בינלאומית מעשירה"
    },
    { 
      id: "0k0Y228qGas",
      title: "לימוד גמרא בעמקות",
      subtitle: "חכמת התלמוד והעמקה בהלכה"
    }
  ];
  
  const [expandedVideo, setExpandedVideo] = useState(null);
  const [showFlyer, setShowFlyer] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      <div className="relative isolate px-2 sm:px-4 pt-20 sm:pt-24 lg:px-8">
        <Menu />

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

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Hero Section - Hebrew Content */}
          <div className="text-center mb-12 sm:mb-16 px-4" dir="rtl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              מוסדות פני מאיר
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-600 font-semibold mb-6">
              חינוך תורני איכותי לדור העתיד
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
             מוסדות פני מאיר משלבים חינוך תורני עמוק עם גישה חינוכית מתקדמת.
             <br/>
              אנו מפתחים כל תלמיד לפי כישוריו הייחודיים תוך שמירה על ערכי התורה והמסורת, ומטפחים אווירה של מצוינות וכבוד הדדי.
              <br/>
              אנו מזמינים אותכם לצפות בתכנים מחיי היום יום במוסדותינו.
            </p>
          </div>

          {/* Event Flyer Card */}
          <div className="mb-12 sm:mb-16 px-4">
            <div className="relative max-w-sm sm:max-w-md mx-auto cursor-pointer" onClick={() => setShowFlyer(true)}>
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl sm:rounded-3xl blur-xl opacity-40 animate-pulse"></div>
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-3 sm:border-4 border-yellow-400 hover:border-orange-500 transition-all transform hover:scale-105 active:scale-100">
                {/* Decorative corner badges */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full font-bold text-xs shadow-lg z-10 animate-bounce">
                  אירוע מיוחד! 🎉
                </div>
                
                {/* Click to expand indicator */}
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full font-bold text-xs shadow-lg z-10">
                  לחץ להגדלה 🔍
                </div>
                
                {/* Image container with hover effect - showing only top half */}
                <div className="relative group h-48 sm:h-64 overflow-hidden">
                  <img 
                    src={opendayImage} 
                    alt="יום פתוח במוסדות פני מאיר"
                    className="w-full h-auto object-cover object-top transition-transform duration-300"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent group-hover:from-blue-900/40 transition-all duration-300"></div>
                  
                  {/* Fade to indicate more content */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50 to-transparent"></div>
                </div>
                
                {/* Bottom highlight bar */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-2 sm:py-3 px-3 sm:px-4 text-center" dir="rtl">
                  <p className="text-white text-sm sm:text-base font-bold">
                    📅 לחץ לצפייה בפרטים המלאים
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fullscreen Flyer Modal */}
          {showFlyer && (
            <div 
              className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-2 sm:p-4"
              onClick={() => setShowFlyer(false)}
            >
              <div 
                className="relative w-full max-w-2xl sm:max-w-3xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowFlyer(false)}
                  className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-yellow-400 transition-colors"
                  aria-label="Close flyer"
                >
                  <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Flyer Image */}
                <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src={opendayImage} 
                    alt="יום פתוח במוסדות פני מאיר - פרטים מלאים"
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Flyer Info */}
                <div className="mt-3 sm:mt-4 text-center" dir="rtl">
                  <p className="text-lg sm:text-xl text-white font-semibold">יום פתוח במוסדות פני מאיר</p>
                </div>
              </div>
            </div>
          )}

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4" dir="rtl">
            {videos.map((video, idx) => (
              <div
                key={idx}
                className="relative group cursor-pointer"
                onClick={() => setExpandedVideo(idx)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-200 transition-all">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white rounded-full p-4 sm:p-5 shadow-xl group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-white">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{video.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{video.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fullscreen Video Modal */}
          {expandedVideo !== null && (
            <div 
              className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-2 sm:p-4"
              onClick={() => setExpandedVideo(null)}
            >
              <div 
                className="relative w-full max-w-6xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setExpandedVideo(null)}
                  className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-blue-400 transition-colors"
                  aria-label="Close video"
                >
                  <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Video Container */}
                <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                  <iframe
                    src={`https://www.youtube.com/embed/${videos[expandedVideo].id}?autoplay=1`}
                    title={videos[expandedVideo].title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                
                {/* Video Info */}
                <div className="mt-3 sm:mt-4 text-center" dir="rtl">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{videos[expandedVideo].title}</h3>
                  <p className="text-base sm:text-lg text-gray-300">{videos[expandedVideo].subtitle}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto mt-10 mb-20 px-4">
          <div className="relative bg-gradient-to-br from-blue-100 to-blue-50 
                          border border-blue-200 rounded-2xl sm:rounded-3xl 
                          p-6 sm:p-10 lg:p-14 shadow-xl 
                          text-center overflow-hidden" 
              dir="rtl">

            {/* Floating shapes */}
            <div className="absolute -top-16 -left-16 w-40 h-40 bg-blue-300 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-blue-400 rounded-full opacity-30 blur-3xl"></div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              מעוניינים שנציג יחזור אליכם?
            </h2>

            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-700 leading-relaxed">
              מוסדות פני מאיר פתוחים לכל המעוניינים להעמיק בלימוד התורה ולצמוח רוחנית.  
              <br/>
              אנו מזמינים כל אדם המבקש להתקרב לערכי התורה ולהתחזק רוחנית להצטרף אלינו.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScQFW3ewsgnaQjzTx197DSGirfuoV2P3xyGf5VOXyi3vTl9Ag/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-10 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 
                        text-white text-base sm:text-lg font-bold rounded-full 
                        shadow-lg hover:shadow-2xl 
                        transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              מעבר לטופס יצירת קשר
            </a>

            <p className="font-semibold text-gray-700 mt-6 sm:mt-8 text-sm sm:text-base">
              מוסדות פני מאיר — מרכז תורני מוביל בישראל
            </p>
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
    </div>
  );
}

export default VideoViewer;