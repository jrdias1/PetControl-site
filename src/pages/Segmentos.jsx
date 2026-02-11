import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { 
  Store, 
  Stethoscope, 
  Scissors, 
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Users,
  Bell,
  Heart
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
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full text-primary-600 text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>Atendemos todo o Brasil</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-dark-900 mb-6">
            Feito para quem{' '}
            <span className="text-gradient">ama pets</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
            O EssencialPet foi criado especificamente para negócios pet. 
            Entendemos as necessidades únicas de cada segmento.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

// Segments Grid
function SegmentsSection() {
  const segments = [
    {
      icon: Store,
      title: 'Pet Shop',
      subtitle: 'Lojas de produtos para pets',
      description: 'Ideal para pet shops que vendem antipulgas, rações e produtos com eficácia definida. Avise o cliente antes de acabar!',
      benefits: [
        'Lembrete automático de antipulga e vermífugo',
        'Controle de recompra de ração',
        'Histórico de compras por pet',
        'Identificação de clientes inativos',
        'Aumento médio de 35% em recorrência'
      ],
      stats: { value: '+35%', label: 'em vendas recorrentes' },
      color: 'primary',
      image: null
    },
    {
      icon: Stethoscope,
      title: 'Clínica Veterinária',
      subtitle: 'Veterinários e clínicas especializadas',
      description: 'Perfeito para clínicas que precisam lembrar tutores sobre vacinas, consultas de retorno e medicamentos contínuos.',
      benefits: [
        'Lembrete de vacinação anual',
        'Aviso de consultas de retorno',
        'Controle de medicamentos recorrentes',
        'Ficha completa do paciente',
        'Redução de faltas em 40%'
      ],
      stats: { value: '-40%', label: 'em faltas de consulta' },
      color: 'secondary',
      image: null
    },
    {
      icon: Scissors,
      title: 'Banho & Tosa',
      subtitle: 'Groomers e estéticas pet',
      description: 'Desenvolvido para petshops e salões de tosa que trabalham com agendamento recorrente e serviços de higiene.',
      benefits: [
        'Lembrete de banho semanal/quinzenal',
        'Agendamento de tosa mensal',
        'Upsell de produtos durante atendimento',
        'Ficha do pet com preferências',
        'Aumento de 50% em agendamentos'
      ],
      stats: { value: '+50%', label: 'em agendamentos' },
      color: 'accent',
      image: null
    }
  ]

  const colorClasses = {
    primary: {
      bg: 'bg-primary-50',
      border: 'border-primary-200',
      icon: 'bg-primary-100 text-primary-600',
      stat: 'text-primary-600'
    },
    secondary: {
      bg: 'bg-secondary-50',
      border: 'border-secondary-200',
      icon: 'bg-secondary-100 text-secondary-600',
      stat: 'text-secondary-600'
    },
    accent: {
      bg: 'bg-accent-50',
      border: 'border-accent-200',
      icon: 'bg-accent-100 text-accent-600',
      stat: 'text-accent-600'
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colorClasses[segment.color].icon} mb-6`}>
                  <segment.icon className="w-8 h-8" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-2">
                  {segment.title}
                </h2>
                <p className="text-lg text-gray-500 mb-4">{segment.subtitle}</p>
                <p className="text-gray-600 mb-6">{segment.description}</p>

                <ul className="space-y-3 mb-8">
                  {segment.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-6">
                  <Link
                    to="/demo"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full hover:shadow-lg transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Agendar Demo
                  </Link>
                  <div>
                    <div className={`text-3xl font-bold ${colorClasses[segment.color].stat}`}>
                      {segment.stats.value}
                    </div>
                    <div className="text-sm text-gray-500">{segment.stats.label}</div>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className={`${colorClasses[segment.color].bg} rounded-3xl p-8 border ${colorClasses[segment.color].border}`}>
                  {/* Mockup/Illustration */}
                  <div className="aspect-[4/3] bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="h-full flex flex-col">
                      {/* Header */}
                      <div className="bg-dark-900 p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500" />
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="ml-4 text-white/60 text-sm">{segment.title}</span>
                        </div>
                      </div>
                      {/* Content area */}
                      <div className="flex-1 p-6 flex items-center justify-center bg-gray-50">
                        <div className="text-center">
                          <segment.icon className={`w-16 h-16 mx-auto mb-4 ${colorClasses[segment.color].stat}`} />
                          <p className="text-gray-500">Dashboard para {segment.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Use Cases Section
function UseCasesSection() {
  const useCases = [
    {
      title: 'Antipulga e Carrapaticida',
      description: 'Ex: Bravecto dura 3 meses. O cliente recebe mensagem no dia 70 avisando que a eficácia está acabando.',
      icon: Bell
    },
    {
      title: 'Vacinas Anuais',
      description: 'V8, V10, antirrábica. Lembre os tutores 1 semana antes do vencimento.',
      icon: Stethoscope
    },
    {
      title: 'Ração e Suplementos',
      description: 'Calcule o consumo médio e avise quando está na hora de comprar mais.',
      icon: Store
    },
    {
      title: 'Banho Agendado',
      description: 'Frequência semanal ou quinzenal. Mantenha a agenda sempre cheia.',
      icon: Scissors
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
            Casos de uso comuns
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja como o EssencialPet se adapta às suas necessidades
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <useCase.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-dark-900 mb-2">{useCase.title}</h3>
              <p className="text-sm text-gray-600">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials by Segment
function TestimonialsSection() {
  const testimonials = [
    {
      segment: 'Pet Shop',
      name: 'Rodrigo Almeida',
      business: 'Pet Center São Paulo',
      quote: 'Em 3 meses, recuperamos 47 clientes inativos. O ROI foi absurdo.',
      metric: '+R$ 8.500/mês'
    },
    {
      segment: 'Clínica Veterinária',
      name: 'Dra. Paula Santos',
      business: 'Clínica VetLife',
      quote: 'Reduzi as faltas de consulta em 40%. Os tutores adoram o lembrete.',
      metric: '-40% faltas'
    },
    {
      segment: 'Banho & Tosa',
      name: 'Amanda Costa',
      business: 'Estética Pet Premium',
      quote: 'Minha agenda está sempre cheia. O sistema lembra todos os clientes.',
      metric: '+50% agendamentos'
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
            Resultados reais
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            O que nossos clientes de cada segmento estão alcançando
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
                {testimonial.segment}
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <div className="font-semibold text-dark-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.business}</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-green-600">{testimonial.metric}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Qual é o seu segmento?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            Agende uma demo personalizada para o seu tipo de negócio
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Ver Preços
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Segmentos() {
  return (
    <>
      <SEO 
        title="Segmentos Atendidos"
        description="EssencialPet atende pet shops, clínicas veterinárias e banho e tosa. Soluções personalizadas para cada segmento do mercado pet."
        canonical="/segmentos"
        keywords="sistema pet shop, software clínica veterinária, sistema banho e tosa, automação mercado pet"
      />
      <HeroSection />
      <SegmentsSection />
      <UseCasesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

