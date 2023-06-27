import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ViteReactHome from './components/Default/ViteReactHome'
import Tabs from './components/TabsFromScratch/Tabs'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViteReactHome></ViteReactHome>} />
        <Route path="/tabs" element={<Tabs></Tabs>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
