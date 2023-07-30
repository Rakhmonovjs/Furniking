import React, { useEffect, useState } from 'react'
import './Header.scss'
import all from '../../images/all.svg'
import categories from '../../data/categories.json'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from "swiper";
import home from '../../images/home.png'
import home_little from '../../images/home_little.png'

const Header = () => {
    const [categoriesdata, setCategoriesdata] = useState([]);

  useEffect(() => {
    setCategoriesdata(categories);
  }, []);

  // const activeCategory = {
  //   "fontWeight": "700",
  //   "color": "#46A358"
  // };
  

  return (
    <div className='header'>
        <div className='header_pages'>
            <div className='header_pages_collection'>
                <img src={all} className='header_pages_collection_icon' />
                <h1 className='header_pages_collection_all'>
                    All Collection
                </h1>
          
            </div>
            <div className='header_pages_parts'>
              <p className='header_pages_parts_p'>
                    {categoriesdata.map((category) => (
                      <span key={category.id} className="header_pages_parts_p_item">
                        {category.name}
                      </span>
                    ))}
                </p>
            </div>
        </div>

        <div className='header_home'>
            <div className='header_home_title'>
              <p className='header_home_title_p'>Home</p>
              <p className='header_home_title_p'>Shop</p>
              <p className='header_home_title_p'>Blog</p>
              <p className='header_home_title_p'>About</p>
              <p className='header_home_title_p'>Contact us</p>

            </div>
            <div className='header_home_rectangle'>
            <Swiper
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000, //  3 seconds
                disableOnInteraction: true, 
              }}
              className=""
            >
              <SwiperSlide>
                <p className='header_home_rectangle_p'>
                  TOP COLLECTIONS 2021
                </p>
                <h2 className='header_home_rectangle_h2'>
                  We Serve Your Dream Furniture
                </h2>
                <h6 className='header_home_rectangle_h6'>
                  Get 50% off all products
                </h6>
                <button className='header_home_rectangle_button'>
                  <span className='header_home_rectangle_button_span'>
                    Shop Now
                  </span>
                </button>
                <img src={home} className='header_home_rectangle_img' />

                <div className='header_home_rectangle_little'>
                  <div className='header_home_rectangle_little_div'>
                    <img src={home_little} className='header_home_rectangle_little_div_img' />
                      <span className='header_home_rectangle_little_div_span'>
                        $120
                      </span>
                      <h6 className='header_home_rectangle_little_div_h6'>
                        Office Desk Chair
                      </h6>
                  </div>
                  <div className='header_home_rectangle_little_div2'>
                    <img src={home_little} className='header_home_rectangle_little_div2_img' />
                      <span className='header_home_rectangle_little_div2_span'>
                        $120
                      </span>
                      <h6 className='header_home_rectangle_little_div2_h6'>
                        Office Desk Chair
                      </h6>
                  </div>
                  <div className='header_home_rectangle_little_div3'>
                    <img src={home_little} className='header_home_rectangle_little_div3_img' />
                      <span className='header_home_rectangle_little_div3_span'>
                        $120
                      </span>
                      <h6 className='header_home_rectangle_little_div3_h6'>
                        Office Desk Chair
                      </h6>
                  </div>
                </div>
                
              </SwiperSlide>
              <SwiperSlide>
              <p className='header_home_rectangle_p'>
                  TOP COLLECTIONS 2022
                </p>
                <h2 className='header_home_rectangle_h2'>
                  We Serve Your Dream Furniture
                </h2>
                <h6 className='header_home_rectangle_h6'>
                  Get 50% off all products
                </h6>
                <button className='header_home_rectangle_button'>
                  <span className='header_home_rectangle_button_span'>
                    Shop Now
                  </span>
                </button>
                <img src={home} className='header_home_rectangle_img' />

                <div className='header_home_rectangle_little'>
                  <div className='header_home_rectangle_little_div'>
                    <img src={home_little} className='header_home_rectangle_little_div_img' />
                      <span className='header_home_rectangle_little_div_span'>
                        $120
                      </span>
                      <h6 className='header_home_rectangle_little_div_h6'>
                        Office Desk Chair
                      </h6>
                  </div>
                  <div className='header_home_rectangle_little_div2'>
                    <img src={home_little} className='header_home_rectangle_little_div2_img' />
                      <span className='header_home_rectangle_little_div2_span'>
                        $120
                      </span>
                      <h6 className='header_home_rectangle_little_div2_h6'>
                        Office Desk Chair
                      </h6>
                  </div>
                  <div className='header_home_rectangle_little_div3'>
                    <img src={home_little} className='header_home_rectangle_little_div3_img' />
                      <span className='header_home_rectangle_little_div3_span'>
                        $120
                      </span>
                      <h6 className='header_home_rectangle_little_div3_h6'>
                        Office Desk Chair
                      </h6>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <p className='header_home_rectangle_p'>
                    TOP COLLECTIONS 2023 
                  </p>
                  <h2 className='header_home_rectangle_h2'>
                    We Serve Your Dream Furniture
                  </h2>
                  <h6 className='header_home_rectangle_h6'>
                    Get 50% off all products
                  </h6>
                  <button className='header_home_rectangle_button'>
                    <span className='header_home_rectangle_button_span'>
                      Shop Now
                    </span>
                  </button>
                  <img src={home} className='header_home_rectangle_img' />

                  <div className='header_home_rectangle_little'>
                    <div className='header_home_rectangle_little_div'>
                      <img src={home_little} className='header_home_rectangle_little_div_img' />
                        <span className='header_home_rectangle_little_div_span'>
                          $120
                        </span>
                        <h6 className='header_home_rectangle_little_div_h6'>
                          Office Desk Chair
                        </h6>
                    </div>
                    <div className='header_home_rectangle_little_div2'>
                      <img src={home_little} className='header_home_rectangle_little_div2_img' />
                        <span className='header_home_rectangle_little_div2_span'>
                          $120
                        </span>
                        <h6 className='header_home_rectangle_little_div2_h6'>
                          Office Desk Chair
                        </h6>
                    </div>
                    <div className='header_home_rectangle_little_div3'>
                      <img src={home_little} className='header_home_rectangle_little_div3_img' />
                        <span className='header_home_rectangle_little_div3_span'>
                          $120
                        </span>
                        <h6 className='header_home_rectangle_little_div3_h6'>
                          Office Desk Chair
                        </h6>
                    </div>
                  </div>
              </SwiperSlide>
            </Swiper>
            </div>
        </div>

        
    </div>
  )
}

export default Header