
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router'
import ContextProvider from '../context/CoachingContext'

function Index() {
  return (
    <div className='max-w-[1500px] mx-auto' >
    <ContextProvider>
      <NavBar />
      <Outlet />
      <Footer />
    </ContextProvider>
    </div>
  )
}

export default Index
