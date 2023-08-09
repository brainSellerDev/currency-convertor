interface ICurrenciesTypes {
	[propName: string]: {
		[propName: string]: number
	}
}

export const currencyTypes: ICurrenciesTypes = {
    // 1 currencyType = RUB
	RUB: {
		USD: 97.27,
		EUR: 106.58,
		CNY: 13.51,
		TJS: 8.85
	},
    // 1 currencyType = TJS
	TJS: {
		USD: 10.98,
		EUR: 12.05,
		CNY: 1.53,
		RUB: 0.11
	},
    // 1 currencyType = USD
	USD: {
		TJS: 0.091,
		EUR: 1.10,
		CNY: 0.14,
		RUB: 0.01
	},
    // 1 currencyType = EUR
	EUR: {
		TJS: 0.083,
		USD: 0.91,
		CNY: 0.13,
		RUB: 0.0094
	},
    // 1 currencyType = CNY
    CNY:{
        TJS: 0.66,
		USD: 7.21,
		EUR: 7.91,
		RUB: 0.074
    }
}
