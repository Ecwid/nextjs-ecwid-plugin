import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect } from 'react'

const BuyNowButton = ({ storeId = 13433173, productId = 102852327, isShowPrice = true }) => {

    useEffect(() => {

        function load_ecwid() {
            if (typeof Ecwid != 'undefined') {
                xProduct("display= price addtobag", "link=yes", "version=2", "show_border=", "show_price_on_button=1", "center_align=1");
            }
        }

        window.ecwid_script_defer = true;
        window.ecwid_dynamic_widgets = true;

        if (!document.getElementById('ecwid-script')) {
            var script = document.createElement('script');
            script.charset = 'utf-8';
            script.type = 'text/javascript';
            script.src = 'https://app.ecwid.com/script.js?' + storeId + '&data_platform=nextjs';
            script.id = 'ecwid-script'
            script.onload = load_ecwid
            document.body.appendChild(script);
        } else {
            load_ecwid()
        }
    })

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