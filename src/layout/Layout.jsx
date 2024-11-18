import { Outlet } from 'react-router-dom';
import '../App.css';
import Sidebar from '../components/Sidebar/SideBar';
import NavBar from '../components/navBar/NavBar'


const Layout = () => {

  return (
    <div className='app'>
      <Sidebar />
      <div className='content'>
        <NavBar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout