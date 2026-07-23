import galeriaHomem from '@/assets/images/galeria-homem.jpg'
import galeriaModelo from '@/assets/images/galeria-modelo.jpg'
import galeriaTenisBrancoPreto from '@/assets/images/galeria-tenis-branco-e-preto.jpg'
import galeriaTenisCinza from '@/assets/images/galeria-tenis-cinza.jpg'
import galeriaTenisColorido from '@/assets/images/galeria-tenis-colorido.jpg'
import galeriaTenisRoxo from '@/assets/images/galeria-tenis-roxo.jpg'
import { Button } from '../Button'

export const Gallery = () => {
    return (
        <section className='container mb-10'>
            <div className="grid gap-[10px] [grid-template-columns:1fr_1fr] [grid-template-rows:repeat(5,auto)] [grid-template-areas:'highlight_highlight''sneaker-white_sneaker-white''model_sneaker-color''model_sneaker-silver''sneaker-purple_sneaker-purple'] lg:gap-[30px] lg:[grid-template-columns:repeat(4,1fr)] lg:[grid-template-rows:repeat(3,300px)] lg:[grid-template-areas:'highlight_highlight_sneaker-purple_sneaker-purple''highlight_highlight_model_sneaker-color''sneaker-white_sneaker-white_model_sneaker-silver']">
                <div className="relative overflow-hidden rounded-[20px] [grid-area:highlight]">
                    <img className='h-full w-full object-cover' src={galeriaHomem} alt='Modelo masculino usando tênis' />

                    <div className='absolute inset-0 flex flex-col items-center justify-center gap-5 bg-black/10 px-4 text-center text-white'>
                        <div className='w-full max-w-[336px]'>
                            <h3 className='mb-2.5 text-xl font-medium leading-6 tracking-[0.08em]'>Krypton One</h3>
                            <h2 className='text-2xl font-medium leading-8 tracking-[0.08em]'>Estilo urbano com atitude</h2>
                        </div>

                        <div className='flex items-center gap-2.5'>
                            <Button variant='secondary' size='lg'>Feminino</Button>
                            <Button variant='secondary' size='lg'>Masculino</Button>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden rounded-[20px] [grid-area:sneaker-purple]">
                    <img className='h-full w-full object-cover' src={galeriaTenisRoxo} alt='Tênis roxo' />
                </div>

                <div className="overflow-hidden rounded-[20px] [grid-area:model]">
                    <img className='h-full w-full object-cover' src={galeriaModelo} alt='Modelo feminina usando tênis colorido' />
                </div>

                <div className="overflow-hidden rounded-[20px] [grid-area:sneaker-color]">
                    <img className='h-full w-full object-cover' src={galeriaTenisColorido} alt='Tênis colorido' />
                </div>

                <div className="overflow-hidden rounded-[20px] [grid-area:sneaker-white]">
                    <img className='h-full w-full object-cover' src={galeriaTenisBrancoPreto} alt='Tênis preto e branco' />
                </div>

                <div className="overflow-hidden rounded-[20px] [grid-area:sneaker-silver]">
                    <img className='h-full w-full object-cover' src={galeriaTenisCinza} alt='Tênis cinza' />
                </div>
            </div>
        </section>
    )
}