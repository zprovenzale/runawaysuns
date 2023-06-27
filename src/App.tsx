import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ViteReactHome from './components/Default/ViteReactHome'
import Tabs from './components/TabsFromScratch/Tabs'
import TabsReactLibrary from './components/TabsFromReactLibrary/TabsFromReactLibrary'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViteReactHome></ViteReactHome>} />
        <Route path="/tabs/fromScratch" element={<Tabs></Tabs>} />
        <Route path="/tabs/reactLibrary" element={<TabsReactLibrary></TabsReactLibrary>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
