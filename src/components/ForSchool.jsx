import React, { useContext, useEffect } from 'react'
import HeroImg from '../assets/HeroImg.png'
import SecImg from '../assets/arms-up-kid-img1.webp'
import ThirdImg from '../assets/img5.jpg'
import { CoachingContext } from '../context/CoachingContext'
import Welcome from './Welcome'
import Quote1 from './Quote1'
import Cources from './Cources'
import Quote2 from './Quote2'
import SwiperJs from './SwiperJs'

function ForSchool() {
   const {isSchool, setIsSchool} = useContext(CoachingContext)
   useEffect(() => {
    setIsSchool(true);
  }, [setIsSchool]);
  const data = [
    {
      head: 'Our Teachers',
      message:
        'समर्पित, देखभाल करने वाले, और उच्च योग्यता प्राप्त — हमारे शिक्षक मार्गदर्शक हैं जो मानसिकता को पोषित करते हैं और भविष्य गढ़ते हैं।',
    },
    {
      head: 'Our Campus',
      message:
        'एक सुरक्षित, स्वच्छ, और जीवंत परिसर जो जिज्ञासा को जागृत करने और आनंदमय सीखने का समर्थन करता है।',
    },
    {
      head: 'Student-Friendly Environment',
      message:
        'एक प्रोत्साहित करने वाला माहौल जहाँ हर बच्चा महत्वपूर्ण, सुना हुआ, और सीखने के लिए उत्साहित महसूस करता है।',
    },
  ]
  const swipData = [ThirdImg, HeroImg, SecImg,ThirdImg,HeroImg,SecImg,ThirdImg, HeroImg, SecImg,ThirdImg,HeroImg,SecImg]
  return (
    <>

    <div>
        {/* <div className="w-full h-0.5 bg-gray-300"></div> */}
        <div className="flex flex-col pt-20 px-14 max-md:px-3">
          <Welcome
            heroimg={HeroImg}
            message={"GOD'S GIFT PUBLIC SCHOOL"}
            isSchool={isSchool}
          />

          <Quote1
            quote1={
              '   में, हम मानते हैं कि हर बच्चा सचमुच एक उपहार है — जो जिज्ञासा, रचनात्मकता, और असीमित संभावनाओं से भरा होता है। हमारा स्कूल नर्सरी से कक्षा 8 तक के छात्रों के लिए एक गर्म और खुशहाल सीखने का माहौल प्रदान करता है, जहाँ हर बच्चे को देखभाल के साथ पोषित किया जाता है और उद्देश्य के साथ मार्गदर्शन दिया जाता है। हम न केवल शैक्षिक मजबूती बल्कि नैतिक मूल्य, अनुशासन, और आत्मविश्वास भी शुरू से ही विकसित करने पर ध्यान देते हैं।'
            }
            message={"GOD'S GIFT PUBLIC SCHOOL"}
            isSchool={isSchool}
          />

          <Cources
            data={data}
            isSchool={isSchool}
            courceHead={'Our Features 👇'}
          />

          <Quote2
            quote2={
              '   में,हमारा शिक्षण तरीका बुनियादी सीखने को मजेदार, इंटरैक्टिव गतिविधियों के साथ मिलाकर शिक्षा को एक आनंदमय अनुभव बनाता है। समर्पित शिक्षकों, सुरक्षित वातावरण, और समग्र विकास पर ध्यान देने के साथ, हमारा लक्ष्य जिम्मेदार, दयालु, और उज्जवल युवा व्यक्तित्वों का निर्माण करना है। हमारे स्कूल में हम केवल पढ़ाते नहीं हैं — हम हर बच्चे को बड़े सपने देखने और गरिमा के साथ बढ़ने के लिए प्रेरित करते हैं।'
            }
            message={"GOD'S GIFT PUBLIC SCHOOL"}
            isSchool={isSchool}
            secImg={SecImg}
          />
          <div>
            <SwiperJs swipMess={'School Gallary'} data={swipData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ForSchool
