import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { 
  MessageCircle, 
  Mail, 
  Clock,
  HelpCircle,
  Book,
  Video,
  FileText,
  CheckCircle2,
  ArrowRight,
  Headphones
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
            <Headphones className="w-4 h-4" />
            <span>Suporte humanizado</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-dark-900 mb-6">
            Como podemos{' '}
            <span className="text-gradient">te ajudar?</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Nosso time está pronto para ajudar você a aproveitar ao máximo o EssencialPet.
            Escolha o canal de sua preferência.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5524981375213?text=Olá! Preciso de suporte com o EssencialPet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 hover:shadow-lg transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <a
              href="mailto:essencialcomunicacaoeinfo@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-200 text-dark-900 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Enviar Email
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Contact Cards Section
function ContactCardsSection() {
  const contacts = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Resposta rápida em horário comercial',
      value: '(24) 98137-5213',
      href: 'https://wa.me/5524981375213?text=Olá! Preciso de suporte com o EssencialPet',
      color: 'green',
      cta: 'Iniciar conversa'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Para dúvidas detalhadas ou documentação',
      value: 'essencialcomunicacaoeinfo@gmail.com',
      href: 'mailto:essencialcomunicacaoeinfo@gmail.com',
      color: 'primary',
      cta: 'Enviar email'
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-${contact.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <contact.icon className={`w-7 h-7 text-${contact.color}-600`} />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-1">{contact.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{contact.description}</p>
              <p className="font-medium text-dark-900 mb-4">{contact.value}</p>
              <div className={`inline-flex items-center gap-2 text-${contact.color}-600 font-medium`}>
                {contact.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

// Working Hours Section
function WorkingHoursSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Clock className="w-8 h-8 text-primary-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-dark-900 mb-2">Horário de Atendimento</h3>
            <p className="text-gray-600">
              <strong>Segunda a Sexta:</strong> 9h às 18h<br />
              <span className="text-sm text-gray-500">
                Mensagens fora do horário serão respondidas no próximo dia útil.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Resources Section
function ResourcesSection() {
  const resources = [
    {
      icon: Book,
      title: 'Central de Ajuda',
      description: 'Tutoriais e artigos para usar o sistema',
      href: '/contato',
      soon: true
    },
    {
      icon: Video,
      title: 'Vídeos Tutoriais',
      description: 'Aprenda em vídeo passo a passo',
      href: '/contato',
      soon: true
    },
    {
      icon: FileText,
      title: 'Documentação',
      description: 'Guias completos de configuração',
      href: '/contato',
      soon: true
    },
    {
      icon: HelpCircle,
      title: 'FAQ',
      description: 'Perguntas frequentes',
      href: '/preco#faq',
      soon: false
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-dark-900 text-center mb-8">
          Recursos de Autoatendimento
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((resource) => (
            <Link
              key={resource.title}
              to={resource.href}
              className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 relative"
            >
              {resource.soon && (
                <span className="absolute top-3 right-3 text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                  Em breve
                </span>
              )}
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary-100 transition-colors">
                <resource.icon className="w-5 h-5 text-gray-600 group-hover:text-primary-600 transition-colors" />
              </div>
              <h3 className="font-semibold text-dark-900 mb-1">{resource.title}</h3>
              <p className="text-sm text-gray-500">{resource.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// Commitment Section
function CommitmentSection() {
  const commitments = [
    'Resposta em até 24 horas úteis',
    'Suporte humanizado, sem robôs',
    'Ajudamos até você resolver',
    'Acompanhamento personalizado',
  ]

  return (
    <section className="py-16 bg-dark-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">
            Nosso compromisso com você
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {commitments.map((commitment) => (
              <div key={commitment} className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{commitment}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-900 mb-4">
            Ainda não é cliente?
          </h2>
          <p className="text-gray-600 mb-8">
            Conheça o EssencialPet e veja como podemos ajudar seu pet shop a vender mais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Demo Grátis
            </Link>
            <Link
              to="/preco"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-dark-900 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300"
            >
              Ver Preços
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Suporte() {
  return (
    <>
      <SEO 
        title="Suporte"
        description="Precisa de ajuda com o EssencialPet? Fale conosco via WhatsApp ou email. Suporte humanizado de segunda a sexta, das 9h às 18h."
        canonical="/suporte"
        keywords="suporte EssencialPet, ajuda sistema pet shop, contato suporte, atendimento"
      />
      <HeroSection />
      <ContactCardsSection />
      <WorkingHoursSection />
      <ResourcesSection />
      <CommitmentSection />
      <CTASection />
    </>
  )
}
