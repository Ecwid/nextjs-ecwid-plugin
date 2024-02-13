"use client"
import React from 'react';
import ReactDOM from 'react-dom';

import {useState, useEffect, createContext} from 'react';

export const EcwidContext = createContext({});

const defaultStore = 13433173;

export const EcwidProvider = ({ value, children }) => {
 
  const [ecwidLoaded, setEcwidLoaded] = useState(false);
  
  const storeId = value.storeId ? value.storeId : defaultStore;

  useEffect(() => {
    function init_ecwid() {
      if (typeof Ecwid != 'undefined' && !ecwidLoaded) {
        Ecwid.OnAPILoaded.add(() => {
          setEcwidLoaded(true);
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
      // script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.src = 'https://app.ecwid.com/script.js?' + storeId + '&data_platform=nextjs';
      script.id = 'ecwid-script';
      script.onload = init_ecwid;
      document.body.appendChild(script);
    } else {
      init_ecwid();
    }
  });
  return (
    <EcwidContext.Provider value={{ ecwidLoaded, storeId }}>
      {children}
    </EcwidContext.Provider>
  );
}

export default EcwidProvider;
