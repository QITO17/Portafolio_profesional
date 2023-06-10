import bart from "../imgs/bart.png";
import homer from "../imgs/homer.png";
import react from "../imgs/react.png";
import agua from "../video/agua.mp4";
import html from "../imgs/html.png";
import css from "../imgs/css.png";
import javascript from "../imgs/javascript.png";
import python from "../imgs/python.png";
import java from "../imgs/java.png";
import git from "../imgs/git.png";
import github from "../imgs/github.png";
import tail from "../imgs/tail.png";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="flex flex-col gap-[25rem] max-w-[1224px] mx-auto ">
      <div>
        <div>
          <video autoPlay muted loop className="vii">
            <source src={agua} type="" />
          </video>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1">
          <div className="text-center max-w-[450px]">
            <h1 className="text-white">
              {" "}
              <span className="text-blue-400 font-bold">Hola!</span> Yo soy
              arley hurtado soy un desarrollador full stack(MERN) con React y
              NodeJs preparado para afrontar y superar los mayores retos de la
              industria, descato por mi creatividad, curiosidad, mis ganas de
              aprender y por mi gran y excelente desempeño en el trabajo en
              equipo, 🏜🏖🛣 mi lema es ´No Busco Ser Un Buen Desarrollador Busco
              Ser El Mejor 👽´
            </h1>
          </div>
          <div className="">
            <img className="floating-element" src={bart} alt="" />
          </div>
        </div>
      </div>

      <div className="text-white text-center flex flex-col gap-3">
        <span className="text-blue-400 font-bold">Objetivos</span>
        <div className="flex flex-row-reverse items-center flex-wrap justify-center">
          <div>
            <div className="flex flex-row-reverse items-center  justify-center">
              <p className="max-w-[450px]">
                Además de ser un desarrollador aplicado y enfocado, mi capacidad
                para colaborar de manera efectiva en equipos multidisciplinarios
                es una de mis fortalezas principales. Me adapto fácilmente a
                nuevas tecnologías y entornos de desarrollo, y mi disposición
                para aprender y crecer continuamente me ayuda a mantenerme
                actualizado en un campo en constante evolución.
              </p>
            </div>
          </div>
          <div>
            <img className="floating-element" src={homer} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        <div className="text-center">
          <span className="text-blue-400 font-bold ">Frases</span>
        </div>
        <div>
          <ul className="text-white flex flex-wrap gap-3 justify-center">
            <li className="max-w-[250px] overflow-hidden rounded-[10px] h-[180px] border-[2px] p-2 text-center">
              El éxito en la programación no se mide por la cantidad de líneas
              de código, sino por la calidad de tus soluciones
            </li>
            <li className="max-w-[250px] overflow-hidden rounded-[10px] h-[180px] border-[2px] p-2 text-center">
              El único error real es aquel del que no aprendes nada. ¡No tengas
              miedo de cometer errores mientras programes!
            </li>
            <li className="max-w-[250px] overflow-hidden rounded-[10px] h-[180px] border-[2px] p-2 text-center">
              La programación es el arte de convertir ideas en realidad a través
              del poder del código.
            </li>
            <li className="max-w-[250px] overflow-hidden rounded-[10px] h-[180px] border-[2px] p-2 text-center">
              No hay atajos en la programación. Solo constancia, paciencia y un
              deseo de aprender constantemente.
            </li>
            <li className="max-w-[250px] overflow-hidden rounded-[10px] h-[180px] border-[2px] p-2 text-center">
              El software es como un organismo vivo: evoluciona, crece y se
              adapta. Sé un programador flexible y abierto al cambio.
            </li>
            <li className="max-w-[250px] overflow-hidden rounded-[10px] h-[180px] border-[2px] p-2 text-center">
              Cada error en el código es una oportunidad para aprender y mejorar
              tus habilidades de programación.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-3 ">
        <div className="text-center">
          <span className="text-red-400 font-bold">Tecnologías</span>
        </div>
        <ul className="text-white flex flex-wrap gap-3 justify-center item floating-element ">
          <li className="max-w-[250px] flex flex-col rounded-[10px] h-[230px] border-[2px]  text-center">
            {" "}
            <img src={react} alt="" /> <span>React</span>{" "}
          </li>
          <li className="max-w-[250px] flex flex-col rounded-[10px] h-[230px] border-[2px]  text-center">
            <img src={html} alt="" /> <span>HTML</span>
          </li>
          <li className="max-w-[250px] flex flex-col rounded-[10px] h-[230px] border-[2px]  text-center">
            <img src={css} alt="" /> <span>CSS</span>
          </li>
          <li className="max-w-[250px] flex flex-col rounded-[10px] h-[230px] border-[2px]  text-center">
            <img src={javascript} alt="" /> <span>javascript</span>
          </li>
          <li className="max-w-[250px] flex flex-col rounded-[10px] h-[230px] border-[2px]  text-center">
            <img src={python} alt="" /> <span>Python</span>
          </li>
          <li className="max-w-[250px] flex flex-col rounded-[10px] h-[230px] border-[2px]  text-center">
            <img src={java} alt="" /> <span>Java</span>
          </li>
          <li className="max-w-[250px] flex flex-col rounded-[10px] h-[230px] border-[2px]  text-center">
            <img src={git} alt="" /> <span>Git</span>
          </li>
          <li className="max-w-[250px] flex flex-col rounded-[10px] h-[230px] border-[2px]  text-center">
            <img src={github} alt="" /> <span>Github</span>
          </li>
          <li className="max-w-[250px] flex flex-col rounded-[10px] h-[230px] border-[2px]  text-center">
            <img src={tail} alt="" /> <span>Tailwindcss</span>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
