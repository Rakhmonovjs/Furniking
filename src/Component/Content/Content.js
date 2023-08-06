import React from 'react'
import shipping from '../../images/shipping.svg'
import gift from '../../images/gift.svg'
import quick from '../../images/quick.svg'
import support from '../../images/support.svg'
import modern from '../../images/modern.png'
import bookcase from '../../images/bookcase.png'
import sofa from '../../images/sofa.png'
import './Content.scss'


const Content = () => {
  return (
    <div className='content'>
        <div className='content_cards'>

          {/* Shipping */}
          <div className='content_cards_shipping'>
            <img src={shipping} className='content_cards_shipping_img' />
            <p className='content_cards_shipping_p'>
                Free Shipping
              <span className='content_cards_shipping_p_span'>
                Orders over $100
             </span>
            </p>
            
          </div>
        

        {/* Gift  */}
        <div className='content_cards_gift'>
          <img src={gift} className='content_cards_gift_img' />
          <p className='content_cards_gift_p' >
            Smart Gift Card
            <span className='content_cards_gift_p_span'>
               Buy $1000 to get card
            </span>
          </p>
          
        </div>

        {/* Quick  */}
        <div className='content_cards_quick'>
          <img src={quick} className='content_cards_quick_img' />
          <p className='content_cards_quick_p' >
            Quick Payment
              <span className='content_cards_quick_p_span'>
                100% secure payment
              </span>  
          </p>
        </div>

        {/* Support  */}
        <div className='content_cards_support'>
          <img src={support} className='content_cards_support_img' />
          <p className='content_cards_support_p' >
                24/7 Support
              <span className='content_cards_support_p_span'>
                Quick support
              </span>
          </p>
          
        </div>
      </div>  
          
      <div className='content_discont'>
        {/* Modern  */}
        <div className='content_discont_modern'>
          <img src={modern} className='content_discont_modern_img' />
          <h2 className='content_discont_modern_h2'>
            Modern Furniture Collections
          </h2>
          <span className='content_discont_modern_span'>
            Starting from $500
          </span>
          <p className='content_discont_modern_p'>
            Read more
          </p>

        </div>
            {/* Bookcase  */}
        <div className='content_discont_bookcase'>
        <img src={bookcase} className='content_discont_bookcase_img' />
            
            <h2 className='content_discont_bookcase_h2'>
              Geometric Bookcase
            </h2>
            <span className='content_discont_bookcase_span'>
              Up to 20% discount
            </span>
            <p className='content_discont_bookcase_p'>
              Read more
            </p>
            
        </div>

        {/* Sofa */}
        <div className='content_discont_sofa'>
          <img src={sofa} className='content_discont_sofa_img' />
          <h2 className='content_discont_sofa_h2'>
            Minimal Sofa collections 
          </h2>
          <span className='content_discont_sofa_span'>
            Sale upto 40% discount
          </span>
          <p className='content_discont_sofa_p'>
            Read more
          </p>

        </div>
      </div>
    </div>
  )
}

export default Content