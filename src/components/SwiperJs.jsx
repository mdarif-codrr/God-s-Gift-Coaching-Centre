import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'

function SwiperJs({ swipMess, data }) {
  return (
    <>
      <h4 className=" mt-3 font-bold text-4xl text-center">{swipMess + '👇'}</h4>

      <div className="max-w-4xl max-lg:max-w-full flex rounded-xl max-h-[32rem] max-mb:h-32 my-9 overflow-hidden mx-auto cursor-pointer">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {data.map((ele, i) => {
            return (
              <SwiperSlide>
                <img className="rounded-xl " src={ele} alt={'Slide' + i} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}

export default SwiperJs
