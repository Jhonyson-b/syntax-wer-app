import IconMenu from '@/assets/images/icon.png';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import type { NavLink } from '../Header';
import { IoMdClose } from 'react-icons/io';

interface MenuMobileProps {
    navLinks: NavLink[];
}


export const MenuMobile = ({ navLinks }: MenuMobileProps) => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

    return (
        <>
            <button className="cursor-pointer" onClick={() => setMenuIsOpen(!menuIsOpen)}>
                <img src={IconMenu} alt="Ícone do menú" />

            </button>

            {/* Overlay */}
            <div className={`${menuIsOpen ? 'bg-black/70 visible' : 'bg-transparent invisible'} fixed top-0 bottom-0 left-0 right-0 z-30`} onClick={() => setMenuIsOpen(!menuIsOpen)}>

                {/* Drawer */}
                <div className={`${menuIsOpen ? 'translate-x-0' : '-translate-x-full'} absolute top-0 bottom-0 bg-white pt-6 transition-all duration-500 ease-in-out w-full`} onClick={(e) => e.stopPropagation()}>

                    <header className="bg-black text-white py-5 px-5">
                        <nav className="flex items-center justify-between">
                            <Link to="/sign-in" className="flex items-center gap-3">
                                <FaRegUserCircle className="h-6 w-6" />
                                <p>Olá! Faça o seu login</p>
                            </Link>

                            <IoMdClose className="cursor-pointer text-2xl" onClick={() => setMenuIsOpen(false)}/>
                        </nav>
                    </header>

                    <ul className="p-4 h-[calc(100%-140px)] overflow-y-auto scrollbar-hide flex flex-col gap-3" onClick={() => setMenuIsOpen(!menuIsOpen)}>
                        {navLinks.map((link) => (
                            <Link to={link.href} key={link.name}>
                                {link.name}
                            </Link>
                        ))}

                        <li>
                            <Link to='/our-stores'>Nossas lojas</Link>
                        </li>

                        <li>
                            <Link to='/about'>Sobre</Link>
                        </li>
                    </ul>
                </div>

            </div>

        </>
    )
}