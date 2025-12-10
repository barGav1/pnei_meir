import React, { useState } from 'react';
import Menu from "../components/Menu";
import "../styles/Home.css";

function VideoViewer() {
  const videos = [
    { 
      id: "F29BWfDCKGE",
      title: "דבר מנהל המוסד",
      subtitle: "חזון ההובלה חינוכית במוסדות"
    },
    { 
      id: "uNCqe8Vh0HQ",
      title: "שיעור מלאכה יצירתית",
      subtitle: "פיתוח כישורים ידניים ויצירתיות "
    },
    { 
      id: "_JBoPl9_4ws",
      title: "לימודי מדעים מרתקים",
      subtitle: "חקר והתנסות בעולם המדע"
    },
    { 
      id: "dCjtV6o5wXk",
      title: "שיעור חשבון מעמיק",
      subtitle: "מתמטיקה מעשית וחשיבה לוגית"
    },
    { 
      id: "9QjTfO9hmO8",
      title: "הפסקה בחצר המוסד",
      subtitle: "משחק חברתי ופעילות במרחב"
    },
    { 
      id: "f8cPSdcBO4c",
      title: "שיעור אנגלית מתקדם",
      subtitle: "שפה ותקשורת בינלאומית מעשירה"
    },
    { 
      id: "0k0Y228qGas",
      title: "לימוד גמרא עמוק",
      subtitle: "חכמת התלמוד והעמקה בהלכה"
    },
    { 
      id: "TAbhqm0QhxU",
      title: "הגיל הרך שלנו",
      subtitle: "חינוך מוקדם ופיתוח יכולות יסוד"
    }
  ];
  
  const [expandedVideo, setExpandedVideo] = useState(null);

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
          <div className="text-center mb-16 px-4" dir="rtl">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
              מוסדות פני מאיר
            </h1>
            <h2 className="text-2xl sm:text-3xl text-blue-600 font-semibold mb-6">
              חינוך תורני איכותי לדור העתיד
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
             מוסדות פני מאיר משלבים חינוך תורני עמוק עם גישה חינוכית מתקדמת.
             <br/>
              אנו מפתחים כל תלמיד לפי כישוריו הייחודיים תוך שמירה על ערכי התורה והמסורת, ומטפחים אווירה של מצוינות וכבוד הדדי.
              <br/>
              אנו מזמינים אותכם לצפות בתכנים מחיי היום יום במוסדותינו.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" dir="rtl">
            {videos.map((video, idx) => (
              <div
                key={idx}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-200 transition-all">
                  {expandedVideo === idx ? (
                    <div 
                      className="w-full"
                      onClick={() => setExpandedVideo(null)}
                    >
                      <div className="aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                          title={video.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-white">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{video.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600">{video.subtitle}</p>
                        <p className="text-xs text-blue-600 mt-2">לחץ לסגירה</p>
                      </div>
                    </div>
                  ) : (
                    <div onClick={() => setExpandedVideo(idx)}>
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                          alt={video.title}
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
                      <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-white">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{video.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600">{video.subtitle}</p>
                      </div>
                    </div>
                  )}
                </div>
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
    </div>
  );
}

export default VideoViewer;