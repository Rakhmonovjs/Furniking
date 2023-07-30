import React from 'react'
import shipping from '../../images/shipping.svg'
import gift from '../../images/gift.svg'
import quick from '../../images/quick.svg'
import support from '../../images/support.svg'
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
            </p>
             <span className='content_cards_shipping_span'>
              Orders over $100
             </span>
          </div>
        </div>

        {/* Gift  */}
        <div className='content_cards_gift'>
          <img src={gift} className='content_cards_gift_img' />
          <p className='content_cards_gift_p' >
            Smart Gift Card
          </p>
          <span className='content_cards_gift_span'>
            Buy 1000
          </span>
        </div>

        {/* Quick  */}
        <div className='content_cards_quick'>
          <img src={quick} className='content_cards_quick_img' />
          <p className='content_cards_quick_p' >
            Quick Payment
          </p>
          <span className='content_cards_quick_span'>
            Buy 1000
          </span>
        </div>

        {/* Support  */}
        <div className='content_cards_support'>
          <img src={support} className='content_cards_support_img' />
          <p className='content_cards_support_p' >
            Quick Payment
          </p>
          <span className='content_cards_support_span'>
            Buy 1000
          </span>
        </div>
        
    </div>
  )
}

export default Content