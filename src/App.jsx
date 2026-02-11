import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Funcionalidades from './pages/Funcionalidades'
import Preco from './pages/Preco'
import Segmentos from './pages/Segmentos'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="funcionalidades" element={<Funcionalidades />} />
          <Route path="preco" element={<Preco />} />
          <Route path="segmentos" element={<Segmentos />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contato" element={<Contato />} />
          <Route path="demo" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
