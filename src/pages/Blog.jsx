import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Search,
  Tag,
  TrendingUp,
  BookOpen
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

// Blog post data (would come from CMS in production)
const blogPosts = [
  {
    slug: 'como-fazer-cliente-voltar-pet-shop',
    title: 'Como fazer cliente voltar ao pet shop: 7 estratégias comprovadas',
    excerpt: 'Descubra as melhores práticas para fidelizar clientes e aumentar a recorrência no seu pet shop.',
    category: 'Fidelização',
    date: '10 Fev 2026',
    readTime: '8 min',
    featured: true
  },
  {
    slug: 'lembrete-automatico-antipulga',
    title: 'Lembrete automático de antipulga funciona? Veja dados reais',
    excerpt: 'Análise de como lembretes automáticos via WhatsApp aumentam vendas de antipulgas em pet shops.',
    category: 'Automação',
    date: '8 Fev 2026',
    readTime: '6 min',
    featured: true
  },
  {
    slug: 'recompra-automatica-pet-shop-guia',
    title: 'Recompra automática para pet shop: guia prático completo',
    excerpt: 'Passo a passo para implementar um sistema de recompra automática no seu negócio pet.',
    category: 'Guias',
    date: '5 Fev 2026',
    readTime: '12 min',
    featured: true
  },
  {
    slug: 'planilha-vs-sistema-pet-shop',
    title: 'Planilha vs Sistema para pet shop: quando fazer a troca?',
    excerpt: 'Compare as vantagens e desvantagens de cada abordagem para gestão de clientes.',
    category: 'Comparativos',
    date: '2 Fev 2026',
    readTime: '7 min',
    featured: false
  },
  {
    slug: 'como-calcular-recorrencia-pet-shop',
    title: 'Como calcular a recorrência de clientes no pet shop',
    excerpt: 'Fórmulas e métricas essenciais para medir e melhorar a taxa de recompra.',
    category: 'Métricas',
    date: '30 Jan 2026',
    readTime: '5 min',
    featured: false
  },
  {
    slug: 'melhores-softwares-pet-shop-2026',
    title: 'Melhores softwares para pet shop em 2026: ranking completo',
    excerpt: 'Comparativo dos principais sistemas de gestão para pet shops do mercado brasileiro.',
    category: 'Comparativos',
    date: '28 Jan 2026',
    readTime: '10 min',
    featured: false
  },
  {
    slug: 'crm-pet-shop-o-que-precisa-ter',
    title: 'CRM para pet shop: o que precisa ter?',
    excerpt: 'Funcionalidades essenciais que todo CRM para pet shops deve oferecer.',
    category: 'Guias',
    date: '25 Jan 2026',
    readTime: '6 min',
    featured: false
  },
  {
    slug: 'automacao-whatsapp-pet-shop',
    title: 'Automação WhatsApp para pet shop: como implementar',
    excerpt: 'Tutorial para automatizar mensagens de pós-venda via WhatsApp no seu pet shop.',
    category: 'Automação',
    date: '22 Jan 2026',
    readTime: '8 min',
    featured: false
  },
  {
    slug: 'como-reduzir-clientes-inativos',
    title: 'Como reduzir clientes inativos no pet shop',
    excerpt: 'Estratégias para reativar clientes que pararam de comprar no seu estabelecimento.',
    category: 'Fidelização',
    date: '20 Jan 2026',
    readTime: '7 min',
    featured: false
  },
  {
    slug: 'como-fidelizar-clientes-banho-tosa',
    title: 'Como fidelizar clientes de banho e tosa',
    excerpt: 'Dicas específicas para aumentar a recorrência em serviços de grooming.',
    category: 'Fidelização',
    date: '18 Jan 2026',
    readTime: '6 min',
    featured: false
  },
  {
    slug: 'quanto-custa-sistema-pet-shop',
    title: 'Quanto custa um sistema para pet shop?',
    excerpt: 'Análise de preços e custo-benefício dos principais sistemas do mercado.',
    category: 'Comparativos',
    date: '15 Jan 2026',
    readTime: '5 min',
    featured: false
  },
  {
    slug: 'checklist-pos-venda-pet-shop',
    title: 'Checklist de pós-venda para pet shop',
    excerpt: 'Lista completa de ações para maximizar a experiência do cliente após a compra.',
    category: 'Guias',
    date: '12 Jan 2026',
    readTime: '4 min',
    featured: false
  }
]

const categories = [
  { name: 'Todos', count: blogPosts.length },
  { name: 'Fidelização', count: 3 },
  { name: 'Automação', count: 2 },
  { name: 'Guias', count: 3 },
  { name: 'Comparativos', count: 3 },
  { name: 'Métricas', count: 1 },
]

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
            <BookOpen className="w-4 h-4" />
            <span>Blog EssencialPet</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-dark-900 mb-6">
            Conteúdo para{' '}
            <span className="text-gradient">vender mais</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Dicas, estratégias e guias práticos para aumentar as vendas e fidelizar clientes no seu pet shop.
          </motion.p>

          {/* Search */}
          <motion.div variants={fadeInUp} className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Featured Posts
function FeaturedPostsSection() {
  const featured = blogPosts.filter(p => p.featured)

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <TrendingUp className="w-5 h-5 text-primary-500" />
          <h2 className="text-xl font-bold text-dark-900">Em destaque</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={`/blog/${post.slug}`}
                className="block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-primary-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-4 flex items-center text-primary-600 text-sm font-medium">
                    Ler artigo
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

// All Posts Section
function AllPostsSection() {
  const [activeCategory, setActiveCategory] = React.useState('Todos')
  
  const filteredPosts = activeCategory === 'Todos' 
    ? blogPosts 
    : blogPosts.filter(p => p.category === activeCategory)

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.name
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 6) * 0.05 }}
            >
              <Link 
                to={`/blog/${post.slug}`}
                className="block bg-white rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

// Newsletter Section
function NewsletterSection() {
  return (
    <section className="py-20">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
            Receba as melhores dicas por email
          </h2>
          <p className="text-gray-600 mb-6">
            Conteúdo exclusivo semanal para donos de pet shop
          </p>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors"
            >
              Assinar
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-3">
            Sem spam. Cancele quando quiser.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default function Blog() {
  return (
    <>
      <SEO 
        title="Blog"
        description="Dicas, estratégias e novidades para pet shops, clínicas veterinárias e banho e tosa. Aprenda a fidelizar clientes e aumentar vendas."
        canonical="/blog"
        keywords="blog pet shop, dicas pet shop, marketing pet shop, fidelização clientes pet, estratégias vendas pet shop"
      />
      <HeroSection />
      <FeaturedPostsSection />
      <AllPostsSection />
      <NewsletterSection />
    </>
  )
}

