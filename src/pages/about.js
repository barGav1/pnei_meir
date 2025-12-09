import React from "react";
import Menu from "../components/Menu";
import "../styles/Home.css";

function About() {
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
        <div className="mx-auto max-w-5xl py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8" dir="rtl">
          {/* Hero Section */}
          <div className="text-center mb-16 sm:mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              אודות מוסדות פני מאיר
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              מרכז תורני מוביל המוקדש ללימוד עמוק ולהפצת תורה בקרב הקהילה
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-xl p-8 sm:p-12 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
              המשימה שלנו
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              מוסדות פני מאיר שואפים לטפח דור של תלמידי חכמים ובעלי בתים יראי שמים, 
              המעמיקים בלימוד התורה ומיישמים את ערכיה בחיי היומיום. אנו מקדישים את עצמנו 
              להעברת מסורת התורה לדורות הבאים באהבה, ביראת שמים ובמסירות.
            </p>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">
              הערכים המנחים אותנו
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border-r-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">לימוד תורה</h3>
                <p className="text-gray-700 leading-relaxed">
                  העמקה וחידוד בלימוד הגמרא, הלכה ומחשבה, תוך שימת דגש על הבנה עמוקה 
                  ויסודית של המקורות.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border-r-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">יראת שמים</h3>
                <p className="text-gray-700 leading-relaxed">
                  טיפוח מידות טובות, יראת שמים ואהבת ה', תוך התמקדות בצמיחה רוחנית 
                  ואישית של כל תלמיד.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border-r-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">אחדות וקהילה</h3>
                <p className="text-gray-700 leading-relaxed">
                  בניית קהילה תורנית חמה ומגובשת, המבוססת על אחווה, כבוד הדדי 
                  ודאגה לזולת.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border-r-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">הדרכה אישית</h3>
                <p className="text-gray-700 leading-relaxed">
                  מתן תשומת לב אישית לכל תלמיד, תוך התאמת הלימוד לצרכיו ויכולותיו 
                  הייחודיות.
                </p>
              </div>
            </div>
          </div>

          {/* History Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
              ההיסטוריה שלנו
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              מוסדות פני מאיר נוסדו מתוך חזון ברור להקים מרכז תורני איכותי המשלב 
              לימוד עיוני עמוק עם התפתחות אישית ורוחנית. לאורך השנים, המוסדות צמחו 
              והתפתחו, והפכו למרכז תורני מוביל המושך תלמידים מכל רחבי הארץ.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              כיום, מוסדות פני מאיר ממשיכים במסורת זו, תוך שילוב של שיטות לימוד 
              מסורתיות עם גישות חינוכיות מודרניות, כדי לספק את החוויה הלימודית 
              הטובה ביותר לתלמידינו.
            </p>
          </div>

          {/* Programs Section */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">
              תוכניות הלימוד שלנו
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-l from-blue-50 to-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3" > תלמוד תורה </h3>
                <p className="text-gray-700 leading-relaxed">
                  תלמוד תורה המשלב תורה ודרך ארץ.
                  <br/>
                  לימודי ליבה ברמה הגבוהה ביותר תוך שמירה על ערכי התורה.
                </p>
              </div>
              
              <div className="bg-gradient-to-l from-blue-50 to-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">כולל אברכים</h3>
                <p className="text-gray-700 leading-relaxed">
                  תוכנית ייחודית לאברכים נשואים, המאפשרת המשך צמיחה בלימוד תורה 
                  תוך שילוב עם חיי משפחה ואחריות קהילתית.
                </p>
              </div>
              
              <div className="bg-gradient-to-l from-blue-50 to-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">שיעורים לציבור</h3>
                <p className="text-gray-700 leading-relaxed">
                  מגוון רחב של שיעורים וסדרות לימוד לבעלי בתים וקהל הרחב, 
                  בנושאים שונים מעולם התורה, ההלכה והמחשבה.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              מעוניינים להצטרף אלינו?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-gray-300">
              מוסדות פני מאיר פתוחים לכל המעוניינים להעמיק בלימוד התורה ולצמוח רוחנית. 
              נשמח לספק מידע נוסף ולענות על כל שאלה.
            </p>
            <div className="text-xl text-gray-200">
              <p className="mb-2">צרו איתנו קשר ונשמח לעמוד לרשותכם</p>
              <p className="font-semibold">מוסדות פני מאיר - מרכז תורני מוביל בישראל</p>
            </div>
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

export default About;