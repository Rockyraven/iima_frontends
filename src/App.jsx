
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Testimonial from './components/Testimonial'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import toast, { Toaster } from 'react-hot-toast';

function App() {
  

  return (
    <>
    <Toaster />
    <ToastContainer
        position="buttom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    <Navbar/>
    <Home/>
    <Skills/>
    <About/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
