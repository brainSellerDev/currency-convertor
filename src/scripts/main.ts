import '../stylesheet/reset.scss'
import '../stylesheet/index.scss'
import { currencyTypes, currenciesTypesEnum } from './currencies'

let currentCurrencyAmountField: HTMLInputElement
let convertedCurrencyAmountField: HTMLInputElement
let currentCurrencyType: HTMLSelectElement
let convertedCurrencyType: HTMLSelectElement
let swapBtn: HTMLElement
let currencyType: currenciesTypesEnum = currenciesTypesEnum.USD
let convertedType: currenciesTypesEnum = currenciesTypesEnum.RUB
let currentAmount: string = ''
let convertedAmount: string = ''

function initElements(): void {
	currentCurrencyAmountField = document.querySelector(
		'.currencies-value-field__amount'
	) as HTMLInputElement

	convertedCurrencyAmountField = document.querySelector(
		'.currencies-value-field__converted'
	) as HTMLInputElement

	currentCurrencyType = document.querySelector('.amount') as HTMLSelectElement

	convertedCurrencyType = document.querySelector(
		'.converted'
	) as HTMLSelectElement

	swapBtn = document.querySelector('.swap-btn') as HTMLElement
}

function initHandleClicks(): void {
	currentCurrencyAmountField.addEventListener('input', (e: Event): void => {
		const target = e.target as HTMLInputElement
		currentAmount = target.value
		convertToCurrency(
			currencyType,
			convertedType,
			currentAmount,
			convertedAmount
		)
	})
	convertedCurrencyAmountField.addEventListener('input', (e: Event): void => {
		const target = e.target as HTMLInputElement
		convertedAmount = target.value
		convertToCurrency(
			currencyType,
			convertedType,
			currentAmount,
			convertedAmount
		)
	})
	currentCurrencyType.addEventListener('change', (e: Event): void => {
		const target = e.target as HTMLSelectElement
		currencyType = target.value as currenciesTypesEnum
		convertToCurrency(
			currencyType,
			convertedType,
			currentAmount,
			convertedAmount
		)
	})
	convertedCurrencyType.addEventListener('change', (e: Event): void => {
		const target = e.target as HTMLSelectElement
		convertedType = target.value as currenciesTypesEnum
		convertToCurrency(
			currencyType,
			convertedType,
			currentAmount,
			convertedAmount
		)
	})

	swapBtn.addEventListener('click', (): void => {
		currentCurrencyType.value = convertedType
		convertedCurrencyType.value = currencyType
		currencyType = currentCurrencyType.value as currenciesTypesEnum
		convertedType = convertedCurrencyType.value as currenciesTypesEnum
		convertToCurrency(
			currencyType,
			convertedType,
			currentAmount,
			convertedAmount
		)
	})
}

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
				(
					Number(currentValue) *
					Number(value[currentType as currenciesTypesEnum])
				).toFixed(2)
			)
		}
	}
	convertedCurrencyAmountField.value = convertedValue
}

function init(): void {
	initElements()
	initHandleClicks()
}
init()
