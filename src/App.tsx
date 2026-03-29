import { LanguageProvider } from './context/LanguageContext'
import { Background } from './components/Background'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Stack } from './components/Stack'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <Background />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default App
