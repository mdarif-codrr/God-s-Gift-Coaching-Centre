import { useEffect, useState } from 'react'
import Cources from './Cources'
import SwiperJs from './SwiperJs'
import Welcome from './Welcome'
import Quote1 from './Quote1'
import Quote2 from './Quote2'

function MainComp({
  message,
  quote1,
  quote2,
  heroimg,
  secImg,
  courceMess,
  swipMess,
  swipData,
  courceHead,
}) {
  // const isSchool =true
  const [isSchool, setIsSchool] = useState(false)
  useEffect(() => {
    if (message.includes('School')) {
      setIsSchool(true)
    } else {
      setIsSchool(false)
    }
  }, [])
  return (
    <div>
      <div className="w-full h-0.5 bg-gray-300"></div>
      <div className="flex flex-col pt-13 px-14 max-md:px-3">
        <Welcome heroimg={heroimg} message={message} isSchool={isSchool} />

        <Quote1 quote1={quote1} message={message} isSchool={isSchool} />

        <Cources
          data={courceMess}
          isSchool={isSchool}
          courceHead={courceHead}
        />

        <Quote2
          quote2={quote2}
          message={message}
          isSchool={isSchool}
          secImg={secImg}
        />
        <div>
          <SwiperJs swipMess={swipMess} data={swipData} />
        </div>
      </div>
    </div>
  )
}

export default MainComp
