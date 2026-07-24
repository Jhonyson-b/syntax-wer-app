
import { Copyright } from '../Copyright'
import { MenuItems } from '../MenuItems'
import { SocialMedias } from '../SocialMedias'
import { SubscriptionForm } from '../subscriptionForm'



export const Footer = () => {
    return (
        <footer className='bg-footer-bg'>
            <div className='container'>
                <div className='flex flex-col justify-between py-10 px-2 gap-20 lg:flex-row '>
                    <div className='flex flex-col gap-8'>
                        <SubscriptionForm />
                        <SocialMedias />
                    </div>



                    <MenuItems />
                </div>

                <Copyright />
            </div>
        </footer>
    )

}