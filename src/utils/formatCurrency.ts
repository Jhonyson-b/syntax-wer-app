type CurrencyFormatOptions = {
	locale?: string
	currency?: string
	minimumFractionDigits?: number
	maximumFractionDigits?: number
}

export function formatCurrency(
	value: number,
	{
		locale = 'pt-BR',
		currency = 'BRL',
		minimumFractionDigits = 2,
		maximumFractionDigits = 2,
	}: CurrencyFormatOptions = {},
): string {
	const safeValue = Number.isFinite(value) ? value : 0

	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency,
		minimumFractionDigits,
		maximumFractionDigits,
	}).format(safeValue)
}

export default formatCurrency
