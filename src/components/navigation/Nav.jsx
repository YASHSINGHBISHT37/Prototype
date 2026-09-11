import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";

const navItems = [
    // { name: "Home", href: "/" },
    { name: "IPU Result", href: "/ipu-result" },
    { name: "Result", href: "/result" },
    { name: "Study Resource", href: "/study-resources" },
    { name: "Leaderboard", href: "/leaderboard" },
    { name: "About Us", href: "/about" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Use", href: "/terms-of-use" },
]


export default function Nav() {
    const location = useLocation();
    const pathname = location.pathname;
    const [isOpen, setIsOpen] = useState(false)
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleMenu = () => {
        setIsOpen((prev) => !prev)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <nav className="w-full fixed left-0 top-0 flex items-center justify-between p-4 md:p-2 md:px-7 z-9999999999 text-text">
            <img src="/favicon/favicon.ico" className="w-[5vh] aspect-square" />

            <div className="hidden md:flex items-center justify-center gap-4">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        to={item.href}
                        className={`transition-all relative duration-300 ease-in-out ${pathname === item.href ? "font-dot font-bold tracking-wide text-accent" : ""}`}>
                        <button type='button' className='transition-all duration-300 cursor-pointer relative z-99 flex items-center gap-3 text-sm '>
                            {item.name}
                        </button>
                    </Link>
                ))}

                <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="aspect-square flex items-center justify-center cursor-pointer text-lg">
                    <i className={`ph ${theme === 'light' ? 'ph-sun' : 'ph-moon'} transition-transform duration-200 ease-in-out`} style={{ transform: theme === 'light' ? 'rotate(90deg)' : 'rotate(0deg)' }}></i>
                </div>
            </div>


        </nav>
    )
}