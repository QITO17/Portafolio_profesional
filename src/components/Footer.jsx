import linke from '../imgs/linke.gif'
import redwat from '../imgs/redwat.gif'
import fac from '../imgs/fac.gif'
import gitt from '../imgs/gitt.gif'


const Footer = () => {
  return (
    <div>
         <div className=' border-t-2 h-96 text-white font-semibold'>
            <div>
                <h2>MIS REDES</h2>
                <ul className='flex flex-col gap-2 p-1'>
                   <a target='_blank' href='https://www.linkedin.com/in/jostin-arley-hurtado-hinestroza-57ab49255/' rel="noreferrer"><li className='flex gap-2 items-center justify-between'> <span>Linkedin</span> <img className='w-[25px]' src={linke} alt="" /> </li></a>
                   <a target='_blank'><li className='flex gap-2 items-center justify-between'> <span>Fcebook</span> <img className='w-[25px]' src={fac} alt="" /> </li></a>
                   <a target='_blank' href='https://github.com/QITO17' rel="noreferrer"><li className='flex gap-2 items-center justify-between'> <span>Github</span> <img className='w-[25px]' src={gitt} alt="" /> </li></a>
                   <a target='_blank' href='https://wa.link/re2bt1' rel="noreferrer"><li className='flex gap-2 items-center justify-between'> <span>Whatsapp</span> <img className='w-[25px]' src={redwat} alt="" /> </li></a>
                </ul>
            </div>
            
        </div> 
    </div>
  )
}

export default Footer