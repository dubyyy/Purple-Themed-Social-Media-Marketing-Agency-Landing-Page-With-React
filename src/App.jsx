import CSS from './App.module.scss'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Navbar from './Components/Navbar'
import Non from './Components/Non'
import ContactUs from './Components/ContactUs'
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
 
  return (
    <>
    <div className={CSS.n}>
      <Navbar />
    </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<Non />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
      </Routes>
   
    </>
  )
}

export default App
