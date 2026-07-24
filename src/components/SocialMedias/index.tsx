import iconInstagram from '@/assets/images/icon-instagram.png'
import iconFacebook from '@/assets/images/icon-facebook.png'
import iconTiktok from '@/assets/images/icon-tiktok.png'
import iconWhatsap from '@/assets/images/icon-whatsapp.png'

const socialMedia = [
    { href: '#', icon: iconInstagram, name: 'Instagram' },
    { href: '#', icon: iconFacebook, name: 'Facebook' },
    { href: '#', icon: iconTiktok, name: 'Tiktok' },
    { href: '#', icon: iconWhatsap, name: 'Whatsap' }
]

export const SocialMedias = () => {
    return (
        <div>
            <p className='mb-4 text-xl font-medium text-surface-alt'>Redes Sociais</p>
            <ul className='flex gap-5'>
                {socialMedia.map(({ href, icon, name }) => (
                    <li key={name}>
                        <a href={href} aria-label='name'>
                            <img src={icon} alt={name} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}