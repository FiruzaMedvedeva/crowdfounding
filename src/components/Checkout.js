import React from 'react';

class Checkout extends React.Component {

  componentDidMount() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.innerHTML = `
      window.CKOConfig = {
        publicKey: 'pk_test_4f167d89-9c17-4285-991f-4e2b0ca63b6e',
        value: 10000,
        currency: 'KGS',
        paymentMode: 'cards',
        cardFormMode: 'cardTokenisation',
        renderMode: 1,
        buttonLabel: 'Писец',
        cardTokenised: function(event) {
          console.log(':>>>', event.data.cardToken);
        }
      };
    `;
    this.instance.appendChild(s);
    const script = document.createElement("script");

    script.src = "https://cdn.checkout.com/sandbox/js/checkout.js";
    script.async = true;

    this.instance.appendChild(script);
  }

  render() {
    return (
      <div className="">
        CHECKOUT
        <form class="payment-form" method="POST" action="https://merchant.com/successUrl" ref={el => this.instance = el}>

        </form>
      </div>
    );    
  }
};

export default Checkout;