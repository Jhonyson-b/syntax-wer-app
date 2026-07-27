import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type UseFormProps } from 'react-hook-form'
import { z } from 'zod'
import { validateCPF } from '../../utils/cpf.validator'



// Garante uma data valida, nao futura e dentro de um intervalo razoavel.
const validateBirthDate = (value: string) => {
    if (!value) {
        return false
    }

    const date = new Date(value)
    if (Number.isNaN(date.getTime())) {
        return false
    }

    const today = new Date()
    if (date > today) {
        return false
    }

    const minDate = new Date(1900, 0, 1)
    return date >= minDate
}

export const registerSchema = z
    .object({
        // E-mail obrigatorio com formato valido.
        email: z
            .string()
            .trim()
            .min(1, 'E-mail e obrigatorio.')
            .pipe(z.email('Informe um e-mail valido.')),
        // Senha obrigatoria com minimo de 8 caracteres.
        password: z
            .string()
            .min(1, 'Senha e obrigatoria.')
            .min(8, 'A senha deve ter no minimo 8 caracteres.'),
        // Campo obrigatorio para confirmar a senha digitada.
        confirmPassword: z
            .string()
            .min(1, 'Confirmacao de senha e obrigatoria.'),
        // CPF obrigatorio e validado pelos digitos verificadores.
        cpf: z
            .string()
            .min(1, 'CPF e obrigatorio.')
            .refine(validateCPF, 'Informe um CPF valido.'),
        // Data de nascimento obrigatoria e valida.
        birthDate: z
            .string()
            .min(1, 'Data de nascimento e obrigatoria.')
            .refine(validateBirthDate, 'Informe uma data de nascimento valida.'),
        // Primeiro nome obrigatorio.
        firstName: z
            .string()
            .trim()
            .min(1, 'Primeiro nome e obrigatorio.'),
        // Ultimo nome obrigatorio.
        lastName: z
            .string()
            .trim()
            .min(1, 'Ultimo nome e obrigatorio.'),
        // Telefone obrigatorio.
        cellphone: z
            .string()
            .min(1, 'Telefone é obrigatorio.')
    })
    // Garante que senha e confirmacao sejam identicas.
    .refine((data) => data.password === data.confirmPassword, {
        message: 'As senhas nao coincidem.',
        path: ['confirmPassword'],
    })

export type RegisterSchemaData = z.infer<typeof registerSchema>

// Valores iniciais usados no formulario de registro.
export const registerFormDefaultValues: RegisterSchemaData = {
    email: '',
    password: '',
    confirmPassword: '',
    cpf: '',
    birthDate: '',
    firstName: '',
    lastName: '',
    cellphone: '',
}

// Configuracao pronta para useForm com validacao do Zod.
export const registerFormConfig: UseFormProps<RegisterSchemaData> = {
    resolver: zodResolver(registerSchema),
    defaultValues: registerFormDefaultValues,
    mode: 'onBlur',
    criteriaMode: 'all',
    reValidateMode: 'onChange',
}

// Hook pronto para uso no componente de cadastro.
export const useRegisterForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        setError,
        reset,
    } = useForm<RegisterSchemaData>(registerFormConfig)

    return {
        handleSubmit,
        register,
        errors,
        isSubmitting,
        setError,
        reset,
    }
}