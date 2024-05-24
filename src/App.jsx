import React , { createContext, useContext} from 'react'
// import Navbar from './Components/Navbar'
// import Hero from './Components/Hero'
// import Content from './Components/Content'
// import Footer from './Components/Footer'
// import Api from './Components/Api'
// import RApi from './Components/rapi'
import ChidA from './Props/ChidA'


function App() {
const Data = createContext()
  const name = "Ahmed"
  return (
    // <>
    //   <Navbar />
    //   <Hero />
    //   <Content />
    //   <Footer />
    // </>

    <>
  <Data.Provider>
  <ChidA  name = {name}/>
  </Data.Provider>
    </>
  )
}

export default App
