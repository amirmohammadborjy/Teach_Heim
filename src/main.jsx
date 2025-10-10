import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './input.css'
import './output.css'
import App from './App.jsx'
import Header from './component/header.jsx'
import HeaderContent from './component/headercontent.jsx'
import Category from './component/category.jsx'
import Baner from './component/baner.jsx'
import CardsModel1 from './component/cardsmodel1.jsx'
import CardsModel2 from './component/cardsmodel2.jsx'
import Brands from './component/brands.jsx'
import Poster from './component/poster.jsx'
import Blogs from './component/blogs.jsx'
import Footer from './component/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <HeaderContent/>
    <Category/>
    <Baner/>
    <CardsModel1/>   
    <CardsModel2/>
    <Brands/>
    <Poster/>
    <Blogs/>
    <Footer/>
  </StrictMode>,
)
