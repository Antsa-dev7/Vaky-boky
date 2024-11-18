import './Sidebar.css';

import { iconsImgs } from '../../utils/images';
import { navigationLinks } from '../../data/data';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { SidebarContext } from '../../Context/sidebarContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const [activeLinkIdx, setActiveLinkIdx] = useState(null);
    const [sidebarClass, setSidebarClass] = useState("");
    const {isSidebarOpen} = useContext(SidebarContext);
    const navigate = useNavigate();
    const location = useLocation(); 

    const handleClick = (value, idx) => {
      setActiveLinkIdx(idx); 
      navigate(value);
    };

    useEffect(() => {
      if(isSidebarOpen){
        setSidebarClass("sidebar-change")
      } else {
        setSidebarClass('');
      }
    }, [isSidebarOpen]);

    useEffect(() => {
      const currentLinkIdx = navigationLinks.findIndex(link => link.value === location.pathname);
      setActiveLinkIdx(currentLinkIdx !== -1 ? currentLinkIdx : null);
    }, [location.pathname]);

  return (
    <div className={ `sidebar ${sidebarClass}` }>
      <div className="user-info">
          <div className="info-img img-fit-cover">
            <img src={ iconsImgs.boky } alt="profile image" />
          </div>
          <span className="info-name">aky boky</span>
      </div>
      <nav className="navigation">
          <ul className="nav-list">
            {
              navigationLinks.map((navigationLink, idx) => (
                <li className="nav-item" key = { navigationLink.id} onClick={() => handleClick(navigationLink.value)} >
                  <a href="#" className={ `nav-link ${idx === activeLinkIdx ? 'active' : null}` }>
                      <img src={ navigationLink.image } className="nav-link-icon" alt = { navigationLink.title } />
                      <span className="nav-link-text">{ navigationLink.title }</span>
                  </a>
                </li>
              ))
            }
          </ul>
      </nav>
    </div>
  )
}

export default Sidebar