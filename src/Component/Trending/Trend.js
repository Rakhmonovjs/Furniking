import React from 'react';
import './Trend.scss';
import lcdchair from './lcdchair.png'
import trend from '../../data/trend.json'; // data.json fayli
import scssData from './scssData.json'; // scssData.json fayli


const Trend = () => {

  return (
    <div className='trend'>
      <h1 className='trend_h1'>
        Trending
      </h1>

      <div className='trend_pages'>
          <div className='trend_pages_top'>
              {trend.map(({ name, title, price, discount, image }) => (
                <div key={name} className='trend_pages_top_box'>
                  <img src={require(`../../images/${image}`).default} className='trend_pages_top_box_img' alt={name} />
                  <h6 className='trend_pages_top_box_name'>{name}</h6>
                  <h4 className='trend_pages_top_box_title'>{title}</h4>
                  <p className='trend_pages_top_box_price'>$ {price}</p>
                  <span className='trend_pages_top_box_discount'>$ {discount}</span>
                </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default Trend;
