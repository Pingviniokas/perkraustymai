// src/components/Navbar.tsx
'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

const menuItems = [
  {
    title: "Perkraustymo Paslaugos",
    href: "/perkraustymo-paslaugos",
    subItems: [
      { title: "Vietiniai perkraustymai", href: "/vietiniai-perkraustymai" },
      { title: "Tarpmiestinis perkraustymas", href: "/tarpmiestinis-perkraustymas" },
      { title: "Tarptautiniai perkraustymai", href: "/tarptautiniai-perkraustymai" },
      { title: "Įmonių perkraustymas", href: "/imoniu-perkraustymas" }
    ]
  },
  {
    title: "Fiskaro paslaugos",
    href: "/fiskaro-paslaugos",
    subItems: [
      { title: "Fiskaro nuoma", href: "/fiskaro-nuoma" },
      { title: "Garažų pervežimas", href: "/garazu-pervezimas" },
      { title: "Negabaritinių krovinių pervežimas", href: "/negabaritiniu-kroviniu-pervezimas" }
    ]
  },
  {
    title: "Kitos paslaugos",
    href: "/kitos-paslaugos",
    subItems: [
      { title: "Baldų pervežimas", href: "/baldu-pervezimas" },
      { title: "Daiktų pervežimas", href: "/daiktu-pervezimas" },
      { title: "Pianinų pervežimas", href: "/pianinu-pervezimas" },
      { title: "Express pervežimas", href: "/express-pervezimas" },
      { title: "Buitinės technikos išvežimas", href: "/buitines-technikos-isvezimas" },
      { title: "Senų baldų išvežimas", href: "/senu-baldu-isvezimas" },
      { title: "Stambiagabaričių šiukšlių išvežimas", href: "/stambiagabariciu-siuksliu-isvezimas" },
      { title: "Statybinių atliekų išvezimas", href: "/statybiniu-atlieku-isvezimas" }
    ]
  },
  {
    title: "Apie Mus",
    href: "/apie-mus"
  },
  {
    title: "Kontaktai",
    href: "/kontaktai"
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed w-full z-50"
    >
      {/* Top Header */}
      <div className="bg-gray-50">
        <div className="bm-grid">
          <div className="bm-grid-row">
            <div className="relative w-full px-[var(--bm-grid-margin)]">
              {/* Mobile Header */}
              <div className="lg:hidden h-20 flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/images/logoMJC.webp"
                    alt="MJC Moving"
                    width={200}
                    height={80}
                    className="object-contain"
                    priority
                  />
                </div>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-gray-600 hover:text-gray-900"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isOpen ? (
                      <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>

              {/* Desktop Header */}
              <div className="hidden lg:block">
                <div className="h-24 relative">
                  <div className="absolute inset-0 flex items-center justify-between">
                    <motion.a 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      href="mailto:info@mjc.lt" 
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors ml-[20%]"
                    >
                      <EnvelopeIcon className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">info@mjc.lt</span>
                    </motion.a>

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-[280px] h-[100px] flex items-center justify-center"
                      >
                        <Image
                          src="/images/logoMJC.webp"
                          alt="MJC Moving"
                          width={280}
                          height={100}
                          className="object-contain"
                          priority
                        />
                      </motion.div>
                    </div>

                    <motion.a 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      href="tel:+37060000000" 
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mr-[20%]"
                    >
                      <PhoneIcon className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">+370 600 00000</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-50"
          >
            <div className="py-2 space-y-1">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                    className="w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900"
                  >
                    {item.title}
                  </button>
                  {item.subItems && activeDropdown === index && (
                    <div className="bg-gray-100">
                      {item.subItems.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-8 py-2 text-sm text-gray-600 hover:text-gray-900"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 px-4">
                <button
                  className="w-full bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium
                    hover:bg-red-700 transition-colors"
                >
                  Kainininkas
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Separator - Only visible on desktop */}
      <div className="h-px bg-gray-200 hidden lg:block" />

      {/* Main Navigation - Only visible on desktop */}
      <nav className={`bg-gray-50 transition-all duration-300 hidden lg:block ${
        scrolled ? 'shadow-lg py-2' : 'py-4'
      }`}>
        <div className="bm-grid">
          <div className="bm-grid-row">
            <div className="relative w-full px-[var(--bm-grid-margin)]">
              <div className="flex justify-center items-center">
                <div className="flex items-center gap-8">
                  {menuItems.map((item, index) => (
                    <div
                      key={index}
                      className="relative group"
                      onMouseEnter={() => {
                        if (timeoutRef.current) clearTimeout(timeoutRef.current)
                        setActiveDropdown(index)
                      }}
                      onMouseLeave={() => {
                        timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
                      }}
                    >
                      <motion.a
                        href={item.href}
                        className="text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors py-2"
                        whileHover={{ y: -1 }}
                        transition={{ type: "tween" }}
                      >
                        {item.title}
                      </motion.a>
                      
                      {item.subItems && activeDropdown === index && (
                        <div
                          className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg"
                          onMouseEnter={() => {
                            if (timeoutRef.current) clearTimeout(timeoutRef.current)
                          }}
                          onMouseLeave={() => {
                            timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
                          }}
                        >
                          <div className="py-2">
                            {item.subItems.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                              >
                                {subItem.title}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-red-600 text-white px-6 py-2.5 rounded-md text-sm font-medium
                    hover:bg-red-700 transition-colors ml-8"
                >
                  Kainininkas
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}