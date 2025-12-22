'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// --- DATA ARRAYS ---
const NAV_LINKS = [
    { name: "Home", href: "/" },
    {
        name: "Company",
        isMega: true,
        columns: [
            {
                title: "Platform",
                links: [
                    { n: "Features", d: "Explore our core capabilities" },
                    { n: "Resources", d: "Documentation and guides" },
                    { n: "Pro Version", d: "Advanced tools for experts" }
                ]
            },
            {
                title: "Corporate",
                links: [
                    { n: "About Us", d: "Our mission and team" },
                    { n: "Careers", d: "Join our global remote team" },
                    { n: "Contact", d: "Get in touch with support" }
                ]
            },

        ]
    },
    {
        name: "What We Think",
        isMega: true,
        columns: [
            {
                title: "Platform",
                links: [
                    { n: "Features", d: "Explore our core capabilities" },
                    { n: "Resources", d: "Documentation and guides" },
                    { n: "Pro Version", d: "Advanced tools for experts" }
                ]
            },
            {
                title: "Corporate",
                links: [
                    { n: "About Us", d: "Our mission and team" },
                    { n: "Careers", d: "Join our global remote team" },
                    { n: "Contact", d: "Get in touch with support" }
                ]
            },

        ]
    },
    {
        name: "Careers",
        isMega: true,
        columns: [
            {
                title: "Platform",
                links: [
                    { n: "Features", d: "Explore our core capabilities" },
                    { n: "Resources", d: "Documentation and guides" },
                    { n: "Pro Version", d: "Advanced tools for experts" }
                ]
            },
            {
                title: "Corporate",
                links: [
                    { n: "About Us", d: "Our mission and team" },
                    { n: "Careers", d: "Join our global remote team" },
                    { n: "Contact", d: "Get in touch with support" }
                ]
            },

        ]
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/pricing" },
];

const LANGUAGES = [
    { code: "EN", name: "English" },
    { code: "ES", name: "Español" },
    { code: "FR", name: "Français" },
    { code: "DE", name: "Deutsch" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState("EN");

    // Handle the scroll effect for background transition
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out ${isScrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* 1. LEFT SIDE: LOGO */}
                <a href="/" className="flex items-center space-x-2 group shrink-0">
                    <div className=" p-2 rounded-2xl group-hover:rotate-12 transition-transform ">
                        {/* <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                         */}
                        <Image src={isScrolled ? "/Novigo.svg" : "/NovigoLight.svg"} alt="Novigo Logo"
                            width={120}
                            height={120} />
                    </div>
                    {/* <span className={`text-2xl font-black tracking-tighter transition-colors duration-500 ${isScrolled ? "text-zinc-900" : "text-white"}`}>
                        FLOWBITE
                    </span> */}
                </a>

                {/* 2. RIGHT SIDE: THE CIRCULAR FLOATING GLASS CONTAINER */}
                <div className={`
                    hidden md:flex items-center px-2 py-1.5 rounded-full transition-all duration-500 border
                    ${isScrolled
                        ? "bg-zinc-100/50 border-none shadow-none"
                        : "bg-white/10 backdrop-blur-xl border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"}
                `}>
                    <ul className="flex items-center space-x-1">
                        {NAV_LINKS.map((link) => (
                            <li key={link.name} className="group/menu relative">
                                {link.isMega ? (
                                    <>
                                        <button className={`flex items-center space-x-1 px-5 py-2.5 text-sm font-bold transition-colors ${isScrolled ? "text-zinc-600 hover:text-blue-600" : "text-zinc-200 hover:text-white"}`}>
                                            <span>{link.name}</span>
                                            <svg className="w-4 h-4 transition-transform group-hover/menu:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {/* MEGA MENU DROPDOWN (DESKTOP) */}
                                        <div className="absolute top-[140%] left-1/2 -translate-x-1/2 invisible opacity-0 group-hover/menu:visible group-hover/menu:opacity-100 group-hover/menu:translate-y-0 translate-y-6 transition-all duration-300">
                                            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-zinc-100 p-10 w-[600px] grid grid-cols-2 gap-10">
                                                {link.columns?.map(col => (
                                                    <div key={col.title}>
                                                        <h4 className="text-[11px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-6">{col.title}</h4>
                                                        <ul className="space-y-6">
                                                            {col.links.map(l => (
                                                                <li key={l.n}>
                                                                    <a href="#" className="group/item block">
                                                                        <div className="text-[15px] font-bold text-zinc-900 group-hover/item:text-blue-600 transition-colors">{l.n}</div>
                                                                        <div className="text-xs text-zinc-500 mt-1 leading-relaxed">{l.d}</div>
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <a href={link.href} className={`px-5 py-2.5 text-sm font-bold transition-colors ${isScrolled ? "text-zinc-600 hover:text-blue-600" : "text-zinc-200 hover:text-white"}`}>
                                        {link.name}
                                    </a>
                                )}
                            </li>
                        ))}

                        {/* LANGUAGE DROPDOWN */}
                        <li className="relative ml-2 pl-2 border-l border-white/10">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-[11px] font-black tracking-widest transition-all transform active:scale-95 ${isScrolled
                                        ? "bg-zinc-900 text-white"
                                        : "bg-white text-zinc-950 hover:bg-zinc-100"
                                    }`}
                            >
                                <span>{currentLang}</span>
                                <svg className={`w-3 h-3 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="m19 9-7 7-7-7" /></svg>
                            </button>

                            {isLangOpen && (
                                <div className="absolute right-0 mt-4 w-44 bg-white rounded-2xl shadow-2xl border border-zinc-100 py-2 overflow-hidden animate-in fade-in slide-in-from-top-2">
                                    {LANGUAGES.map(lang => (
                                        <button
                                            key={lang.code}
                                            onClick={() => { setCurrentLang(lang.code); setIsLangOpen(false); }}
                                            className="w-full text-left px-5 py-3 text-xs font-bold text-zinc-600 hover:bg-zinc-50 hover:text-blue-600 transition-colors flex justify-between items-center"
                                        >
                                            {lang.name}
                                            {currentLang === lang.code && <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </li>
                    </ul>
                </div>

                {/* MOBILE HAMBURGER */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`md:hidden p-3 rounded-2xl transition-colors ${isScrolled ? "text-zinc-900 hover:bg-zinc-100" : "text-white hover:bg-white/10"}`}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* MOBILE MENU PANEL */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white rounded-b-[2.5rem] shadow-2xl ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="p-8 space-y-6">
                    {NAV_LINKS.map(link => (
                        <div key={link.name} className="border-b border-zinc-50 pb-4 last:border-0">
                            {link.isMega ? (
                                <>
                                    <button
                                        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                                        className="w-full flex items-center justify-between text-xl font-black text-zinc-900"
                                    >
                                        <span>{link.name}</span>
                                        <svg className={`w-5 h-5 transition-transform ${isAccordionOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="m19 9-7 7-7-7" /></svg>
                                    </button>
                                    <div className={`grid transition-all duration-500 ease-in-out ${isAccordionOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"}`}>
                                        <div className="overflow-hidden">
                                            <div className="space-y-8">
                                                {link.columns?.map(col => (
                                                    <div key={col.title}>
                                                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4">{col.title}</p>
                                                        <div className="space-y-5">
                                                            {col.links.map(l => (
                                                                <a key={l.n} href="#" className="block group">
                                                                    <div className="text-[16px] font-bold text-zinc-800">{l.n}</div>
                                                                    <div className="text-xs text-zinc-500 mt-1">{l.d}</div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <a href={link.href} className="block text-xl font-black text-zinc-900">
                                    {link.name}
                                </a>
                            )}
                        </div>
                    ))}

                    {/* MOBILE LANGUAGE SELECTOR */}
                    <div className="pt-6 mt-6 border-t border-zinc-100">
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4 text-center">Language</p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {LANGUAGES.map(lang => (
                                <button
                                    key={lang.code}
                                    onClick={() => setCurrentLang(lang.code)}
                                    className={`px-5 py-2 text-xs font-bold rounded-full transition-all border ${currentLang === lang.code ? "bg-zinc-900 text-white border-zinc-900" : "bg-white text-zinc-500 border-zinc-200"}`}
                                >
                                    {lang.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};