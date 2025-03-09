import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='flex flex-col'>
        <Navbar/>
        <main className=''>
          <h1>BATTLEGROUND</h1>
        </main>
        <Footer/>
    </div>
  )
}

export default App
