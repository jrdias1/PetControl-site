import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO, { schemas } from '../components/SEO'
import { 
  Check, 
  X, 
  Zap, 
  MessageCircle, 
  HelpCircle,
  Star,
  Shield,
  Clock,
  Users,
  ArrowRight
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
            <Zap className="w-4 h-4" />
            <span>3 dias grátis • Sem cartão de crédito</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-dark-900 mb-6">
            Invista menos do que uma venda recuperada por mês
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada plano foi pensado para um momento do seu pet shop. Sem contrato, sem pegadinha.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

// Pricing Cards
function PricingSection() {
  const [annual, setAnnual] = useState(true)

  const plans = [
    {
      name: 'STARTER',
      description: 'Para quem está dando os primeiros passos',
      priceMonthly: 99.90,
      priceAnnual: 79.90,
      annualTotal: true, // pagamento único anual
      features: [
        { text: 'Até 200 clientes', included: true },
        { text: 'Até 300 mensagens/mês via WhatsApp', included: true },
        { text: 'Até 100 produtos cadastrados', included: true },
        { text: '1 usuário', included: true },
        { text: 'Lembretes automáticos via WhatsApp', included: true },
        { text: 'Dashboard básico', included: true },
        { text: 'Suporte por email', included: true },
        { text: 'Múltiplos usuários', included: false },
        { text: 'Relatórios avançados', included: false },
        { text: 'API de integração', included: false },
      ],
      cta: 'Começar Grátis',
      popular: false
    },
    {
      name: 'PROFISSIONAL',
      description: 'Para pet shops em crescimento',
      priceMonthly: 197.00,
      priceAnnual: 157.00,
      annualTotal: true, // pagamento único anual
      features: [
        { text: 'Até 500 clientes', included: true },
        { text: 'Até 800 mensagens/mês via WhatsApp', included: true },
        { text: 'Até 200 produtos cadastrados', included: true },
        { text: 'Até 3 usuários', included: true },
        { text: 'Lembretes automáticos via WhatsApp', included: true },
        { text: 'Dashboard completo', included: true },
        { text: 'Suporte prioritário', included: true },
        { text: 'Relatórios avançados', included: true },
        { text: 'API de integração', included: false },
      ],
      cta: 'Começar Grátis',
      popular: true
    },
    {
      name: 'ENTERPRISE',
      description: 'Para redes, franquias e multi-lojas',
      priceMonthly: 349.00,
      priceAnnual: 279.00,
      annualTotal: true, // pagamento único anual
      features: [
        { text: 'Clientes ilimitados', included: true },
        { text: 'Mensagens ilimitadas via WhatsApp', included: true },
        { text: 'Produtos ilimitados', included: true },
        { text: 'Usuários ilimitados', included: true },
        { text: 'Lembretes automáticos via WhatsApp', included: true },
        { text: 'Dashboard completo', included: true },
        { text: 'Suporte VIP via WhatsApp', included: true },
        { text: 'Relatórios avançados', included: true },
        { text: 'API de integração', included: true },
        { text: 'Onboarding personalizado', included: true },
        { text: 'Gestor de conta dedicado', included: true },
      ],
      cta: 'Falar com Vendas',
      popular: false
    }
  ]

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!annual ? 'text-dark-900' : 'text-gray-500'}`}>
            Mensal
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-14 h-7 rounded-full transition-colors ${annual ? 'bg-primary-500' : 'bg-gray-300'}`}
          >
            <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${annual ? 'left-8' : 'left-1'}`} />
          </button>
          <span className={`text-sm font-medium ${annual ? 'text-dark-900' : 'text-gray-500'}`}>
            Anual
          </span>
          {annual && (
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
              Economize 20%
            </span>
          )}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular 
                  ? 'ring-2 ring-primary-500 shadow-xl' 
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold rounded-full">
                  ⭐ Mais popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-dark-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-display font-bold text-dark-900">
                    R$ {(annual ? plan.priceAnnual : plan.priceMonthly).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace('.', ',')}
                  </span>
                  <span className="text-gray-500 mb-1">/mês</span>
                </div>
                {annual && (
                  <p className="text-sm text-green-600 font-medium mt-2">
                    Pague R$ {(plan.priceAnnual * 12).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace('.', ',')} à vista (1 ano)
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                    )}
                    <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to={plan.cta === 'Falar com Vendas' ? '/contato' : '/demo'}
                className={`block w-full py-3 text-center font-semibold rounded-xl transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-lg hover:shadow-primary-500/30'
                    : 'bg-gray-100 text-dark-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Guarantees Section
function GuaranteesSection() {
  const guarantees = [
    {
      icon: Clock,
      title: '3 Dias Grátis',
      description: 'Teste todas as funcionalidades sem compromisso e sem cartão de crédito.'
    },
    {
      icon: Shield,
      title: 'Sem Fidelidade',
      description: 'Cancele a qualquer momento, sem multas, sem burocracia.'
    },
    {
      icon: Users,
      title: 'Suporte Humano',
      description: 'Time real pronto para ajudar via WhatsApp ou email. Sem bot.'
    },
    {
      icon: Star,
      title: 'Garantia de 30 Dias',
      description: 'Se não gostar por qualquer motivo, devolvemos 100% do seu dinheiro.'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {guarantees.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-600 mb-4">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-dark-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Preciso de cartão de crédito para testar?',
      answer: 'Não. Os 3 dias grátis são totalmente livres de cartão. Você só informa os dados de pagamento quando decidir assinar.'
    },
    {
      question: 'Posso mudar de plano depois?',
      answer: 'Sim, a qualquer momento. Se seu pet shop crescer, você sobe de plano com um clique e paga apenas a diferença proporcional.'
    },
    {
      question: 'Como funciona o cancelamento?',
      answer: 'Simples e sem burocracia. Cancele direto pelo painel, sem precisar falar com ninguém. Você continua com acesso até o fim do período pago.'
    },
    {
      question: 'O preço pode aumentar?',
      answer: 'Clientes ativos são avisados com pelo menos 30 dias de antecedência antes de qualquer reajuste. Sem surpresas.'
    },
    {
      question: 'Tem desconto para múltiplas lojas?',
      answer: 'Sim! Para redes com 2 ou mais unidades temos condições especiais. Fale com nosso time pelo WhatsApp e montamos uma proposta personalizada.'
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Tudo que você precisa saber sobre preços e pagamentos
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-dark-900">{faq.question}</span>
                <HelpCircle className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              )}
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
            Pronto para parar de perder recompras?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            Mais de 500 pet shops já automatizaram o pós-venda com o EssencialPet. Comece hoje e veja os primeiros resultados ainda nesta semana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Demo Grátis
            </Link>
            <a
              href="https://wa.me/5524981375213?text=Olá! Tenho dúvidas sobre o EssencialPet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Falar no WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Preco() {
  return (
    <>
      <SEO 
        title="Preços e Planos"
        description="Conheça os planos do EssencialPet a partir de R$67,90/mês. Starter, Pro e Enterprise. Teste grátis por 3 dias. Sem fidelidade."
        canonical="/preco"
        keywords="preço sistema pet shop, quanto custa software pet shop, planos EssencialPet, sistema pet shop barato"
        schema={schemas.serviceSchema}
      />
      <HeroSection />
      <PricingSection />
      <GuaranteesSection />
      <FAQSection />
      <CTASection />
    </>
  )
}

