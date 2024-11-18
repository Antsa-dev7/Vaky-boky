import { useContext } from "react";
import "./NavBar.css";
import { SidebarContext } from "../../Context/sidebarContext";
import { iconsImgs } from "../../utils/images";

const ContentTop = () => {
    const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top">
        <div className="content-top-left">
            <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar()}>
              <img src={ iconsImgs.menu } alt = ""/>
            </button>          
        </div>
    </div>
  )
}

export default ContentTop