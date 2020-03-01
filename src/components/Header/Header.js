import React, {useState} from 'react'
import './Header.css'

const Header = props => {
  const [active, setActive] = useState(false)
  
  return (
    <>
      <div className='mobile-header' >
        <div className='Header' >
          <h2 className='HeaderTitle' >look at 'em</h2>
          <button className='Menu' >
            <div onClick={() => setActive(!active)} >menu</div>
            <img src='https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png' />
          </button>
        </div>

        <div className={active ? 'Dropdown visible' : 'Dropdown hidden'} >
          <div className='DropdownItem' >services</div>
          <div className='DropdownItem' >portfolio</div>
          <div className='DropdownItem' >about</div>
          <div className='DropdownItem' >team</div>
          <div className='DropdownItem' >contact</div>
        </div>
      </div>


      <div className='desktop-header' >
        <div className='Header' >
          <h2 className='HeaderTitle' >look at 'em</h2>
          <div className='HeaderLinks' >
            <div className='HeaderItem' >services</div>
            <div className='HeaderItem' >portfolio</div>
            <div className='HeaderItem' >about</div>
            <div className='HeaderItem' >team</div>
            <div className='HeaderItem' >contact</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header