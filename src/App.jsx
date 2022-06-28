import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Employees from './pages/Employees'
import Providers from './pages/Providers'
import Equipment from './pages/Equipment'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='employees' element={<Employees />} />
          <Route path='providers' element={<Providers />} />
          <Route path='equipment' element={<Equipment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
