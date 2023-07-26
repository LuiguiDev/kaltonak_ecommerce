import '../styles/home.css'

export const Home = () => {
  return(
    <section className="home" id='Inicio'>
      <img 
        src="./src/images/home_image.jpg"
        className='home_image' 
      />
      <div className="about">
        <h2>Aprende el tlahtolli mesoamericano en Kaltonak</h2>
        <h3>Cursos, conferencias, lecturas del día (tonalli) y más.</h3>
      </div>
    </section>
  )
}