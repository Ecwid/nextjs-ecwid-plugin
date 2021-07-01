# Ecwid Ecommerce Shopping Cart
Powerful, easy to use ecommerce shopping cart plugin for Next.js sites. Over 1 million sellers in 175 countries, 45 languages supported. PayPal, Stripe and 40 more payment options. Real-time shipping integrations. Selling on Instagram and Facebook.

## Installation

    npm install @ecwid/nextjs-ecwid-plugin

### Usage 

In a your app, use the ProductBrowser or BuyNowButton components.

ProductBrowser usage example:
```javascript
import {ProductBrowser} from '@ecwid/nextjs-ecwid-plugin'

export default function Store() {
  return (
    <>
      <ProductBrowser
        storeId="13433173"
      />
    </>
  )
}
``` 

Buy Now Button usage example:
```javascript
import {BuyNowButton} from '@ecwid/nextjs-ecwid-plugin'

export default function Store() {
  return (
    <>
      <BuyNowButton
        storeId="13433173"
        productId="102852327"
        isShowPrice={false}
      />
    </>
  )
}
``` 

## License

This project is [Apache2.0](LICENSE) licensed.