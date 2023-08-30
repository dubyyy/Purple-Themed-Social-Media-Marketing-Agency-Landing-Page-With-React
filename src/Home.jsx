import CSS from './Home.module.scss'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Benefits from './Components/Benefits'
import Services from './Components/Services'
import Adverts from './Components/Adverts'
import Casestudy from './Components/Casestudy'
import Testimonial from './Components/Testimonial'
import Pain from './Components/Pain'
import ACSS from './App.module.scss'
function Home() {
 
  return (
    <>
    <div className={ACSS.n}>
        <Hero />
    </div>
    
    <div className={CSS.container}>
      
      <About />
      <Adverts />
      <Services />
      <Benefits />
      <Casestudy />
      <Pain />
      <Testimonial />
      
      
    </div>
    </>
  )
}

export default Home
