import { useRegisterForm } from "./register-form.schema"

export const RegisterForm = () => {

    const { register, errors, isSubmitting } = useRegisterForm();

    return (
        <form className="text-black">

            { /* Campo de e-mail */}
            <div>
                <label className="text-xs text-gray-600">E-mail*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1 ${errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-accent"}`} type="email" {...register("email")} />

                {errors.email && <span className="text-xs text-red-600 mt-1">{errors.email.message}</span>}
            </div>

            { /* Campo de senha */}
            <div>
                <label className="text-xs text-gray-600">Senha*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1 ${errors.password ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-accent"}`} type="password" {...register("password")} />

                {errors.password && <span className="text-xs text-red-600 mt-1">{errors.password.message}</span>}
            </div>

            { /* Campo de cofirmar senha */}
            <div>
                <label className="text-xs text-gray-600">Confirmar Senha*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1 ${errors.confirmPassword ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-accent"}`} type="password" {...register("confirmPassword")} />

                {errors.confirmPassword && <span className="text-xs text-red-600 mt-1">{errors.confirmPassword.message}</span>}
            </div>

            { /* Campo de nome */}
            <div>
                <label className="text-xs text-gray-600">Nome*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1 ${errors.firstName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-accent"}`} type="text" {...register("firstName")} />

                {errors.firstName && <span className="text-xs text-red-600 mt-1">{errors.firstName.message}</span>}
            </div>

            { /* Campo de sobrenome */}
            <div>
                <label className="text-xs text-gray-600">Sobrenome*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1 ${errors.lastName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-accent"}`} type="text" {...register("lastName")} />

                {errors.lastName && <span className="text-xs text-red-600 mt-1">{errors.lastName.message}</span>}
            </div>

            { /* Campo de cpf */}
            <div>
                <label className="text-xs text-gray-600">CPF*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1 ${errors.cpf ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-accent"}`} type="text" {...register("cpf")} />

                {errors.cpf && <span className="text-xs text-red-600 mt-1">{errors.cpf.message}</span>}
            </div>

            { /* Campo de data de nascimento */}
            <div>
                <label className="text-xs text-gray-600">Data de Nascimento</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1 ${errors.birthDate ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-accent"}`} type="date" {...register("birthDate")} />

                {errors.birthDate && <span className="text-xs text-red-600 mt-1">{errors.birthDate.message}</span>}
            </div>

            { /* Campo de celular */}
            <div>
                <label className="text-xs text-gray-600">Telefone*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1 ${errors.cellphone ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-accent"}`} type="tel" {...register("cellphone")} />

                {errors.cellphone && <span className="text-xs text-red-600 mt-1">{errors.cellphone.message}</span>}

                <button className="cursor-pointer bg-accent text-white font-semibold uppercase rounded-md p-3 mt-4 transition-all hover:bg-accent-hover disabled:opacity-50 w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar"}
                </button>
            </div>

        </form>
    )
}