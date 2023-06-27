import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ViteReactHome from './viteReactHome'
import TabsExample from './TabsExample'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViteReactHome></ViteReactHome>} />
        <Route path="/tabs" element={<TabsExample></TabsExample>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
