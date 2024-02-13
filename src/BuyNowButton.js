"use client"
import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect, useContext } from 'react'
import {EcwidContext} from './EcwidProvider';

const BuyNowButton = ({ productId = 102852327, isShowPrice = true }) => {
    const {ecwidLoaded, storeId} = useContext(EcwidContext);
      useEffect(() => {
        if (ecwidLoaded && typeof Ecwid != 'undefined') {
          Ecwid.OnAPILoaded.add(function () {
            xProduct("display= price addtobag", "link=yes", "version=2", "show_border=", "show_price_on_button=1", "center_align=1");
          });
        }
    }, [ecwidLoaded]);


    return (
        <div className={"ecsp ecsp-SingleProduct-v2 ecsp-Product ecwid-SingleProduct-v2-centered ec-Product-" + productId} itemType="http://schema.org/Product" data-single-product-id={productId}>
            <div itemType="http://schema.org/Offer" itemScope itemProp="offers">
                {isShowPrice &&
                    <div className="ecwid-productBrowser-price ecwid-price" itemProp="price" data-spw-price-location="button" content="">
                        <div itemProp="priceCurrency"></div>
                    </div>
                }
            </div>
            <div customprop="addtobag"></div>
        </div>
    )
}

export default BuyNowButton
