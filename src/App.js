import './App.css'
import Navbar from '../src/Components/Navbar/Navbar'
import Works from './Components/HowItWorks/Works'
import Features from './Components/Features/Features'
import ContactUs from './Components/ContactUs/ContactUs'

import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Works />
      <Features />
      <ContactUs />

      <Footer />
    </div>
  )
}
export default App
