import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import GeneralInformation from './pages/general-information/information'
import './App.css'

function App() {
  return (
    <main className="page-shell">
      <Navbar currentPage="general-information" />
      <GeneralInformation />
      <Footer />
    </main>
  )
}

export default App
