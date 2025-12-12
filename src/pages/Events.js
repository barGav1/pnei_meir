import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import opendayImage from "../stuff/openday.jpg";

// Sample flyer data - replace with your actual data source
const flyersData = [
  {
    id: 1,
    image: opendayImage,
    title: "יום פתוח במוסדות פני מאיר",
    uploadDate: "2025-12-12", // YYYY-MM-DD format
    eventDate: "2025-12-26"
  }
];

function Events() {
  const [showFlyer, setShowFlyer] = useState(null);
  const [flyers, setFlyers] = useState([]);

  useEffect(() => {
    // Process flyers to add status indicators
    const processedFlyers = flyersData.map(flyer => {
      const today = new Date();
      const uploadDate = new Date(flyer.uploadDate);
      const eventDate = new Date(flyer.eventDate);
      
      const daysSinceUpload = Math.floor((today - uploadDate) / (1000 * 60 * 60 * 24));
      const daysUntilEvent = Math.floor((eventDate - today) / (1000 * 60 * 60 * 24));
      
      return {
        ...flyer,
        isNew: daysSinceUpload <= 7,
        isSoon: daysUntilEvent <= 3 && daysUntilEvent >= 0
      };
    });
    
    setFlyers(processedFlyers);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="relative isolate px-2 sm:px-4 pt-20 sm:pt-24 lg:px-8">
        {/* Background top */}
        <Menu />

        {/* Decorative top background */}
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

        {/* Page Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900" dir="rtl">
            אירועים קרובים בקהילה
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600" dir="rtl">
            אנחנו מזמינים אותכם להשתתף בפעילויות השונות בקהילתנו
          </p>
        </div>

        {/* Flyers Grid - Added dir="rtl" for right-to-left ordering */}
        <div className="max-w-7xl mx-auto pb-16 sm:pb-24" dir="rtl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
            {flyers.map((flyer) => (
              <div key={flyer.id} className="mb-4">
                {/* Slightly larger and squarer unzoomed card */}
                <div 
                  className="relative mx-auto cursor-pointer w-full max-w-xs sm:max-w-sm lg:max-w-md"
                  onClick={() => setShowFlyer(flyer)}
                >
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 rounded-2xl blur-xl opacity-30 animate-pulse" style={{ background: "linear-gradient(90deg,#f6ad55,#f56565)" }} />

                  {/* Main card */}
                  <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400 hover:border-orange-500 transition-all transform hover:scale-105 active:scale-100 aspect-square flex flex-col">
                    
                    {/* Status Badges (absolute so they don't push the layout) */}
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10 flex flex-col gap-1">
                      {flyer.isNew && (
                        <div className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full font-bold text-xs shadow-lg animate-bounce">
                          חדש! ✨
                        </div>
                      )}
                      {flyer.isSoon && (
                        <div className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full font-bold text-xs shadow-lg animate-pulse">
                          בקרוב! ⏰
                        </div>
                      )}
                    </div>
                    
                    {/* Click to expand indicator */}
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full font-bold text-xs shadow-lg z-10">
                      לחץ להגדלה 🔍
                    </div>
                    
                    {/* Image container (flex-1 so it takes most of the square) */}
                    <div className="relative group flex-1 w-full overflow-hidden rounded-t-2xl">
                      <img 
                        src={flyer.image} 
                        alt={flyer.title}
                        className="object-cover object-top w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent group-hover:from-blue-900/40 transition-all duration-300"></div>
                      
                      {/* Fade to indicate more content */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-50 to-transparent"></div>
                    </div>
                    
                    {/* Title + date ALWAYS visible in unzoomed version */}
                    <div className="py-3 px-3 text-center" dir="rtl">
                      <p className="text-sm sm:text-base font-bold text-blue-900">{flyer.title}</p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        תאריך: {new Date(flyer.eventDate).toLocaleDateString("he-IL")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fullscreen Flyer Modal */}
        {showFlyer && (
          <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
            onClick={() => setShowFlyer(null)}
            aria-modal="true"
            role="dialog"
          >
            {/* outer wrapper gives padding so scaled content doesn't get clipped */}
            <div className="w-full max-w-[95vw] flex items-center justify-center">
              <div 
                className="relative w-full max-w-3xl transform transition-transform duration-300 lg:scale-[0.96] lg:origin-center"
                onClick={(e) => e.stopPropagation()}
                style={{ maxHeight: "90vh" }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowFlyer(null)}
                  className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors"
                  aria-label="Close flyer"
                >
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Status Badges on Modal */}
                <div className="absolute -top-12 left-0 flex gap-2">
                  {showFlyer.isNew && (
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                      חדש! ✨
                    </div>
                  )}
                  {showFlyer.isSoon && (
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                      בקרוב! ⏰
                    </div>
                  )}
                </div>
                
                {/* Flyer Image */}
                <div className="rounded-lg overflow-hidden shadow-2xl">
                <div className="rounded-lg overflow-hidden shadow-2xl flex items-center justify-center">
                <img
                    src={showFlyer.image}
                    alt={`${showFlyer.title} - פרטים מלאים`}
                    className="max-h-[85vh] w-auto h-auto object-contain"
                />
                </div>
                </div>
                
                {/* Flyer Info */}
                <div className="mt-3 sm:mt-4 text-center" dir="rtl">
                  <p className="text-lg sm:text-xl text-white font-semibold">{showFlyer.title}</p>
                  <p className="text-sm sm:text-base text-gray-300 mt-1">
                    תאריך האירוע: {new Date(showFlyer.eventDate).toLocaleDateString('he-IL')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom decorative background */}
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

export default Events;