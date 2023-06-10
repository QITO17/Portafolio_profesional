import bajo from '../imgs/bajo.jpg'

const Contact = () => {
  return (
    
    <div>
      
      <div className='p-1'>
        <div className=' absolute left-0 bottom-0 right-0 top-[0px] -z-20 '>
        <img className='w-full h-full' src={bajo} alt="" />
        </div>
        
        <form className='border-white border-2 max-w-[600px] min-h-[400px] flex gap-7 flex-col justify-center items-center m-auto bg-blue-200 bg-opacity-90 '>

          <div className='flex gap-2 min-w-[251px] justify-between items-center'>
            <label className='text-black font-bold' htmlFor="">Nombre</label>
            <input className='border-2 border-black rounded-[20px] text-black min-w-[180px]' type="text" />
          </div>

          <div className='flex gap-2 min-w-[251px] justify-between items-center'>
            <label className='text-black font-bold' htmlFor="">Apellido</label>
            <input className='border-2 border-black rounded-[20px] text-black min-w-[180px]' type="text" />
          </div>

          <div className='flex gap-2 min-w-[251px] justify-between items-center'>
            <label className='text-black font-bold' htmlFor="">Email</label>
            <input className='border-2 border-black rounded-[20px] text-black min-w-[180px]' type="email" />
          </div>

          <div className='flex gap-2 min-w-[251px] justify-between items-center'>
            <label className='text-black font-bold' htmlFor="">Fecha</label>
            <input className='border-2 border-black rounded-[20px] text-black min-w-[180px]' type="date" />
          </div>
          <button className='border-blue-500 border-2 w-[130px] p-3 rounded-md duration-300 hover:bg-blue-400 hover:text-black font-bold '>Enviar</button>
        </form>
      </div>
      
     

    </div>
  )
}

export default Contact