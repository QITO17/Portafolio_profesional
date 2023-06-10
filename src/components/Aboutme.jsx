import agua from '../video/agua.mp4'

const Aboutme = ({ showAboutme }) => {
  return (
    <div>
      <div>
          <video autoPlay muted loop className='vii' >
            <source  src={agua} type="" />
          </video>
        </div>
        <div className="floating-element"></div>
        <div>
        <div className={ `max-w-2xl mx-auto about-me-container  bg-white p-8 rounded-lg my-2 ${showAboutme ? 'invisible':'block'}` } >
          <h1 className="text-3xl font-bold mb-4">Sobre mí</h1>
          <p className="text-lg mb-4">
            Como desarrollador, poseo una determinación incansable para enfrentar desafíos y superar obstáculos. Mi compromiso con la excelencia y la búsqueda constante de soluciones innovadoras me ha permitido destacar como un profesional altamente aplicado. Mi enfoque centrado en resultados se combina con una pasión por el desarrollo de software de alta calidad, lo que me impulsa a alcanzar niveles sobresalientes de eficacia en cada proyecto que abordo. 😊🚀
          </p>
          <p className="text-lg mb-4">
            Mi enérgico y metódico enfoque de trabajo me ha permitido optimizar procesos y maximizar la productividad en cada etapa del ciclo de desarrollo. Mi habilidad para analizar problemas de manera rápida y precisa me permite identificar soluciones efectivas, asegurando la entrega puntual de productos funcionales y de alto rendimiento. 💪💡
          </p>
          <p className="text-lg mb-4">
            Además de ser un desarrollador aplicado y enfocado, mi capacidad para colaborar de manera efectiva en equipos multidisciplinarios es una de mis fortalezas principales. Me adapto fácilmente a nuevas tecnologías y entornos de desarrollo, y mi disposición para aprender y crecer continuamente me ayuda a mantenerme actualizado en un campo en constante evolución. 🤝📚
          </p>
          <p className="text-lg mb-4">
            Mi historial probado de éxitos en el desarrollo de aplicaciones eficientes y escalables demuestra mi capacidad para traducir ideas complejas en soluciones pragmáticas y de alto impacto. Mi pasión por la mejora continua y la entrega de productos de calidad me impulsa a establecer altos estándares y a buscar constantemente nuevas formas de optimizar y mejorar mi trabajo. ✨📈
          </p>
          <p className="text-lg">
            En resumen, como desarrollador, me destaco por mi aplicada eficacia y productividad. Mi enfoque resuelto, mi habilidad para trabajar en equipo y mi constante deseo de superación me convierten en un profesional altamente valioso en la industria del desarrollo de software. 🏆💻
          </p>
          </div>
      </div>
    </div>
  )
}

export default Aboutme