import Banner from '@/assets/images/banner.jpg'
import { Button } from '../Button'
import { OverLay } from '../OverLay'
import { useRouter } from '@tanstack/react-router'


export const Hero = () => {

    const router = useRouter();

    return (

        <div className="container">
            <section className='h-125 rounded-[20px] mb-10 relative'>
                <img className='w-full h-full object-cover rounded-[20px]' src={Banner} alt='Homem sentado com o tênis da SintaxWer' />

                <OverLay title='Kripton Onde' subtitle='Transforme qualquer passo em presença' className='bottom-0 px-6 md:px-24 pb-24 justify-end  md:items-end'>
                    <Button variant='secondary' onClick={() => router.navigate({ to: '/products' })}>Ver modelos</Button>
                    
                    <Button variant='primary' size='sm'>Comprar</Button>
                </OverLay>
            </section>
        </div>
    )
}