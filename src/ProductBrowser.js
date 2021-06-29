import React from 'react'
import ReactDOM from 'react-dom'
import {useEffect} from 'react'

const ProductBrowser = (props) => {

  useEffect(() => {

    let ecwidLoaded = false;

    function load_ecwid() {
      if( typeof Ecwid != 'undefined' ) {
        Ecwid.OnAPILoaded.add(function() {
          if (!ecwidLoaded) {
            ecwidLoaded = true;
            xProductBrowser("categoriesPerRow=3", "views=grid(3,3) list(10) table(20)", "categoryView=grid", "searchView=list", "id=ecStoreProductBrowser");
          }
        });
      }
    }

    window.ec = window.ec || {};
    window.ec.config = window.ec.config || {};
    window.ec.config.storefrontUrls = window.ec.config.storefrontUrls || {};
    window.ec.config.storefrontUrls.cleanUrls = true;
    window.ec.config.storefrontUrls.queryBasedCleanUrls = true;

    window.ecwid_script_defer = true;
    window.ecwid_dynamic_widgets = true;
    
    if (!document.getElementById('ecwid-script')) {
      var script = document.createElement('script');
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.src = 'https://app.ecwid.com/script.js?' + props.storeId + '&data_platform=nextjs';
      script.id = 'ecwid-script'
      script.onload = load_ecwid
      document.body.appendChild(script);
    } else {
      load_ecwid()
    }
  })

  return (
    <div id="ecStoreProductBrowser"></div>
  )
}

ProductBrowser.defaultProps = {storeId: 13433173};

export default ProductBrowser