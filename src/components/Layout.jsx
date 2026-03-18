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
                Pronto para parar de perder recompras?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Comece agora com 3 dias grátis. Sem cartão de crédito. Cancele quando quiser.
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

function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://wa.me/5524981375213?text=Olá! Vim pelo site do EssencialPet e quero saber mais"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
          aria-label="Falar no WhatsApp"
        >
          {/* Tooltip */}
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="hidden sm:block bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-full shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
          >
            Falar no WhatsApp
          </motion.span>

          {/* Botão */}
          <div className="relative w-14 h-14 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-200">
            {/* Pulso */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
            {/* Ícone WhatsApp */}
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
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
      <WhatsAppButton />
    </div>
  )
}
