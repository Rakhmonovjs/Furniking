import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Trend.scss'
import cartIcon from '../../images/cart.svg';
import { IoIosArrowDown, IoIosArrowRoundForward } from 'react-icons/io';
import data from '../../data/products.json';
import { useEffect, useState } from 'react';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { CiHeart } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from "swiper";



const Top = () => {
    // const { pages } = products
    const [activeSortCategory, setactiveSortCategory] = useState(0);
    const [activeSortPrice, setactiveSortPrice] = useState(50);
    const [activeSortSize, setactiveSortSize] = useState(0);
    const [sortProductCategory, setsortProductCategory] = useState(1);
    const [products, setproducts] = useState(data);
    const [sortedCategory, setsortedCategory] = useState(false);
    const [activePagination, setactivePagination] = useState(0);
  
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state);
  
    const dispatchProduct = (data) => {
      const action = {
        type: "ADD_TO_INITIALCART",
        data: data
      }
  
      dispatch(action);
    }
  
    useEffect(() => {
      let res = false
      if (activeSortSize !== 0) {
        res = data.filter(({ size }) => { return size === activeSortSize });
      }
      if (activeSortCategory !== 0) {
        if (res) res = res.filter(({ categoryId }) => { return categoryId === activeSortCategory })
        else res = data.filter(({ categoryId }) => { return categoryId === activeSortCategory })
        setsortedCategory(data.filter(({ categoryId }) => { return categoryId === activeSortCategory }))
      } else {
        setsortedCategory(false);
      }
      if (res === false) res = data;
      setproducts(res);
  
      if (!res) res = data
    }, [activeSortSize, activeSortCategory]);
  
    useEffect(() => {
      let res = false;
      if (sortProductCategory === 3) res = data.filter((el) => { return el.sale ? el : null });
      if (sortProductCategory === 2) res = data.filter((el) => { return el.sale ? el : null });
      if (sortProductCategory === 1) res = data;
      setproducts(res);
  
    }, [sortProductCategory]);
  
    const activeCategory = {
      "fontWeight": "700",
      "color": "#46A358"
    };

  return (
    <div className="main-product-list">
    <div className="main-product-list-category">
      <div className="main-product-list-category-list">
        <span onClick={(() => setsortProductCategory(1))}
          style={sortProductCategory === 1 ? activeCategory : null}
        >All Plants</span>
        <span onClick={(() => setsortProductCategory(2))}
          style={sortProductCategory === 2 ? activeCategory : null}
        >New Arrivals</span>
        <span onClick={(() => setsortProductCategory(3))}
          style={sortProductCategory === 3 ? activeCategory : null}
        >Sale</span>
      </div>
      <div className="main-product-list-category-sortBy">
        <span>Short by: Default sorting</span>
        <IoIosArrowDown />
      </div>
    </div>
    <div className="main-product-list-items">
      {
        products.slice(activePagination * 9, 9)?.map(({ id, name, img, price, sale, }) => {
          return <article key={id} className="main-product-list-item">
            <div className="main-product-list-item-img">
              <img src={img} alt="" />
              {
                sale ?
                  <div className='main-product-list-item-img-sale'>13% OFF</div>
                  : null
              }
              <div className="main-product-list-item-img-actions">
                <div onClick={() => dispatchProduct({ id, name, img, price, sale })}>
                  <FiShoppingCart style={cart.data.find((e) => e.id === id) ? { color: "#46A358" } : null} className="main-product-list-item-img-actions-cart" src={cartIcon} alt="error" />
                </div>
                <div>
                  <CiHeart className="main-product-list-item-img-actions-like" />
                </div>
                <div>
                  <FiSearch className="main-product-list-item-img-actions-search" />
                </div>
              </div>
            </div>
            <div className="main-product-list-item-desc">
              <p>{name}</p>
              <strong>${price}</strong>
              {
                sale ?
                  <span>${sale}</span>
                  : null
              }
            </div>
          </article>
        })
      }
    </div>
    <div className="main-product-list-pagination">
      <div className="main-product-list-pagination-wrapper">
        {
          [...Array(Math.ceil(products.length / 9))]?.map((el, i, arr) => {
            if (arr.length > 1) return <div key={i} className="main-product-list-pagination-item"
              onClick={() => setactivePagination(i)}
              style={activePagination === i ? { "backgroundColor": "#46A358" } : null}>
              <span style={activePagination === i ? { "color": "#FFFFFF" } : null}>{i + 1}</span>
            </div>
            return null
          })
        }
      </div>
    </div>
  </div>
    
    
    
    // <Swiper 
    //         modules={[Pagination, Navigation]} 
    //         pagination={{ clickable: true}}
    //         navigation={true}
    //         className='productslider'
    //         >
    //     {[products].map((top, index) => {
    //         return (
    //             <SwiperSlide key={index} >
    //                 <div className='swiperslide'>
    //                     {top.toplist.map((product, index) => {
    //                         const { img, name, title, price, discount } = product;
    //                         return (
    //                             <div className='swiperslide_top ' key={index}>
    //                                 <div className=''>
    //                                     <img src={img} alt='' className='swiperslide_top_img'/>
                                        
    //                                     <h2 className='swiperslide_top_name'>{name}</h2>
    //                                     <h6 className='swiperslide_top_title'>{title}</h6>
    //                                     <p className='swiperslide_top_price'>{price}</p>
    //                                     <span className='swiperslide_top_discount'>{discount}</span>
    //                                 </div>
    //                             </div>    
    //                         );
    //                     })};
    //                 </div>
    //             </SwiperSlide>
    //         )
    //     })}
    // </Swiper>
  )
}

export default Top