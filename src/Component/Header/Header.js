import React, { useState } from 'react'
import './Header.scss'
import all from '../../images/all.svg'
import categories from '../../data/categories.json'
import data from '../../data/products.json'

const Header = () => {
    const [activeSortCategory, setactiveSortCategory] = useState(0);
    // const [activeSortPrice, setactiveSortPrice] = useState(50);
    // const [activeSortSize, setactiveSortSize] = useState(0);
    // const [sortProductCategory, setsortProductCategory] = useState(1);
    // // const [products, setproducts] = useState(data);
    // const [sortedCategory, setsortedCategory] = useState(false);
    // const [activePagination, setactivePagination] = useState(0);
    // // const dispatch = useDispatch();
    // const { cart } = useSelector(state => state);
  
    // // const dispatchProduct = (data) => {
    // //   const action = {
    // //     type: "ADD_TO_INITIALCART",
    // //     data: data
    // //   }
  
    // //   dispatch(action);
    // // }
    
  const activeCategory = {
    "fontWeight": "700",
    "color": "#46A358"
  };

  return (
    <div className='header'>
        <div className='header_pages'>
            <div className='header_pages_collection'>
                <img src={all} className='header_pages_collection_icon' />
                <h1 className='header_pages_collection_all'>
                    All Collections
                </h1>
                <p className='header_pages_collection_p'>
                    {
                      categories.map(({ id, name }) => {
                        return <li key={id} className='header_pages_collection_p_item'
                          onClick={(() => setactiveSortCategory((e) => e === id ? 0 : id))}
                        >
                          <span style={activeSortCategory === id ? activeCategory : null}>{name}</span>
                          <span style={activeSortCategory === id ? activeCategory : null}>({
                            data.filter(({ categoryId }) => {
                              return categoryId === id
                            }).length
                          })</span>
                        </li>
                      })
                    }
                </p>

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