import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { 
  Bell, 
  MessageCircle, 
  Repeat, 
  Users, 
  BarChart3, 
  Smartphone,
  Calendar,
  Zap,
  Shield,
  CloudOff,
  Settings,
  ArrowRight,
  CheckCircle2,
  Package,
  Clock,
  TrendingUp
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
            <Zap className="w-4 h-4" />
            <span>Automação completa para pet shops</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-dark-900 mb-6">
            Funcionalidades que{' '}
            <span className="text-gradient">transformam vendas</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Conheça todas as ferramentas do EssencialPet para automatizar seu pós-venda e aumentar a recorrência de clientes.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Testar Grátis por 3 Dias
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Main Features
function MainFeaturesSection() {
  const features = [
    {
      icon: Bell,
      title: 'Lembretes Automáticos via WhatsApp',
      description: 'Configure lembretes para antipulgas, vacinas, vermífugos e qualquer produto recorrente. O sistema envia automaticamente no momento certo.',
      benefits: [
        'Lembretes personalizados por produto',
        'Envio automático via WhatsApp',
        'Mensagens customizáveis',
        'Histórico de envios'
      ],
      color: 'primary'
    },
    {
      icon: Repeat,
      title: 'Aviso Inteligente de Recompra',
      description: 'Cadastre a eficácia do produto (ex: NexGard 30 dias, Bravecto 90 dias) e o sistema avisa o cliente ANTES de acabar, perguntando se quer comprar outro.',
      benefits: [
        'Aviso antes da eficácia acabar',
        'Dashboard com próximos vencimentos',
        'Alertas de clientes inativos',
        'Relatório de recorrência'
      ],
      color: 'secondary'
    },
    {
      icon: Users,
      title: 'Gestão Completa de Clientes',
      description: 'Cadastre tutores, pets (nome, raça, idade) e todo o histórico de compras em um único lugar organizado.',
      benefits: [
        'Ficha completa do tutor e pet',
        'Histórico de compras',
        'Agenda de próximos avisos',
        'Busca rápida e filtros'
      ],
      color: 'accent'
    }
  ]

  const colorClasses = {
    primary: {
      bg: 'bg-primary-100',
      text: 'text-primary-600',
      border: 'border-primary-200'
    },
    secondary: {
      bg: 'bg-secondary-100',
      text: 'text-secondary-600',
      border: 'border-secondary-200'
    },
    accent: {
      bg: 'bg-accent-100',
      text: 'text-accent-600',
      border: 'border-accent-200'
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${colorClasses[feature.color].bg} ${colorClasses[feature.color].text} mb-6`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-display font-bold text-dark-900 mb-4">
                  {feature.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className={`bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8 border ${colorClasses[feature.color].border}`}>
                  {/* Feature illustration/mockup */}
                  <div className="aspect-video bg-dark-900 rounded-xl overflow-hidden">
                    <div className="p-4 h-full flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <feature.icon className={`w-20 h-20 ${colorClasses[feature.color].text} opacity-50`} />
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

// Additional Features Grid
function AdditionalFeaturesSection() {
  const features = [
    {
      icon: BarChart3,
      title: 'Dashboard Inteligente',
      description: 'Visualize métricas importantes: clientes ativos, inativos, próximos lembretes e vendas.'
    },
    {
      icon: Smartphone,
      title: 'PWA Mobile',
      description: 'Instale como app no celular. Funciona em Android e iOS sem precisar de loja.'
    },
    {
      icon: CloudOff,
      title: 'Funciona Offline',
      description: 'Acesse seus dados mesmo sem internet. Sincroniza automaticamente quando voltar online.'
    },
    {
      icon: Calendar,
      title: 'Agenda de Avisos',
      description: 'Veja todos os clientes que precisam ser contatados na semana organizado por data.'
    },
    {
      icon: Package,
      title: 'Gestão de Produtos',
      description: 'Cadastre produtos com sua eficácia (ex: Simparic 35 dias, Bravecto 90 dias).'
    },
    {
      icon: Settings,
      title: 'Configurações Flexíveis',
      description: 'Defina quantos dias antes da eficácia acabar o cliente deve ser avisado.'
    },
    {
      icon: Shield,
      title: 'Dados Seguros',
      description: 'Criptografia de ponta a ponta e backup automático diário dos seus dados.'
    },
    {
      icon: Clock,
      title: 'Histórico Completo',
      description: 'Acesse todo o histórico de compras e lembretes enviados para cada cliente.'
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
            E muito mais...
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Funcionalidades que facilitam seu dia a dia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-dark-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Comparison Section
function ComparisonSection() {
  const comparison = [
    { feature: 'Cadastro de clientes e pets', manual: true, EssencialPet: true },
    { feature: 'Histórico de compras', manual: false, EssencialPet: true },
    { feature: 'Lembretes automáticos', manual: false, EssencialPet: true },
    { feature: 'Envio via WhatsApp', manual: false, EssencialPet: true },
    { feature: 'Cálculo de recompra', manual: false, EssencialPet: true },
    { feature: 'Dashboard com métricas', manual: false, EssencialPet: true },
    { feature: 'Funciona no celular', manual: false, EssencialPet: true },
    { feature: 'Backup automático', manual: false, EssencialPet: true },
  ]

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
            Planilha vs EssencialPet
          </h2>
          <p className="text-lg text-gray-600">
            Veja por que trocar controles manuais pelo EssencialPet
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-3 bg-gray-50 p-4 font-semibold text-dark-900">
            <div>Funcionalidade</div>
            <div className="text-center">Planilha/Manual</div>
            <div className="text-center text-primary-600">EssencialPet</div>
          </div>
          {comparison.map((item, index) => (
            <div key={item.feature} className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
              <div className="text-gray-700">{item.feature}</div>
              <div className="text-center">
                {item.manual ? (
                  <CheckCircle2 className="w-5 h-5 text-gray-400 inline" />
                ) : (
                  <span className="text-gray-400">✕</span>
                )}
              </div>
              <div className="text-center">
                <CheckCircle2 className="w-5 h-5 text-green-500 inline" />
              </div>
            </div>
          ))}
        </motion.div>
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
            Pronto para automatizar?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            Comece agora e veja resultados na primeira semana
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

export default function Funcionalidades() {
  return (
    <>
      <SEO 
        title="Funcionalidades"
        description="Conheça todas as funcionalidades do EssencialPet: lembretes automáticos via WhatsApp, gestão de clientes e pets, dashboard de métricas e muito mais."
        canonical="/funcionalidades"
        keywords="funcionalidades pet shop, sistema gestão pet shop, lembrete automático antipulga, CRM veterinário, software banho e tosa"
      />
      <HeroSection />
      <HowItWorksSection />
      <MainFeaturesSection />
      <AdditionalFeaturesSection />
      <ComparisonSection />
      <CTASection />
    </>
  )
}

// How It Works Section - Exemplo prático
function HowItWorksSection() {
  return (
    <section className="py-16 bg-primary-50 border-y border-primary-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-900 mb-4">
            Como funciona na prática?
          </h2>
          <p className="text-gray-600">
            Exemplo real com antipulga Bravecto (eficácia de 3 meses)
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="bg-white rounded-xl p-6 text-center relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div className="pt-4">
              <div className="text-3xl mb-2">🛒</div>
              <h3 className="font-bold text-dark-900 mb-2">Venda registrada</h3>
              <p className="text-sm text-gray-600">Cliente compra Bravecto em <strong>01/01</strong></p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 text-center relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div className="pt-4">
              <div className="text-3xl mb-2">⏱️</div>
              <h3 className="font-bold text-dark-900 mb-2">Sistema calcula</h3>
              <p className="text-sm text-gray-600">Eficácia 90 dias → Aviso em <strong>70 dias</strong></p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 text-center relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div className="pt-4">
              <div className="text-3xl mb-2">📱</div>
              <h3 className="font-bold text-dark-900 mb-2">WhatsApp enviado</h3>
              <p className="text-sm text-gray-600">Em <strong>11/03</strong>: "Oi! A eficácia do Bravecto está acabando..."</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 text-center relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">✓</div>
            <div className="pt-4">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-bold text-dark-900 mb-2">Cliente volta</h3>
              <p className="text-sm text-gray-600">Compra garantida antes de ir no concorrente!</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 p-4 bg-white rounded-xl border border-primary-200"
        >
          <p className="text-center text-gray-600">
            <strong className="text-primary-600">Resultado:</strong> O cliente recebe o lembrete 20 dias antes da eficácia acabar, 
            tem tempo de se programar e volta para comprar com você — não com o concorrente.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

