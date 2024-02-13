import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect } from 'react'

const ShoppingCart = ({
  storeId = 13433173,
  layout="",
  fixed=false,
  fixedPosition="",
  fixedShape="",
  horizontalIndent="",
  verticalIndent="",
  showEmptyCart="false",
  showBuyAnimation="true",
  icon="bag",
}) => {

    useEffect(() => {

        function init_cart() {
            if (typeof Ecwid != 'undefined') {
                Ecwid.init();
            }
        }

        if (!document.getElementById('ecwid-script')) {
            var script = document.createElement('script');
            // script.charset = 'utf-8';
            script.type = 'text/javascript';
            script.src = 'https://app.ecwid.com/script.js?' + storeId + '&data_platform=nextjs';
            script.id = 'ecwid-script';
            script.onload = init_cart;
            document.body.appendChild(script);
        } else {
            init_cart();
        }
    })

    return (
      <div
        className="ec-cart-widget"
        data-layout={layout}
        data-fixed={fixed}
        data-fixed-position={fixedPosition}
        data-fixed-shape={fixedShape}
        data-horizontal-indent={horizontalIndent}
        data-vertical-indent={verticalIndent}
        data-show-empty-cart={showEmptyCart}
        data-show-buy-animation={showBuyAnimation}
        data-icon={icon}
      />
    )
}

export default ShoppingCart
