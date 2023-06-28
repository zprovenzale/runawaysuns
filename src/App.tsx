import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ViteReactHome from './components/Default/ViteReactHome'
import Tabs from './components/TabsFromScratch/TabsFromScratch'
import TabsReactLibrary from './components/TabsFromReactLibrary/TabsFromReactLibrary'
import TabsMaterialUI from './components/TabsFromMaterialUI/TabsMaterialUI'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViteReactHome></ViteReactHome>} />
        <Route path="/tabs/fromScratch" element={<Tabs></Tabs>} />
        <Route path="/tabs/reactLibrary" element={<TabsReactLibrary></TabsReactLibrary>} />
        <Route path="/tabs/materialUI" element={<TabsMaterialUI index={0} value={0}></TabsMaterialUI>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
