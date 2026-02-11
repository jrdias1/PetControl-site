import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { 
  MessageCircle, 
  Zap, 
  TrendingUp, 
  Clock, 
  Shield, 
  Star, 
  ArrowRight,
  CheckCircle2,
  Users,
  Bell,
  Repeat,
  Smartphone,
  BarChart3,
  Heart
} from 'lucide-react'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent-500/30 rounded-full blur-3xl animate-blob animation-delay-4000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full text-primary-600 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>+500 pet shops já usam EssencialPet</span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-900 leading-tight mb-6">
              Transforme clientes em{' '}
              <span className="text-gradient">vendas recorrentes</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Sistema de pós-venda inteligente que envia lembretes automáticos de recompra via WhatsApp. 
              Aumente seu faturamento em até <strong className="text-dark-900">40%</strong>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Demo Grátis
              </Link>
              <Link
                to="/funcionalidades"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-primary-500 hover:text-primary-600 transition-all duration-300"
              >
                Ver Funcionalidades
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>3 dias grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Suporte via WhatsApp</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image/Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Dashboard Mockup */}
            <div className="relative bg-dark-900 rounded-2xl shadow-2xl overflow-hidden border border-white/10">
              <div className="p-4 border-b border-white/10 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="p-6 space-y-4">
                {/* Stats cards mockup */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-white">127</div>
                    <div className="text-gray-400 text-sm">Clientes ativos</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-400">+40%</div>
                    <div className="text-gray-400 text-sm">Recompras</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary-400">23</div>
                    <div className="text-gray-400 text-sm">Lembretes hoje</div>
                  </div>
                </div>
                {/* Client list mockup */}
                <div className="bg-white/5 rounded-xl p-4 space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold">
                        {['M', 'R', 'C'][i-1]}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">{['Max', 'Rex', 'Cacau'][i-1]}</div>
                        <div className="text-gray-400 text-sm">Antipulga vence em {[3, 7, 2][i-1]} dias</div>
                      </div>
                      <button className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-lg">
                        WhatsApp
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -left-8 top-1/4 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-dark-900">WhatsApp enviado!</div>
                  <div className="text-sm text-gray-500">Lembrete para Max</div>
                </div>
              </div>
            </motion.div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="font-medium text-dark-900">+R$ 2.340</div>
                  <div className="text-sm text-gray-500">Este mês</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: Bell,
      title: 'Lembretes Automáticos',
      description: 'Envie lembretes de antipulga, vacinas e recompras automaticamente via WhatsApp.',
      color: 'primary'
    },
    {
      icon: Repeat,
      title: 'Recompra Inteligente',
      description: 'Avisa o cliente antes da eficácia acabar. Ex: Bravecto dura 3 meses, avisamos no dia 70.',
      color: 'secondary'
    },
    {
      icon: Users,
      title: 'Gestão de Clientes',
      description: 'Cadastre tutores, pets e histórico de compras em um só lugar.',
      color: 'accent'
    },
    {
      icon: BarChart3,
      title: 'Dashboard Inteligente',
      description: 'Visualize métricas de vendas, clientes inativos e próximos lembretes.',
      color: 'primary'
    },
    {
      icon: Smartphone,
      title: 'PWA Mobile',
      description: 'Acesse de qualquer dispositivo com app instalável e funciona offline.',
      color: 'secondary'
    },
    {
      icon: Shield,
      title: 'Seguro e Confiável',
      description: 'Dados protegidos com criptografia e backup automático diário.',
      color: 'accent'
    }
  ]

  const colorClasses = {
    primary: 'bg-primary-100 text-primary-600',
    secondary: 'bg-secondary-100 text-secondary-600',
    accent: 'bg-accent-100 text-accent-600'
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
            Tudo que você precisa para{' '}
            <span className="text-gradient">vender mais</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Automatize seu pós-venda e transforme clientes ocasionais em compradores recorrentes
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${colorClasses[feature.color]} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/funcionalidades"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
          >
            Ver todas as funcionalidades
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// Stats Section
function StatsSection() {
  const stats = [
    { value: '+500', label: 'Pet shops ativos', icon: Users },
    { value: '+40%', label: 'Aumento em vendas', icon: TrendingUp },
    { value: '50k+', label: 'Lembretes enviados', icon: Bell },
    { value: '4.9/5', label: 'Avaliação média', icon: Star },
  ]

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-500/20 text-primary-400 mb-4">
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Cadastre seus clientes',
      description: 'Adicione tutores, pets e produtos comprados em poucos cliques.',
    },
    {
      number: '02',
      title: 'Registre a venda',
      description: 'Informe o produto vendido e sua eficácia (ex: Simparic 35 dias). O sistema calcula quando avisar.',
    },
    {
      number: '03',
      title: 'Automatize e venda mais',
      description: 'O sistema envia lembretes automáticos via WhatsApp no momento certo.',
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
            Como funciona?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comece a usar em menos de 5 minutos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500" />
              )}
              
              <div className="relative bg-white rounded-2xl p-8 text-center border-2 border-gray-100 hover:border-primary-500 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white text-2xl font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Mariana Silva',
      role: 'Dona do Pet Shop Amigo Fiel',
      image: null,
      content: 'Aumentei minhas vendas em 35% no primeiro mês! Os clientes adoram receber o lembrete no WhatsApp.',
      rating: 5
    },
    {
      name: 'Carlos Eduardo',
      role: 'Clínica Vet Care',
      image: null,
      content: 'Antes eu esquecia de avisar sobre vacinas. Agora o sistema faz tudo automaticamente. Incrível!',
      rating: 5
    },
    {
      name: 'Fernanda Costa',
      role: 'Banho & Tosa Patinhas',
      image: null,
      content: 'Simples de usar e o suporte é excelente. Recomendo para qualquer pet shop que queira crescer.',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-dark-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
function FinalCTASection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-3xl p-8 md:p-12 text-center overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-hero-pattern opacity-10" />
          
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>+500 pets felizes</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Pronto para aumentar suas vendas?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Comece agora com 3 dias grátis. Sem cartão de crédito. Cancele quando quiser.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Demo Grátis
              </Link>
              <Link
                to="/preco"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Ver Preços
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Main Home Component
export default function Home() {
  return (
    <>
      <SEO 
        title="Sistema de Pós-Venda Inteligente para Pet Shop"
        description="Automatize lembretes de recompra, antipulgas e vacinas via WhatsApp. +500 pet shops já aumentaram seu faturamento em até 40%. Teste grátis por 3 dias."
        canonical="/"
        keywords="sistema pet shop, software pet shop, CRM pet shop, automação pet shop, recompra automática, lembrete antipulga, pós-venda pet shop"
      />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  )
}

