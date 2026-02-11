import React, { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Sparkles, MessageCircle } from 'lucide-react'

const navigation = [
  { name: 'Funcionalidades', href: '/funcionalidades' },
  { name: 'Preços', href: '/preco' },
  { name: 'Segmentos', href: '/segmentos' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Blog', href: '/blog' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/favicon.svg" alt="EssencialPet" className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-dark-900">
                Essencial<span className="text-primary-500">Pet</span>
              </span>
              <span className="text-xs text-primary-500 font-medium uppercase tracking-wider -mt-1">
                Pós-Venda Inteligente
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                  location.pathname === item.href
                    ? 'text-primary-500'
                    : scrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://pet-control-v2.vercel.app/login"
              className="text-sm font-medium text-gray-700 hover:text-primary-500 transition-colors"
            >
              Entrar
            </a>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Agendar Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <a 
                  href="https://pet-control-v2.vercel.app/login"
                  className="block w-full px-4 py-3 text-center text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  Entrar
                </a>
                <Link
                  to="/demo"
                  className="block w-full px-4 py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg"
                >
                  Agendar Demo Grátis
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    produto: [
      { name: 'Funcionalidades', href: '/funcionalidades' },
      { name: 'Preços', href: '/preco' },
      { name: 'Segmentos', href: '/segmentos' },
      { name: 'Blog', href: '/blog' },
    ],
    empresa: [
      { name: 'Sobre Nós', href: '/sobre' },
      { name: 'Contato', href: '/contato' },
      { name: 'Suporte', href: '/suporte' },
    ],
    legal: [
      { name: 'Termos de Uso', href: '/termos' },
      { name: 'Privacidade', href: '/privacidade' },
    ],
  }

  return (
    <footer className="bg-dark-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Pronto para aumentar suas vendas?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Junte-se a mais de 500 pet shops que já automatizaram seu pós-venda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Demo Grátis
              </Link>
              <Link
                to="/preco"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Ver Preços
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="/favicon.svg" alt="EssencialPet" className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl">
                  Essencial<span className="text-primary-400">Pet</span>
                </span>
                <span className="text-xs text-primary-400 font-medium uppercase tracking-wider -mt-1">
                  Pós-Venda Inteligente
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              Sistema de pós-venda inteligente que automatiza lembretes e aumenta sua recorrência.
            </p>
          </div>

          {/* Produto */}
          <div>
            <h3 className="font-semibold text-white mb-4">Produto</h3>
            <ul className="space-y-3">
              {footerLinks.produto.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company Info */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-3">Essencial Comunicação</h4>
              <p className="text-gray-400 text-sm">CNPJ: 22.185.544/0001-08</p>
              <p className="text-gray-400 text-sm">Representante: Aldair Antonio Dias Jr</p>
              <p className="text-gray-400 text-sm">Petrópolis – RJ</p>
            </div>
            <div className="md:text-right">
              <h4 className="font-semibold text-white mb-3">Contato</h4>
              <a href="https://wa.me/5524981375213" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-white transition-colors block">
                WhatsApp: (24) 98137-5213
              </a>
              <a href="mailto:essencialcomunicacaoeinfo@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors block">
                essencialcomunicacaoeinfo@gmail.com
              </a>
              <a href="https://www.instagram.com/essencial_comunicacao/" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-white transition-colors block">
                @essencial_comunicacao
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} EssencialPet. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Feito com 💛 para pet shops do Brasil
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
