import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {

  const location = useLocation()
  const currentURL = location.pathname

  return (
    <div className='md:flex md:min-h-screen'>
      <div className='md:w-1/4 bg-gray-900 px-5 py-10'>
        <Link 
          to='' 
          className='text-5xl md:text-2xl lg:text-3xl font-black text-indigo-300 hover:text-indigo-400'
        >
          <img 
            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-architecture-3d-printing-flaticons-lineal-color-flat-icons.png"
          />
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
        </nav>
      </div>
      <div className='md:w-3/4 p-10 md:h-screen md:overflow-scroll'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
