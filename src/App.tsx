import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ViteReactHome from './viteReactHome'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViteReactHome></ViteReactHome>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
