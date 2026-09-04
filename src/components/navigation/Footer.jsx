import { div } from "motion/react-client"
import React from "react"
import { Link, useLocation } from "react-router-dom"

const footerLinks = [
    {
        header: "Navigation",
        links: [
            { name: "Home", href: "/" },
            { name: "IPU Result", href: "/ipu-result" },
            { name: "Leaderboard", href: "/leaderboard" },
            { name: "Study Resources", href: "/study-resources" },
        ],
    },
    {
        header: "Support",
        links: [
            { name: "Contact", href: "/Contact" },
            { name: "About Us", href: "/About" },
            { name: "Privacy Policy", href: "/Privacy" },
            { name: "Terms of Service", href: "/Terms" },
        ],
    },
    {
        header: "Connect",
        links: [
            { name: "Email", href: "mailto:yashbisht0007@gmail.com" },
            { name: "Github", href: "https://github.com/yourusername" },
            { name: "Linkedin", href: "https://linkedin.com/in/yourusername" },
            { name: "Instagram", href: "https://instagram.com/yourusername" },
        ],
    },
]

export default function Footer() {
    return (
        <div className="relative w-full h-screen flex flex-col justify-between pt-60 px-10 bg-bg">
            <div className='absolute -z-1 w-full h-full bg-white/100 top-0 left-0 backdrop-blur-3xl'></div>

            <div className="flex justify-end w-full gap-30 text-right">
                <div className="flex gap-20">
                    {footerLinks.map((item, i) => (
                        <div key={i} className="flex flex-col gap-3">
                            <h1 className="font-bold text-2xl tracking-tighter">{item.header}</h1>
                            <div className="flex flex-col text-xl">
                                {item.links.map((link, j) => (
                                    <Link key={j} to={link.href} className="cursor-pointer pointer-events-auto leading-6">{link.name}</Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Email Address */}
                <div className="w-xs md:w-md text-left">
                    <p className="md:leading-6 pb-14 text-2xl">Keep in the loop with the myResult® newsletter.</p>
                    <input type="text" placeholder="Email Address" className="outline-0 capitalize border-b border-text/50 font-dot text-accent/90 w-full md:pb-1 pointer-events-auto font-bold md:text-lg" />
                </div>

            </div>

            <div className="w-full flex items-end justify-between py-4">
                <div className="absolute -bottom-6 left-0 flex">
                    <h1 className="text-[40vh] font-dot tracking-tight leading-100 font-bold bg-linear-to-tr from-text via-accent to-text bg-clip-text text-transparent">myResult</h1>
                    <span className="text-8xl text-accent">®</span>
                </div>

                <div className="flex justify-end gap-8 leading-4.5 w-full">
                    <div>
                        <h1><b>Location:</b> Delhi, India</h1>
                        <h1>Developed by <b>Yash Singh Bisht</b></h1>
                    </div>
                    <div>
                        <h1>© 2026 myResult</h1>
                        <h1>All rights reserved.</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}