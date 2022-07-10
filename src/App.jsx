import { useState, useEffect } from 'react'
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
import Workflow from './pages/Workflow'
import Rentals from './pages/Rentals'
import Shopping from './pages/Shopping'
import Reports from './pages/Reports'
import Error404 from './pages/Error404'

function App() {

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Layout theme={theme} handleThemeSwitch={handleThemeSwitch}/>} >
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
          <Route path='workflow' element={<Workflow />} />
          <Route path='rentals' element={<Rentals />} />
          <Route path='shopping' element={<Shopping />} />
          <Route path='reports' element={<Reports />} />
        </Route>
        <Route path='*' element={<Error404 />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
