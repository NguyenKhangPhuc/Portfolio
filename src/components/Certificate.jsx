import React from 'react'
import { certificates } from '../constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import { styles } from '../styles'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'

import { EffectCoverflow, } from 'swiper/modules'
import { delay } from 'framer-motion'

const Certificate = () => {
    return (
        <div className='container'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 4,
                    slideShadows: true
                }}
                modules={[EffectCoverflow]}
                className='swiper_container'
            >
                {certificates.map((certificate, index) => {
                    return (
                        <SwiperSlide className="w-full h-full flex justify-center items-center">
                            <img
                                src={certificate.img}
                                alt="slide_image"
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div >
    )
}

export default Certificate