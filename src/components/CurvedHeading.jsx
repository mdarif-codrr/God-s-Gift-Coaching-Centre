import  { useContext, useEffect, useState } from 'react'
import { CoachingContext } from '../context/CoachingContext'

const CurvedHeading = ({ heading, }) => {
  const [deviceType, setDeviceType] = useState('desktop')
  const {isSchool,} = useContext(CoachingContext)
  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth
      if (width < 300) {
        setDeviceType('xsmall')
      } else if (width < 768) {
        setDeviceType('mobile')
      } else if (width < 1024) {
        setDeviceType('tablet')
      } else {
        setDeviceType('desktop')
      }
    }

    updateDeviceType()
    window.addEventListener('resize', updateDeviceType)
    return () => window.removeEventListener('resize', updateDeviceType)
  }, [])

  return (
    <div className="max-w-full overflow-hidden px-4">
      {deviceType === 'xsmall' && (
        <svg viewBox="0 20 300 200" className=" w-full h-auto block">
          <defs>
            <filter id="textShadow" x="0" y="0" width="200%" height="200%">
              <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
              <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
              <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
            <path
              id="curve-xs"
              d="M10,200 A130,100 0 0,1 290,200"
              fill="transparent"
            />
          </defs>
          <text
          fontFamily="serif"
            fontSize={
              isSchool ? 'clamp(24px, 10vw, 32px)' : 'clamp(18px, 10vw, 24px)'
            }
            fill={isSchool ? '#006430' : '#000E64'}
            textAnchor="middle"
            filter="url(#textShadow)"
          >
            <textPath href="#curve-xs" startOffset="50%">
              {heading}
            </textPath>
          </text>
        </svg>
      )}

      {deviceType === 'mobile' && (
        <svg viewBox="0 20 400 200" className="w-full h-auto block">
          <defs>
            <filter id="textShadow" x="0" y="0" width="200%" height="200%">
              <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
              <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
              <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>

            <path
              id="curve-mobile"
              d="M35,210 A145,135 0 0,1 350,210"
              fill="transparent"
            />
          </defs>

          <text
          fontFamily="serif"
            fontSize="clamp(24px, 9vw, 32px)"
            fill={isSchool ? '#006430' : '#000E64'}
            textAnchor="middle"
            filter="url(#textShadow)"
          >
            <textPath href="#curve-mobile" startOffset="51%">
              {heading}
            </textPath>
          </text>
        </svg>
      )}

      {deviceType === 'tablet' && (
        <svg viewBox="0 50 700 200" className="w-full h-auto block">
          <defs>
            <filter id="textShadow" x="0" y="0" width="200%" height="200%">
              <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
              <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
              <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
            <path
              id="curve-tablet"
              d="M50,250 A300,140 0 0,1 650,250"
              fill="transparent"
            />
          </defs>
          <text
          fontFamily="serif"
            fontSize={
              isSchool ? 'clamp(48px, 6vw, 52px)' : 'clamp(30px, 6vw, 48px)'
            }
            fill={isSchool ? '#006430' : '#000E64'}
            textAnchor="middle"
            filter="url(#textShadow)"
          >
            <textPath href="#curve-tablet" startOffset="50%">
              {heading}
            </textPath>
          </text>
        </svg>
      )}

      {deviceType === 'desktop' && (
        <svg viewBox="0 30 900 200" className="w-full h-auto block">
          <defs>
            <filter id="textShadow" x="0" y="0" width="200%" height="200%">
              <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
              <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
              <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
            <path
              id="curve-desktop"
              d="M50,270 A400,180 0 0,1 850,270"
              fill="transparent"
            />
          </defs>
          <text
          fontFamily="serif"
            fontSize="clamp(32px, 5vw, 52px)"
            fill={isSchool ? '#006430' : '#000E64'}
            textAnchor="middle"
            filter="url(#textShadow)"
          >
            <textPath href="#curve-desktop" startOffset="50%">
              {heading}
            </textPath>
          </text>
        </svg>
      )}
    </div>
  )
}

export default CurvedHeading
