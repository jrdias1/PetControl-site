import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2,
  MessageCircle,
  BookOpen,
  User
} from 'lucide-react'

// This would come from a CMS in production
const blogPostsContent = {
  'como-fazer-cliente-voltar-pet-shop': {
    title: 'Como fazer cliente voltar ao pet shop: 7 estratégias comprovadas',
    excerpt: 'Descubra as melhores práticas para fidelizar clientes e aumentar a recorrência no seu pet shop.',
    category: 'Fidelização',
    date: '10 Fev 2026',
    readTime: '8 min',
    author: 'Equipe EssencialPet',
    content: `
      <h2>Por que clientes param de voltar?</h2>
      <p>Antes de falar sobre como fazer o cliente voltar, precisamos entender por que eles param de comprar. As principais razões são:</p>
      <ul>
        <li><strong>Esquecimento:</strong> O cliente simplesmente esquece que precisa comprar novamente</li>
        <li><strong>Concorrência:</strong> Encontrou outro pet shop mais conveniente</li>
        <li><strong>Experiência ruim:</strong> Teve algum problema na última compra</li>
        <li><strong>Falta de relacionamento:</strong> Não existe conexão com a loja</li>
      </ul>

      <h2>1. Implemente lembretes automáticos</h2>
      <p>A estratégia mais eficaz é lembrar o cliente ANTES que o produto acabe. Ex: Bravecto tem eficácia de 3 meses - o sistema avisa no dia 70 perguntando se quer comprar outro.</p>
      <p>Com um sistema de lembretes automáticos via WhatsApp, você envia uma mensagem amigável antes da eficácia acabar.</p>

      <h2>2. Crie um programa de fidelidade simples</h2>
      <p>Não precisa ser complexo. Um cartão de "compre 10 banhos, ganhe 1" já é suficiente para criar o hábito de retorno.</p>

      <h2>3. Ofereça atendimento personalizado</h2>
      <p>Chame o pet pelo nome, lembre das preferências do tutor. Isso cria conexão emocional.</p>

      <h2>4. Faça pós-venda ativo</h2>
      <p>Ligue ou mande mensagem perguntando se o pet gostou do produto. Esse cuidado diferencia seu negócio.</p>

      <h2>5. Tenha estoque dos produtos preferidos</h2>
      <p>Nada frustra mais que ir buscar o produto favorito e não encontrar. Monitore o histórico de compras.</p>

      <h2>6. Ofereça conveniência</h2>
      <p>Delivery, pagamento por PIX, agendamento online. Quanto mais fácil comprar, mais o cliente volta.</p>

      <h2>7. Use dados para antecipar necessidades</h2>
      <p>Com um sistema de CRM, você sabe exatamente quando cada cliente precisa de recompra.</p>

      <h2>Conclusão</h2>
      <p>Fidelizar clientes é mais barato que conquistar novos. Com as estratégias certas e automação, você pode aumentar sua recorrência em até 40%.</p>
    `
  }
}

// Fallback content for posts without full content
const defaultContent = `
  <h2>Sobre este artigo</h2>
  <p>Este artigo está em desenvolvimento. Em breve teremos todo o conteúdo disponível.</p>
  <p>Enquanto isso, que tal conhecer o EssencialPet? Nosso sistema ajuda pet shops a automatizar o pós-venda e aumentar a recorrência de clientes.</p>
  <p>Agende uma demonstração gratuita e veja como podemos ajudar seu negócio.</p>
`

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPostsContent[slug]

  // If post doesn't exist, show generic content
  const content = post?.content || defaultContent
  const title = post?.title || 'Artigo do Blog EssencialPet'
  const category = post?.category || 'Blog'
  const date = post?.date || 'Jan 2026'
  const readTime = post?.readTime || '5 min'
  const author = post?.author || 'Equipe EssencialPet'

  return (
    <article className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-primary-50 text-primary-600 text-sm font-medium rounded-full">
              {category}
            </span>
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
            {title}
          </h1>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <User className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="font-medium text-dark-900">{author}</div>
                <div className="text-sm text-gray-500">EssencialPet</div>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Share2 className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-dark-900 prose-a:text-primary-600 prose-strong:text-dark-900"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Quer automatizar seu pós-venda?
          </h3>
          <p className="text-white/80 mb-6">
            O EssencialPet ajuda você a fidelizar clientes com lembretes automáticos via WhatsApp.
          </p>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold rounded-full hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar Demo Grátis
          </Link>
        </motion.div>

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold text-dark-900 mb-6">Continue lendo</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              to="/blog/lembrete-automatico-antipulga" 
              className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
            >
              <h4 className="font-semibold text-dark-900 group-hover:text-primary-600 transition-colors">
                Lembrete automático de antipulga funciona?
              </h4>
              <p className="text-sm text-gray-500 mt-1">6 min de leitura</p>
            </Link>
            <Link 
              to="/blog/recompra-automatica-pet-shop-guia" 
              className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
            >
              <h4 className="font-semibold text-dark-900 group-hover:text-primary-600 transition-colors">
                Recompra automática para pet shop: guia prático
              </h4>
              <p className="text-sm text-gray-500 mt-1">12 min de leitura</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  )
}

