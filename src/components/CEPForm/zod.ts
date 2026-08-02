import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type UseFormProps } from 'react-hook-form'
import { z } from 'zod'

// Aceita CEP nos formatos 00000-000 e 00000000.
const cepRegex = /^\d{5}-?\d{3}$/

export const cepFormSchema = z.object({
    cep: z
        .string()
        .trim()
        .min(1, 'CEP e obrigatorio.')
        .regex(cepRegex, 'Informe um CEP valido. Ex: 00000-000.'),
})

export type CepFormData = z.infer<typeof cepFormSchema>

// URL base da API do ViaCEP.
export const viaCepBaseUrl = 'https://viacep.com.br/ws'

// Remove qualquer caractere nao numerico do CEP.
export const normalizeCep = (cep: string) => cep.replace(/\D/g, '')

// Monta a URL final da consulta com o CEP normalizado.
export const buildViaCepUrl = (cep: string) => `${viaCepBaseUrl}/${normalizeCep(cep)}/json/`

// Valores iniciais do formulario de CEP.
export const cepFormDefaultValues: CepFormData = {
    cep: '',
}

// Configuracao centralizada do react-hook-form com Zod.
export const cepFormConfig: UseFormProps<CepFormData> = {
    resolver: zodResolver(cepFormSchema),
    defaultValues: cepFormDefaultValues,
    mode: 'onBlur',
}

// Hook pronto para uso no componente.
export const useCepForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<CepFormData>(cepFormConfig)

    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
    }
}
