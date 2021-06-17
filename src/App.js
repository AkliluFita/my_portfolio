import React ,{useState}from 'react'
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Menu from './components/menu/Menu'
import Footer from './components/footer/Footer'
import './App.css'

export default function App() {

  const [hamberger, sethamberger] = useState(true)
  // const [menu, setmenu] = useState(false)
  return (
    <div className='app'>
        <div className="app-container">
          <div className='upper'>
              <Topbar hamberger={hamberger} sethamberger={sethamberger}/>
                {!hamberger&&<Menu amberger={hamberger} sethamberger={sethamberger}/>}
          </div>
          <hr />
          <div className="sections">
              <Intro/>
              <hr />
              <Portfolio/>
              <hr />
              <Testimonials/>
              <hr />
              <Contact/>
              <hr />
              <Footer/>
          </div>
        </div>
    </div>
  )
}
