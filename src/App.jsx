import Navbar from './Components/Navbar'
import Container from './Components/Content'
import Footer from'./Components/Footer'
import './App.css'

function App() {
  return (
    <>
      <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
        <Navbar />
        <Container />
        <Footer />
      </div>  
    </>
  )
}

export default App
