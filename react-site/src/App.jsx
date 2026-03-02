import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Books from './components/Books'
import Biography from './components/Biography'
import Gallery from './components/Gallery'
import Projects from './components/Projects'
import Events from './components/Events'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Books />
        <Biography />
        <Gallery />
        <Projects />
        <Events />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
