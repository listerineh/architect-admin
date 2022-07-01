import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {

  const location = useLocation()
  const currentURL = location.pathname

  return (
    <div className='md:flex md:min-h-screen'>
      <div className='md:w-1/4 bg-gray-900 px-5 py-10'>
        <Link 
          to='' 
          className='text-5xl font-black text-indigo-300 hover:text-indigo-400'
        >
          <h1 className='text-5xl pl-2'>Inicio</h1>
        </Link>

        <div className='bg-white h-0.5 mt-10'></div>
        
        <nav className='mt-10 pl-2'>
          <Link 
            to='/employees' 
            className={`${currentURL === '/employees' ? 'text-indigo-300 font-bold' : 'text-white'}  text-xl block mt-2 hover:text-indigo-200`}
          >Empleados</Link>
          <Link 
            to='/providers' 
            className={`${currentURL === '/providers' ? 'text-indigo-300 font-bold' : 'text-white'}  text-xl block mt-2 hover:text-indigo-200`}
          >Proveedores</Link>
          <Link 
            to='/equipment' 
            className={`${currentURL === '/equipment' ? 'text-indigo-300 font-bold' : 'text-white'}  text-xl block mt-2 hover:text-indigo-200`}
          >Equipos</Link>
        </nav>

        <div className='bg-white h-0.5 mt-10'></div>

        <nav className='mt-10 pl-2'>
          <Link 
            to='/workflow' 
            className={`${currentURL === '/workflow' ? 'text-indigo-300 font-bold' : 'text-white'}  text-xl block mt-2 hover:text-indigo-200`}
          >Flujo de trabajo</Link>
          <Link 
            to='/rentals' 
            className={`${currentURL === '/rentals' ? 'text-indigo-300 font-bold' : 'text-white'}  text-xl block mt-2 hover:text-indigo-200`}
          >Alquileres</Link>
          <Link 
            to='/shopping' 
            className={`${currentURL === '/shopping' ? 'text-indigo-300 font-bold' : 'text-white'}  text-xl block mt-2 hover:text-indigo-200`}
          >Materiales</Link>
        </nav>

        <div className='bg-white h-0.5 mt-10'></div>

        <nav className='mt-10 pl-2'>
          <Link 
            to='/reports' 
            className={`${currentURL === '/reports' ? 'text-indigo-300 font-bold' : 'text-white'}  text-xl block mt-2 hover:text-indigo-200`}
          >Reportes</Link>
        </nav>

      </div>
      <div className='md:w-3/4 p-10 md:h-screen md:overflow-scroll'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
