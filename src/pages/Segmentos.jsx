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
            Feito para quem vive o mundo pet
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
            O EssencialPet foi desenvolvido especificamente para negócios pet. Cada segmento tem suas próprias necessidades — e a gente entende isso.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

const WA_LINK = 'https://wa.me/5524981375213?text=Olá! Vi o site do EssencialPet e quero saber mais para começar'

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
      image: '/criativos/Recupere_suas_vendas_agora_version_1.png',
      imageAlt: 'Recupere suas vendas agora — Pet Shop'
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
      image: '/criativos/Pós-venda_que_gera_autoridade_version_2.png',
      imageAlt: 'Pós-venda que gera autoridade — Clínica Veterinária'
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
      image: null,
      imageAlt: ''
    },
    {
      icon: Heart,
      title: 'Nutrição Natural & Petiscos',
      subtitle: 'Produtores e revendedores de alimentação natural',
      description: 'Quem compra comida natural, freeze-dried ou petiscos artesanais volta toda semana — mas só se lembrar de você. O EssencialPet automatiza o contato no momento certo e transforma compradores ocasionais em clientes fixos.',
      benefits: [
        'Lembrete de reposição semanal ou quinzenal',
        'Controle de ciclo de compra por tipo de dieta',
        'Histórico de pedidos por pet e por tutor',
        'Identificação de clientes que pararam de comprar',
        'Aumento médio de 40% em pedidos recorrentes'
      ],
      stats: { value: '+40%', label: 'em pedidos recorrentes' },
      color: 'primary',
      image: '/criativos/9iEBHQdZFni6-PLq4pGkmc.png',
      imageAlt: 'Recorrência de ração automática'
    },
    {
      icon: Bell,
      title: 'Farmácia Veterinária',
      subtitle: 'Farmácias e distribuidoras de medicamentos pet',
      description: 'Medicamento de uso contínuo não pode atrasar — o EssencialPet avisa antes do estoque acabar e garante que a reposição aconteça com você.',
      benefits: [
        'Controle de medicamentos de uso contínuo',
        'Lembrete automático de reposição mensal',
        'Alerta de clientes com compra atrasada',
        'Ficha completa do pet com histórico de medicamentos',
        'Redução de até 35% na perda de clientes recorrentes'
      ],
      stats: { value: '-35%', label: 'em perda de clientes' },
      color: 'secondary',
      image: null,
      imageAlt: ''
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
                {segment.image ? (
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img src={segment.image} alt={segment.imageAlt} className="w-full h-auto" />
                  </div>
                ) : (
                  <div className={`${colorClasses[segment.color].bg} rounded-3xl p-8 border ${colorClasses[segment.color].border}`}>
                    <div className="aspect-[4/3] bg-white rounded-2xl shadow-lg overflow-hidden">
                      <div className="h-full flex flex-col">
                        <div className="bg-dark-900 p-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="ml-4 text-white/60 text-sm">{segment.title}</span>
                          </div>
                        </div>
                        <div className="flex-1 p-6 flex items-center justify-center bg-gray-50">
                          <div className="text-center">
                            <segment.icon className={`w-16 h-16 mx-auto mb-4 ${colorClasses[segment.color].stat}`} />
                            <p className="text-gray-500">Dashboard para {segment.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
      description: 'O Bravecto dura 3 meses. No dia 70, o cliente recebe uma mensagem avisando que a proteção está quase acabando — e volta comprar com você, não com o concorrente.',
      icon: Bell
    },
    {
      title: 'Vacinas Anuais',
      description: 'V8, V10, antirrábica. O sistema avisa o tutor com até 1 semana de antecedência. Menos esquecimento, mais fidelização.',
      icon: Stethoscope
    },
    {
      title: 'Ração e Suplementos',
      description: 'Com base no peso do pet e na frequência de compra, o sistema calcula quando o estoque do cliente está acabando e envia o aviso na hora certa.',
      icon: Store
    },
    {
      title: 'Banho e Tosa Recorrente',
      description: 'Frequência semanal ou quinzenal. O cliente recebe o lembrete automático e você mantém a agenda sempre cheia sem precisar ligar para ninguém.',
      icon: Scissors
    },
    {
      title: 'Medicamento Contínuo',
      description: 'O tutor usa todo mês mas esquece de repor. O sistema avisa 5 dias antes de acabar — a compra acontece antes do tratamento ser interrompido.',
      icon: Bell
    },
    {
      title: 'Nutrição Natural e Petiscos',
      description: 'Dieta natural tem ciclo curto e previsível. Com base no peso do pet e na frequência de compra, o EssencialPet calcula quando o cliente vai precisar de mais e envia o aviso na hora certa.',
      icon: Heart
    },
    {
      title: 'Loja Online / E-commerce',
      description: 'Sem balcão, o WhatsApp é o principal canal de relacionamento. O cliente compra, o sistema registra, e o lembrete de recompra chega direto no celular dele.',
      icon: MessageCircle
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
      quote: 'Em 3 meses, recuperamos 47 clientes que tinham sumido. O retorno foi muito além do que esperávamos.',
      metric: '+R$ 8.500/mês em vendas recuperadas'
    },
    {
      segment: 'Clínica Veterinária',
      name: 'Dra. Paula Santos',
      business: 'Clínica VetLife',
      quote: 'As faltas caíram 40% no primeiro mês. Os tutores adoram receber o lembrete — e a gente não precisa mais ligar um por um.',
      metric: '-40% em faltas de consulta'
    },
    {
      segment: 'Banho & Tosa',
      name: 'Amanda Costa',
      business: 'Estética Pet Premium',
      quote: 'Minha agenda tá sempre cheia agora. O sistema lembra os clientes e eu só cuido dos pets.',
      metric: '+50% em agendamentos recorrentes'
    },
    {
      segment: 'Farmácia Veterinária',
      name: 'Carlos Mendonça',
      business: 'FarmaVet Rio',
      quote: 'Nossos clientes de medicamento contínuo paravam de comprar sem avisar. Agora a gente entra em contato antes — e a retenção melhorou muito.',
      metric: '-35% em cancelamentos silenciosos'
    },
    {
      segment: 'Nutrição Natural',
      name: 'Juliana Ferreira',
      business: 'Naturalpet BH',
      quote: 'Vendia muito na primeira compra mas perdia o cliente depois. Com os lembretes automáticos, a maioria voltou a comprar toda semana.',
      metric: '+40% em pedidos recorrentes'
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
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Histórias reais de pet shops que transformaram seu negócio
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

// Credibility / Banner Section
function CredibilitySection() {
  return (
    <section className="py-16 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-2">Um sistema, cinco segmentos, um objetivo</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Não importa se você tem uma loja física, uma clínica, um ateliê de tosa ou vende pelo Instagram. Se o seu negócio depende de recompra recorrente, o EssencialPet foi feito para você.</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-2xl">📊</div>
            <div className="font-bold text-dark-900 text-xl mt-2">+500</div>
            <div className="text-sm text-gray-600">negócios pet ativos</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-2xl">🐾</div>
            <div className="font-bold text-dark-900 text-xl mt-2">Presente em todo o Brasil</div>
            <div className="text-sm text-gray-600">Atendimento nacional</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-2xl">💬</div>
            <div className="font-bold text-dark-900 text-xl mt-2">50.000+</div>
            <div className="text-sm text-gray-600">lembretes enviados</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-2xl">⭐</div>
            <div className="font-bold text-dark-900 text-xl mt-2">4.9</div>
            <div className="text-sm text-gray-600">de satisfação média</div>
          </div>
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
            Agende uma demonstração personalizada para o seu tipo de negócio. Em 20 minutos você vê o sistema funcionando com exemplos do seu dia a dia.
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
      <CredibilitySection />
      <CTASection />
    </>
  )
}

