import galeriaHomem from '@/assets/images/galeria-homem.jpg'
import galeriaModelo from '@/assets/images/galeria-modelo.jpg'
import galeriaTenisBrancoPreto from '@/assets/images/galeria-tenis-branco-e-preto.jpg'
import galeriaTenisCinza from '@/assets/images/galeria-tenis-cinza.jpg'
import galeriaTenisColorido from '@/assets/images/galeria-tenis-colorido.jpg'
import galeriaTenisRoxo from '@/assets/images/galeria-tenis-roxo.jpg'
import { Button } from '../Button'
import { OverLay } from '../OverLay'
import { useRouter } from '@tanstack/react-router'

export const Gallery = () => {

    const router = useRouter();

    return (
        <section className='container mb-10'>
            <div className="grid gap-[10px] [grid-template-columns:1fr_1fr] [grid-template-rows:repeat(5,auto)] [grid-template-areas:'highlight_highlight''sneaker-white_sneaker-white''model_sneaker-color''model_sneaker-silver''sneaker-purple_sneaker-purple'] lg:gap-[30px] lg:[grid-template-columns:repeat(4,1fr)] lg:[grid-template-rows:repeat(3,300px)] lg:[grid-template-areas:'highlight_highlight_sneaker-purple_sneaker-purple''highlight_highlight_model_sneaker-color''sneaker-white_sneaker-white_model_sneaker-silver']">
                <div className="relative overflow-hidden rounded-[20px] [grid-area:highlight]">
                    <img className='h-full w-full object-cover' src={galeriaHomem} alt='Modelo masculino usando tênis' />

                    <div className='absolute inset-0 flex flex-col items-center justify-center gap-5 bg-black/10 px-4 text-center text-white'>
                        <OverLay title='Kripton One' subtitle='Estilo urbano com atitude' className='index-0 justify-center'>
                            <Button variant='secondary' onClick={() => router.navigate({ to: '/products/category/$category', params: { category: "feminino" } })}>Feminino</Button>

                            <Button variant='secondary' onClick={() => router.navigate({ to: '/products/category/$category', params: { category: "masculino" } })}>Msculino</Button>
                        </OverLay>
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