import { useTheme } from '../hooks/useTheme'
import '../styles/home.css'

export const Home = () => {
  const {theme} = useTheme()

  const shadow = theme ? 'shadow' : ''

  return(
    <section className={`home`} id='Inicio'>
      <div className={`home_image ${shadow}`}></div>
      <div className="about">
        <h2>Aprende el tlahtolli mesoamericano en Kaltonak</h2>
        <h3>Cursos, conferencias, lecturas del día (tonalli) y más.</h3>
        <button className='see_courses'><a href="#Cursos">Ver cursos</a></button>
      </div>
    </section>
  )
}