import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle2,
  Send,
  Calendar,
  Zap,
  Users
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

// Hero Section
function HeroSection() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-100 rounded-full text-green-600 text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            <span>Demo gratuita em 15 minutos</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-dark-900 mb-6">
            Agende sua{' '}
            <span className="text-gradient">demonstração</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja na prática como o EssencialPet pode aumentar suas vendas e fidelizar clientes.
            Sem compromisso. Sem cartão de crédito.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

// Benefits Bar
function BenefitsBar() {
  const benefits = [
    { icon: Clock, text: 'Demo de 15 minutos' },
    { icon: Zap, text: 'Início imediato' },
    { icon: Users, text: 'Suporte dedicado' },
  ]

  return (
    <div className="bg-dark-900 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.text} className="flex items-center gap-2 text-white">
              <benefit.icon className="w-5 h-5 text-primary-400" />
              <span className="text-sm">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Contact Form Section
function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    segment: 'pet-shop',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would send to a backend/CRM
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-dark-900 mb-4">
              Solicitação enviada!
            </h2>
            <p className="text-gray-600 mb-6">
              Recebemos sua solicitação de demonstração. Nosso time entrará em contato em até 24 horas via WhatsApp.
            </p>
            <a
              href="https://wa.me/5511999999999?text=Olá! Acabei de solicitar uma demo do EssencialPet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Falar agora no WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-dark-900 mb-2">
                Solicitar demonstração
              </h2>
              <p className="text-gray-600 mb-6">
                Preencha o formulário e entraremos em contato em até 24h
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Seu nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    placeholder="João Silva"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                      placeholder="joao@petshop.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome do seu negócio
                  </label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    placeholder="Pet Shop Amigo Fiel"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Segmento
                  </label>
                  <select
                    name="segment"
                    value={formData.segment}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white"
                  >
                    <option value="pet-shop">Pet Shop</option>
                    <option value="clinica">Clínica Veterinária</option>
                    <option value="banho-tosa">Banho & Tosa</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
                    placeholder="Conte um pouco sobre seu negócio..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all"
                >
                  <Send className="w-5 h-5" />
                  Solicitar Demo Grátis
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                Ao enviar, você concorda com nossa{' '}
                <a href="/privacidade" className="text-primary-600 hover:underline">
                  Política de Privacidade
                </a>
              </p>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:pl-8"
          >
            <h3 className="text-xl font-bold text-dark-900 mb-6">
              O que você vai ver na demo:
            </h3>
            
            <ul className="space-y-4 mb-8">
              {[
                'Como cadastrar clientes e pets',
                'Configuração de lembretes automáticos',
                'Integração com WhatsApp',
                'Dashboard de métricas',
                'Cálculo de recompra automático',
                'Tire todas as suas dúvidas'
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
              <h4 className="font-bold text-dark-900">Outras formas de contato:</h4>
              
              <a 
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-sm text-gray-500">(11) 99999-9999</div>
                </div>
              </a>

              <a 
                href="mailto:contato@EssencialPet.com.br"
                className="flex items-center gap-3 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-gray-500">contato@EssencialPet.com.br</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <div className="font-medium">Horário de atendimento</div>
                  <div className="text-sm text-gray-500">Seg-Sex, 9h às 18h</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <div className="font-medium">Atendemos</div>
                  <div className="text-sm text-gray-500">Todo o Brasil 🇧🇷</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// FAQ Mini Section
function FAQSection() {
  const faqs = [
    {
      q: 'A demo é realmente gratuita?',
      a: 'Sim! A demonstração é 100% gratuita e sem compromisso. Você só paga se decidir contratar.'
    },
    {
      q: 'Quanto tempo dura a demo?',
      a: 'Cerca de 15-20 minutos. Mostramos as principais funcionalidades e respondemos suas dúvidas.'
    },
    {
      q: 'Preciso instalar algo?',
      a: 'Não! O EssencialPet funciona 100% online. Basta ter um navegador e internet.'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-bold text-dark-900 mb-6 text-center">
          Perguntas frequentes
        </h3>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white rounded-xl p-5">
              <h4 className="font-semibold text-dark-900 mb-2">{faq.q}</h4>
              <p className="text-gray-600 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Contato() {
  return (
    <>
      <HeroSection />
      <BenefitsBar />
      <ContactFormSection />
      <FAQSection />
    </>
  )
}

