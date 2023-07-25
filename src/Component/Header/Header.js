import React, { useEffect, useState } from 'react'
import './Header.scss'
import all from '../../images/all.svg'
import categories from '../../data/categories.json'

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
                    All Collections
                </h1>
                {/* <p className='header_pages_collection_p'>
                    {categoriesdata.map((category) => (
                      <span key={category.id} className="header_pages_collection_p_item">
                        {category.name}
                      </span>
                    ))}
                </p> */}
            </div>
            <div className='header_pages_page'>
                <div className='header_pages_page_title'>

                </div>
                <div className='header_pages_page_rectangle'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Header