// Valida CPF verificando formato, repeticao e digitos verificadores.
export const validateCPF = (cpf: string) => {
    const cleaned = cpf.replace(/\D/g, '')

    if (cleaned.length !== 11) {
        return false
    }

    // Rejeita CPFs com todos os digitos iguais.
    if (/^(\d)\1{10}$/.test(cleaned)) {
        return false
    }

    const digits = cleaned.split('').map(Number)

    // Calcula cada digito verificador do CPF.
    const calcCheckDigit = (base: number[], factor: number) => {
        const sum = base.reduce((acc, digit, index) => {
            const currentFactor = factor - index
            return acc + digit * currentFactor
        }, 0)

        const remainder = (sum * 10) % 11
        return remainder === 10 ? 0 : remainder
    }

    const firstDigit = calcCheckDigit(digits.slice(0, 9), 10)
    if (firstDigit !== digits[9]) {
        return false
    }

    const secondDigit = calcCheckDigit(digits.slice(0, 10), 11)
    return secondDigit === digits[10]
}