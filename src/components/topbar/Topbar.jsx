// import React, { useState } from 'react'
import './Topbar.scss'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

const Topbar = ({menu, setmenu}) => {

  // const [topbar1, settopbar] = useState(true)

  const menuHandle = () =>{
    setmenu(!menu)
  }
  return (
    <div className={"topbar " + (menu && "active")}  id='topbar'>
        <div className="topbarWrapper">
            <div className="topbarLeft">
                <a href="#intro" className='logo'> DEC_CODER</a>
                <div className="infoContainer">
                  <PersonIcon className='icon'/>
                  <span>+977 3262 652 784</span>
                  <EmailIcon className='icon'/>
                  <span>genius@developer.com</span>

                </div>
            </div>
            <div className="topbarRight">
              <span onClick={menuHandle}><MenuIcon className='menuIcon'/></span>
              <span onClick={menuHandle}><CloseIcon className='menuIcon1'/></span>
            </div>
        </div>
      
    </div>
  )
}

export default Topbar
