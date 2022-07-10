import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Employees from './pages/Employees/Employees'
import NewEmployeeForm from './pages/Employees/NewEmployeeForm'
import EditEmployeeForm from './pages/Employees/EditEmployeeForm'
import Providers from './pages/Providers/Providers'
import NewProviderForm from './pages/Providers/NewProviderForm'
import EditProviderForm from './pages/Providers/EditProviderForm'
import Equipment from './pages/Equipment/Equipment'
import NewEquipmentForm from './pages/Equipment/NewEquipmentForm'
import EditEquipmentForm from './pages/Equipment/EditEquipmentForm'
import Workflow from './pages/Workflow/Workflow'
import Rentals from './pages/Rentals/Rentals'
import Shopping from './pages/Shopping/Shopping'
import Reports from './pages/Reports/Reports'
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
