
import { useState } from 'react'
import type { CepFormData } from './zod'
import { buildViaCepUrl, useCepForm } from './zod'
import type { Address } from '../../interfaces/address'
import formatCurrency from '../../utils/formatCurrency'

const SHIPPING_BY_REGION: Record<string, number> = {
    "Norte": 39.90,
    "Nordeste": 29.90,
    "Centro-Oeste": 19.90,
    "Sudeste": 14.90,
    "Sul": 9.90,
}

export const CEPForm = () => {
    const { register, handleSubmit, errors, isSubmitting } = useCepForm();
    const [address, setAddress] = useState<Address | null>(null);
    const [addressError, setAddressError] = useState<string | null>(null);

    const onSubmit = async ({ cep }: CepFormData) => {
        setAddressError(null);
        setAddress(null);

        try {
            const response = await fetch(buildViaCepUrl(cep));
            const data = await response.json();

            console.log("data.erro", data.erro);

            if (data.erro) {
                setAddressError("CEP não encontrado.");
                return;
            }

            const shippingCost = SHIPPING_BY_REGION[data.regiao];

            if (!shippingCost) {
                setAddressError("Região não suportada para entrega.");
                return;
            }

            console.log('Dados do CEP:', data)
            console.log('Custo de envio:', shippingCost)

            setAddress({ ...data, shippingCost: shippingCost })
        } catch (error) {
            console.error('Erro ao consultar CEP:', error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                <div className="flex gap-3">
                    <input
                        className="border border-[#c0c0c0] rounded-md p-3"
                        type="text"
                        placeholder="Insira seu CEP"
                        maxLength={9}
                        aria-invalid={Boolean(errors.cep)}
                        {...register('cep')}
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-black text-white py-3 px-6 rounded-md cursor-pointer hover:bg-gray-800 disabled:opacity-60"
                    >
                        { isSubmitting ? 'Consultando...' : 'Calcular' }
                    </button>


                </div>

                {errors.cep ? (
                    <span className="text-sm text-red-600">{errors.cep.message}</span>
                ) : null}
            </form>

            {addressError && (
                <div className="mt-4">
                    <p className="text-red-600 text-sm ">{addressError}</p>
                </div>
            )}

            {
                address && (
                    <div className="mt-4">
                        <p><strong>Região:</strong> {address.regiao}</p>
                        <p><strong>Custo de entrega:</strong> {formatCurrency(address.shippingCost)}</p>
                    </div>
                )
            }
        </>
    );
};

