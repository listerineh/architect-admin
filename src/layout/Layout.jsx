import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {

  const location = useLocation()
  const currentURL = location.pathname

  return (
    <div className='md:flex md:min-h-screen'>
      <div className='md:w-1/4 bg-gray-900 px-5 py-10'>
        <Link 
          to='' 
          className='text-5xl md:text-2xl font-black text-indigo-300 hover:text-indigo-400'
        >
          <div className='flow-root'>
            <div className='float-left'>
              <img 
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-architecture-3d-printing-flaticons-lineal-color-flat-icons.png"
              />
            </div>
            <div className="float-right">
              <h1 className='md:text-2xl text-xl mt-5'>Administración</h1>
            </div>
          </div>
        </Link>
        
        <nav className='mt-10'>
          <Link 
            to='/employees' 
            className={`${currentURL === '/employees' ? 'text-indigo-300' : 'text-white'}  text-2xl block mt-2 hover:text-indigo-200`}
          >Empleados</Link>
          <Link 
            to='/providers' 
            className={`${currentURL === '/providers' ? 'text-indigo-300' : 'text-white'}  text-2xl block mt-2 hover:text-indigo-200`}
          >Proveedores</Link>
          <Link 
            to='/equipment' 
            className={`${currentURL === '/equipment' ? 'text-indigo-300' : 'text-white'}  text-2xl block mt-2 hover:text-indigo-200`}
          >Equipos</Link>
        </nav>
      </div>
      <div className='md:w-3/4 p-10 md:h-screen md:overflow-scroll'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
