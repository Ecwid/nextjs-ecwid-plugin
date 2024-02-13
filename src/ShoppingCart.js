"use client"
import React from 'react'
import ReactDOM from 'react-dom'

import { useEffect, useContext } from 'react'
import {EcwidContext} from './EcwidProvider';

const ShoppingCart = ({
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
    const {ecwidLoaded, storeId} = useContext(EcwidContext);

    useEffect(() => {
      if (ecwidLoaded && typeof Ecwid != 'undefined') {
        Ecwid.init(); 
      }
    }, [ecwidLoaded]);

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
