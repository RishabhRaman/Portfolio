import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
 
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Certificates from './sections/Certificates'
import Contact from './sections/Contact'
import Education from './sections/Education'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="section">
          <div className="container">
            <p style={{ textAlign: 'center' }}>Thank you for visiting my portfolio! Explore my work and let's connect.</p>
          </div>
        </section>
        <Education />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
