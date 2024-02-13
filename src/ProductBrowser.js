"use client"
import React from 'react'
import ReactDOM from 'react-dom'

import { useEffect, useState, useContext } from 'react'
import {EcwidContext} from './EcwidProvider';

const ProductBrowser = () => {
    const {ecwidLoaded, storeId} = useContext(EcwidContext);

    const [productInitalized, setProductInitialized] = useState(false);

    useEffect(() => {
      if (ecwidLoaded && typeof Ecwid != 'undefined' && !productInitalized) {
        setProductInitialized(true);
        xProductBrowser("categoriesPerRow=3", "views=grid(3,3) list(10) table(20)", "categoryView=grid", "searchView=list", "id=ecStoreProductBrowser");
      }
    }, [ecwidLoaded]);

    return (
        <div id="ecStoreProductBrowser"></div>
    )
}

export default ProductBrowser
