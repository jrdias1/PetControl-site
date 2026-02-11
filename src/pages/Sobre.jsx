import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Target, 
  Zap, 
  BarChart3,
  MessageCircle,
  CheckCircle2,
  TrendingDown,
  Brain,
  ArrowRight,
  Building2,
  Lightbulb
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

// Hero Section
function HeroSection() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.div variants={fadeInUp} className="text-6xl mb-6">
            🐾
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-dark-900 mb-6">
            Sobre Nós
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
            O EssencialPet nasceu dentro da <strong className="text-primary-600">Essencial Comunicação</strong>, 
            empresa especializada em automação estratégica, tecnologia aplicada a negócios e marketing orientado a dados.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

// Origin Story Section
function OriginSection() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Durante nossa atuação com sistemas, CRM e automações, começamos a analisar o mercado pet 
            com uma visão técnica e estratégica.
          </p>
          
          <p className="text-xl font-semibold text-dark-900 mb-6">
            E percebemos um padrão silencioso — e caro.
          </p>

          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-xl my-8">
            <p className="text-dark-900 text-xl font-medium italic mb-0">
              O cliente não deixava de comprar.<br />
              Ele simplesmente <span className="text-primary-600">esquecia de voltar</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              'Antipulgas venciam.',
              'Vacinas passavam do prazo.',
              'Vermífugos eram ignorados.',
              'E quando o tutor lembrava, comprava onde fosse mais conveniente — muitas vezes no concorrente.'
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
              >
                <TrendingDown className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Problem Section
function ProblemSection() {
  return (
    <section className="py-16 bg-dark-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-4xl mb-4">📉</div>
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            O problema nunca foi falta de cliente.
          </h2>
          <p className="text-2xl text-primary-400 font-semibold">
            O problema era falta de acompanhamento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            'Não sabe exatamente quando cada produto perde a eficácia',
            'Não tem controle estruturado da recorrência',
            'Não consegue lembrar manualmente todos os clientes',
            'Depende da memória do tutor'
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 p-5 bg-white/5 border border-white/10 rounded-xl"
            >
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-red-400 text-sm">✕</span>
              </div>
              <span className="text-gray-300">{text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-white font-semibold mb-2">
            E memória não é estratégia.
          </p>
          <p className="text-gray-400">
            Cada produto recorrente vendido sem acompanhamento é uma venda futura em risco.<br />
            Essa perda acontece todos os dias — de forma silenciosa.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Solution Section
function SolutionSection() {
  const features = [
    { icon: Zap, text: 'Calcula automaticamente o tempo de eficácia de cada produto' },
    { icon: Target, text: 'Define o momento ideal para recompra' },
    { icon: MessageCircle, text: 'Envia lembretes automáticos via WhatsApp' },
    { icon: BarChart3, text: 'Mostra no dashboard quem está prestes a vencer' },
    { icon: TrendingDown, text: 'Identifica clientes inativos' },
    { icon: Heart, text: 'Organiza tutores, pets e histórico de compras' },
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
          <div className="text-4xl mb-4">🚀</div>
          <h2 className="text-3xl font-display font-bold text-dark-900 mb-4">
            Transformamos pós-venda em processo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Foi a partir dessa dor que criamos o EssencialPet.<br />
            Não como um sistema genérico de gestão.<br />
            Mas como uma <strong className="text-primary-600">estrutura inteligente de recorrência</strong>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6" />
              </div>
              <span className="text-gray-700 font-medium">{feature.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-gray-50 rounded-2xl text-center"
        >
          <p className="text-lg text-dark-900 font-medium">
            Aqui, tecnologia não é enfeite.<br />
            <span className="text-primary-600">É ferramenta para aumentar previsibilidade de faturamento.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Philosophy Section
function PhilosophySection() {
  const beliefs = [
    { icon: BarChart3, text: 'Dados geram decisões melhores' },
    { icon: Zap, text: 'Automação gera escala' },
    { icon: TrendingDown, text: 'Pós-venda gera lucro previsível' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-4xl mb-4">🧠</div>
          <h2 className="text-3xl font-display font-bold text-dark-900 mb-4">
            A filosofia por trás
          </h2>
          <p className="text-gray-600">
            Na Essencial Comunicação, acreditamos que:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {beliefs.map((belief, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl text-center shadow-lg"
            >
              <div className="w-14 h-14 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4">
                <belief.icon className="w-7 h-7" />
              </div>
              <p className="font-semibold text-dark-900">{belief.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-700 mb-2">
            Não criamos apenas sistemas.
          </p>
          <p className="text-xl text-dark-900 font-semibold">
            Criamos estruturas que ajudam negócios a crescer com inteligência.
          </p>
          <p className="text-gray-600 mt-4">
            O EssencialPet é a aplicação prática dessa visão no mercado pet.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Commitment Section
function CommitmentSection() {
  const commitments = [
    'Reduzir perda de clientes para concorrentes',
    'Automatizar recompra de forma estratégica',
    'Criar previsibilidade de receita',
    'Profissionalizar o relacionamento com o tutor'
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
          <div className="text-4xl mb-4">🎯</div>
          <h2 className="text-3xl font-display font-bold text-dark-900 mb-4">
            Nosso compromisso
          </h2>
          <p className="text-gray-600">
            Ajudar pet shops a:
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto space-y-4 mb-12">
          {commitments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-4 bg-green-50 border border-green-100 rounded-xl"
            >
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span className="text-dark-900 font-medium">{item}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center p-8 bg-dark-900 rounded-2xl"
        >
          <p className="text-white text-lg mb-2">
            Porque fidelização não acontece por acaso.
          </p>
          <p className="text-primary-400 text-xl font-semibold">
            Ela é construída com processo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Pronto para transformar seu pós-venda?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Conheça o EssencialPet e veja como podemos ajudar seu pet shop a crescer com recorrência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Demo Grátis
            </Link>
            <Link
              to="/funcionalidades"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Ver Funcionalidades
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Sobre() {
  return (
    <>
      <HeroSection />
      <OriginSection />
      <ProblemSection />
      <SolutionSection />
      <PhilosophySection />
      <CommitmentSection />
      <CTASection />
    </>
  )
}
