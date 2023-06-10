import agua from '../video/agua.mp4'
import CardProjects from './CardProjects'
import Footer from './Footer'
const Projects = () => {
  return (
    <div className=''>
      <div>
          <video autoPlay muted loop className='vii'>
            <source src={agua} type="" />
          </video>
        </div>
      <div className='p-1 flex flex-col gap-7'>
            <CardProjects />
            <Footer />
      </div>


      
      
     

    </div>
  )
}

export default Projects