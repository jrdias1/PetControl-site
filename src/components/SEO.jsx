import React from 'react'
import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://essencialpet.com.br'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
  schema = null,
}) {
  const fullTitle = title 
    ? `${title} | EssencialPet` 
    : 'EssencialPet - Sistema de Pós-Venda Inteligente para Pet Shop'
  
  const fullCanonical = canonical 
    ? `${SITE_URL}${canonical}` 
    : SITE_URL
  
  const defaultDescription = 'Automatize lembretes de recompra, antipulgas e vacinas. +500 pet shops já aumentaram seu faturamento em até 40%. Teste grátis por 3 dias.'
  
  const defaultKeywords = 'sistema pet shop, software pet shop, CRM pet shop, automação pet shop, recompra automática, lembrete antipulga, sistema veterinário, pós-venda pet shop'

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="EssencialPet" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}

// Schemas prontos para uso
export const schemas = {
  // Schema de FAQ
  faqSchema: (faqs) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }),

  // Schema de Breadcrumb
  breadcrumbSchema: (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://essencialpet.com.br${item.url}`
    }))
  }),

  // Schema de Article (para blog)
  articleSchema: ({ title, description, image, datePublished, dateModified, author }) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image || DEFAULT_IMAGE,
    "author": {
      "@type": "Person",
      "name": author || "Equipe EssencialPet"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EssencialPet",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": SITE_URL
    }
  }),

  // Schema de Product/Service
  serviceSchema: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "EssencialPet",
    "description": "Sistema de Pós-Venda Inteligente para Pet Shops",
    "brand": {
      "@type": "Brand",
      "name": "EssencialPet"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "67.90",
      "highPrice": "299.00",
      "priceCurrency": "BRL",
      "offerCount": "3"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "523"
    }
  },

  // Schema de LocalBusiness
  localBusinessSchema: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Essencial Comunicação",
    "image": `${SITE_URL}/logo.png`,
    "telephone": "+55-24-98137-5213",
    "email": "essencialcomunicacaoeinfo@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Petrópolis",
      "addressRegion": "RJ",
      "addressCountry": "BR"
    },
    "url": SITE_URL,
    "sameAs": [
      "https://www.instagram.com/essencial_comunicacao/"
    ]
  }
}
