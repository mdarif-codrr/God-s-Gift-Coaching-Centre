import { FaLocationDot,} from 'react-icons/fa6'
import { useContext, useEffect, } from 'react'
import { CoachingContext } from '../context/CoachingContext'
import Owners from './Owners'
import img from '../assets/for-parents-hero-img2.webp'
function Home() {
  const { isSchool, setIsSchool } = useContext(CoachingContext)
  useEffect(() => {
    setIsSchool(false)
  }, [setIsSchool])

  const features = [
    'साफ़-सुथरा क्लास रूम',
    'पाक और सदाचार माहौल',
    'सस्ता और सबसे अच्छा शिक्षा का व्यवस्था',
    'प्रत्येक सब्जेक्ट के लिए योग्य और परिश्रमी शिक्षक',
    'क़ुरआन शरीफ़ और दीनी तालीम का ख़ास निज़ाम',
    'क़ुरआन शरीफ़ और दीनी तालीम का ख़ास निज़ाम',
    'यतीम और ग़रीब विद्यार्थियों के लिए फीस में विशेष रूप से कमी',
    'Class 1 to 12th तक Arts और Science की सभी Subject की व्यवस्था',
    'मैट्रिक में 300+, 400+ और 450+ वाले विद्यार्थियों की Fee में 20%, 50%, तथा 100% तक कमी',
  ]

  return (
    <>
      <div className="w-full   mb-3 px-3 pt-20">
        <div className=" w-full h-full  ">
          <div>
            <h2 className="font-bold text-3xl text-center max-sm:text-lg text-red-600 drop-shadow-[3px_3px_2px_rgba(0,0,0,0.3)]">
              WELCOME
            </h2>
            <h3 className="font-bold text-3xl text-center max-sm:text-lg drop-shadow-[3px_3px_2px_rgba(0,0,0,0.3)]">
              To
            </h3>
            <h1 className="font-bold max-md:text-4xl max-sm:text-xl  max-lg:text-5xl max-xl:text-6xl text-7xl text-center text-blue-900 font-serif drop-shadow-[3px_3px_2px_rgba(0,0,0,0.3)]">
              GOD'S GIFT PUBLIC SCHOOL
            </h1>
            <p className="text-center font-semibold max-sm:text-[10px] text-lg flex justify-center items-center">
              {<FaLocationDot />}Kusmahwa Bazar, Bairgania Dhaka Road, East
              Champaran
            </p>
          </div>
          <div className="bg-green-300 overflow-hidden whitespace-nowrap">
            <p className="animate-marquee font-bold text-4xl max-sm:text-[19px] max-md:text-2xl text-red-600 inline-block">
              Admission is going on..... Admission is going on..... Admission is
              going on.....
            </p>
          </div>

          <div className="w-full h-13 mt-3 bg-blue-800">
            <p className="text-3xl max-md:text-xl max-sm:text-lg text-center font-semibold pt-2 text-white">
              CLASS-NURSERY TO VIII (CBSE){' '}
            </p>
          </div>
          <div>
            <p className="font-semibold max-md:text-xl max-sm:text-sm mt-3 text-3xl text-center">
              आपको यह जानकर अपार ख़ुशी होगी कि आपके इलाक़े का मशहूर संस्थान |{' '}
            </p>
            <h2 className="font-bold max-sm:text-sm max-md:text-3xl max-lg:text-4xl text-5xl mt-3 text-center text-blue-900 font-serif ">
              GOD'S GIFT COACHING CENTRE{' '}
              <span className="text-3xl max-sm:text-[12px] ">के तहत</span>{' '}
            </h2>
            <h2 className="font-bold max-sm:text-xl max-md:text-3xl  max-lg:text-4xl text-5xl mt-3 text-center text-blue-900 font-serif ">
              GOD'S GIFT PUBLIC SCHOOL
            </h2>
            <p className="text-center max-sm:text-[12px] max-md:text-xl text-2xl mt-3 font-semibold">
              जिसकी स्थापना हो चुकी है, जिसमें नर्सरी से आठवीं कक्षा तक की
              शिक्षा CBSE Pattern पर आधारित अंग्रेज़ी माध्यम से दी जाती है।
            </p>
          </div>
          <div>
            <p className="text-red-400 max-md:text-xl max-sm:text-sm font-bold text-2xl mt-3 text-center">
              नोट:- हमारे यहाँ परिवहन ( गाड़ी ) की सुविधा भी उपलब्ध है।
            </p>
          </div>
          <div className="pl-13 relative mt-5 max-md:pl-7 max-lg:pl-9 max-sm:pl-3 ">
            <h3 className="font-bold text-4xl max-md:text-2xl max-sm:text-[16px] bg-blue-950 text-white p-3 ">
              हमारी विशेषताएँ :-
            </h3>
            <ol className="pl-19  max-md:pl-5 max-lg:pl-9 max-sm:pl-3 pt-5 max-sm:pt-2">
              {features.map((mess, i) => (
                <li
                  key={i}
                  className="text-xl text-[#000E64] max-sm:pl-0 max-sm:ml-0 max-md:text-lg max-sm:text-[12px]  font-semibold ml-3 p-3 max-sm:p-1 roman-list list-inside"
                >
                  {mess}
                </li>
              ))}
            </ol>
            <div className="absolute top-17 -z-10 right-0 max-w-2xl">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="w-full max-w-[1500px] h-0.5 my-3 bg-gray-300"></div>
          <div className="flex justify-between bg-white p-3">
            <Owners
              post={'Director :-'}
              name={'Mufti Abshar Faiz ( 2 M.A )'}
              number={'9199507040'}
              mail={'https://mail.google.com/mail/?view=cm&to=mdarif@gmail.com'}
              whatsApp={'https://wa.me/919199507040'}
            />
            <Owners
              post={'Principal :-'}
              name={'Naushad Alam ( B.Sc. & D.E; Ed. )'}
              number={'7260075959'}
              mail={'https://mail.google.com/mail/?view=cm&to=mdarif@gmail.com'}
              whatsApp={'https://wa.me/917260075959'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
