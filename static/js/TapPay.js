
TPDirect.setupSDK(`${APP_ID}`, `${APP_KEY}`, 'sandbox');

config={
     fields : {
        number: {
            // css selector
            element: '#card-number',
            placeholder: '**** **** **** ****'
        },
        expirationDate: {
            // DOM object
            element: '#card-expiration-date',
            placeholder: 'MM / YY'
        },
        ccv: {
            element: '#card-ccv',
            placeholder: 'ccv'
        }
    },
    styles: {
        // Style all elements
        'input': {
            'color': 'black'
        },
        '.valid': {
            'color': 'green'
        },
        '.invalid': {
            'color': 'red'
        },
    },
    isMaskCreditCardNumber: true,
    maskCreditCardNumberRange: {
            beginIndex: 6,
            endIndex: 11
        }
}
TPDirect.card.setup(config)

function clickOrder(){
    alert("clickorder")
}