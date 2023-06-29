import { useState } from 'react'
import rosca from '../imgs/rosca.png'
import { Link } from 'react-router-dom'
const Header = ({ setShowAboutme }) => {
    const [showMenu, setShowMenu] = useState(false)
    const changeState = () =>{
        setShowMenu(!showMenu);
        setShowAboutme(!showMenu)
    }
  return (
    <div>
        <div className='flex justify-between p-1 items-center'>
            <div className='w-[100px]'>
                <Link to="/" ><img className='w-full' src={rosca} alt="" /></Link>
            </div>

            <div>
                <div className=' z-10 relative '>
                {showMenu ? <i className='bx bx-x  z-10 text-white text-[40px] ' onClick={changeState}></i> : <i className='bx bx-menu  text-white text-[40px] ' onClick={changeState}></i>}
                </div>
               
                <ul  className={`z-0 text-[1.3rem] font-semibold flex items-center justify-center w-screen h-screen flex-col duration-300 absolute ${showMenu ? 'bottom-[0%]':'bottom-[100%]'} right-0 gap-4  bg-blue-200 opacity-[95%]`}> 
                    <Link to="/" onClick={changeState}>Home</Link>
                    <Link to="/aboutme" onClick={changeState}>About Me</Link>
                    <Link to="/projects" onClick={changeState}>Projects</Link>
                    <Link to="/contact" onClick={changeState}>Contact</Link>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Header