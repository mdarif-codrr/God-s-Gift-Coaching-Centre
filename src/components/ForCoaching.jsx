import HeroImg from '../assets/arms-up-girl-img3.webp'
import SecImg from '../assets/SubImg.webp'
import img1 from '../assets/img4.jpg'
import img2 from '../assets/img5.jpg'
import img3 from '../assets/img6.jpg'
import Welcome from './Welcome'
import Quote1 from './Quote1'
import Cources from './Cources'
import Quote2 from './Quote2'
import SwiperJs from './SwiperJs'
import { useContext, useEffect, useState } from 'react'
import {CoachingContext} from '../context/CoachingContext'

function ForCoaching() {
  
 const {isSchool, setIsSchool} = useContext(CoachingContext)
 useEffect(() => {
     setIsSchool(false);
   }, [setIsSchool]);


  const swipData = [img1, img2, img3]
  const data = [
    {
      head: 'Class 1-5',
      message:
        'युवा विद्यार्थियों के लिए विभिन्न विषयों में व्यक्तिगत ध्यान के साथ मजबूत आधार तैयार करना।',
    },
    {
      head: 'Class 6-10',
      message:
        'स्कूल परीक्षाओं के लिए गणित, विज्ञान, अंग्रेजी, और सामाजिक विज्ञान में समग्र कोचिंग।',
    },
    {
      head: 'Class 11-12',
      message:
        'विज्ञान, वाणिज्य, और कला धाराओं में बोर्ड परीक्षाओं के लिए उन्नत कोचिंग।',
    },
    {
      head: 'I.Sc (Intermediate Science)',
      message:
        'I.Sc छात्रों के लिए भौतिकी, रसायन विज्ञान, और जीवविज्ञान जैसे विषयों की कोचिंग।',
    },
    {
      head: 'I.A (Intermediate Arts)',
      message:
        'कला के छात्रों के लिए इतिहास, राजनीति विज्ञान, और भूगोल जैसे विषयों पर केंद्रित कोचिंग।',
    },
  ]
  return (
    <>

      <div>
        {/* <div className="w-full h-0.5 bg-gray-300"></div> */}
        <div className="flex flex-col pt-20 px-14 max-md:px-3">
          <Welcome
            heroimg={HeroImg}
            message={"GOD'S GIFT COACHING CENTRE"}
            isSchool={isSchool}
          />

          <Quote1
            quote1={
              '           में, हम मानते हैं कि हर बच्चे में सफलता की क्षमता होती है जब उसे देखभाल, निरंतरता, और गुणवत्तापूर्ण शिक्षा के साथ मार्गदर्शन किया जाए। हमारा मिशन कक्षा 1 से कक्षा 12 तक के बच्चों के युवा मनों को पोषित करना है, ताकि वे मजबूत शैक्षिक आधार बना सकें जो जीवनभर कायम रहे।'
            }
            message={"GOD'S GIFT COACHING CENTRE"}
            isSchool={isSchool}
          />

          <Cources
            data={data}
            isSchool={isSchool}
            courceHead={'Our Cources 👇'}
          />

          <Quote2
            quote2={
              '   में,  हम अपने पाठ्यक्रम को आकर्षक, इंटरैक्टिव पाठों में बांटते हैं जो छात्रों को मोहित करने और कौशल विकास को प्रोत्साहित करने के लिए तैयार किए गए हैं। हमारा रोचक प्रारूप सुनिश्चित करता है कि छात्र सक्रिय रूप से शामिल रहें, जिससे उनकी शैक्षिक यात्रा में सार्थक भागीदारी के साथ सुधार हो।'
            }
            message={"GOD'S GIFT COACHING CENTRE"}
            isSchool={isSchool}
            secImg={SecImg}
          />
          <div>
            <SwiperJs swipMess={'Coaching Gallary'} data={swipData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ForCoaching
