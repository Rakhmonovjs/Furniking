import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Trend.scss'
import {products} from '../../data/trend'; // data.json fayli
 



const Top = () => {
    const { pages } = products

  return (
    <Swiper 
            modules={[Pagination, Navigation]} 
            pagination={{ clickable: true}}
            navigation={true}
            className='productslider'
            >
        {[pages].map((top, index) => {
            return (
                <SwiperSlide key={index} className='swiperslide'>
                    <div >
                        {top.productList.map((product, index) => {
                            const { img, name, title, price, discount } = product;
                            return (
                                <div className='top'>
                                    <div className=''>
                                        <img src={img.type} alt='' />
                                        <div>
                                            {/* like korzinka ... */}
                                        </div>
                                    </div>
                                    <div className=''>
                                        <h2>{name}</h2>
                                        <h6>{title}</h6>

                                    </div>
                                    <div className=''>
                                        <p>{price}</p>
                                        <span>{discount}</span>
                                    </div>
                                </div>    
                            );
                        })};
                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
  )
}

export default Top