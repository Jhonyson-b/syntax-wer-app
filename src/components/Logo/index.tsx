import { Link } from "@tanstack/react-router"
import LogoImage from '@/assets/images/logo.png'

export const Logo = () => {
    return (
        <Link to="/" className="self-center">
            <img className="w-40" src={LogoImage} alt="Logo SyntaxWer" />
        </Link>
    )
}