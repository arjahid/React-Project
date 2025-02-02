

import './App.css'

import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'



// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  

  return (
    <>
     <NavBar></NavBar>
      <h1 className='te'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <Phones></Phones>
     
   
      
   
    </>
  )
}

export default App
