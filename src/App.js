import './App.css'
import Navbar from '../src/Components/Navbar/Navbar'
/* import Works from './Components/HowItWorks/Works'
 */ /* import Workslide from './Components/HowItWorks/WorkSlide' */
import Features from './Components/Features/Features'
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Features />
      <ContactUs />
      <Footer />
    </div>
  )
}
export default App
