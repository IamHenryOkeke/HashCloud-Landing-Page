import Access from "./components/Access"
import Benefits from "./components/Benefits"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"

const App = () => {

  return (
    <div className="font-Body">
      <Navbar/>
      <Hero/>
      <Benefits/>
      <Access/> 
      <Pricing/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default App
