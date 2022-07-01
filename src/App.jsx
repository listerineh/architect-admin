import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Employees from './pages/Employees'
import NewEmployeeForm from './pages/NewEmployeeForm'
import EditEmployeeForm from './pages/EditEmployeeForm'
import Providers from './pages/Providers'
import NewProviderForm from './pages/NewProviderForm'
import EditProviderForm from './pages/EditProviderForm'
import Equipment from './pages/Equipment'
import NewEquipmentForm from './pages/NewEquipmentForm'
import EditEquipmentForm from './pages/EditEquipmentForm'
import Error404 from './pages/Error404'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='employees' element={<Employees />} />
          <Route path='employees/new' element={<NewEmployeeForm />} />
          <Route path='employees/edit/:id' element={<EditEmployeeForm />} />
          <Route path='providers' element={<Providers />} />
          <Route path='providers/new' element={<NewProviderForm />} />
          <Route path='providers/edit/:id' element={<EditProviderForm />} />
          <Route path='equipment' element={<Equipment />} />
          <Route path='equipment/new' element={<NewEquipmentForm />} />
          <Route path='equipment/edit/:id' element={<EditEquipmentForm />} />
        </Route>
        <Route path='*' element={<Error404 />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
