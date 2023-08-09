import '../stylesheet/reset.scss'
import '../stylesheet/index.scss'
import { currencyTypes } from './currencies'

let currentCurrencyAmountField = document.querySelector(
	'.currencies-value-field__amount'
) as HTMLInputElement

let convertedCurrencyAmountField = document.querySelector(
	'.currencies-value-field__converted'
) as HTMLInputElement

let currentCurrencyType = document.querySelector('.amount') as HTMLSelectElement

let convertedCurrencyType = document.querySelector(
	'.converted'
) as HTMLSelectElement

let swapBtn = document.querySelector('.swap-btn') as HTMLElement

let currencyType: string = currentCurrencyType.value
let convertedType: string = convertedCurrencyType.value
let currentAmount: string = ''
let convertedAmount: string = ''

currentCurrencyAmountField.addEventListener('input', (e: Event): void => {
	const target = e.target as HTMLInputElement
	currentAmount = target.value
	convertToCurrency(currencyType, convertedType, currentAmount, convertedAmount)
})
convertedCurrencyAmountField.addEventListener('input', (e: Event): void => {
	const target = e.target as HTMLInputElement
	convertedAmount = target.value
	convertToCurrency(currencyType, convertedType, currentAmount, convertedAmount)
})
currentCurrencyType.addEventListener('change', (e: Event): void => {
	const target = e.target as HTMLSelectElement
	currencyType = target.value
	convertToCurrency(currencyType, convertedType, currentAmount, convertedAmount)
})
convertedCurrencyType.addEventListener('change', (e: Event): void => {
	const target = e.target as HTMLSelectElement
	convertedType = target.value
	convertToCurrency(currencyType, convertedType, currentAmount, convertedAmount)
})

swapBtn.addEventListener('click', (): void => {
	currentCurrencyType.value = convertedType
	convertedCurrencyType.value = currencyType
	currencyType = currentCurrencyType.value
	convertedType = convertedCurrencyType.value
	convertToCurrency(currencyType, convertedType, currentAmount, convertedAmount)
})

function convertToCurrency(
	currentType: string,
	convertedType: string,
	currentValue: string,
	convertedValue: string
): void {
	for (const [key, value] of Object.entries(currencyTypes)) {
		if (currencyType === convertedType) {
			convertedValue = currentValue
		} else if (convertedType === key) {
			convertedValue = String(
				(Number(currentValue) * Number(value[currentType])).toFixed(2)
			)
		}
	}
	convertedCurrencyAmountField.value = convertedValue
}
