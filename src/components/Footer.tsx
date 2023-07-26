import '../styles/footer.css'

export const Footer = () => {
  return(
    <footer id='Contacto'>
      <div className='footer_content'>
        <div className="footer_logo">
          <img
            src="./src/images/icon.jpg"
            alt="Icono de kaltonak"
            className='kaltonak_icon' />
          <h2 className='kaltonak_name' >KALTONAK</h2>
        </div>
        <div className="contact">
          <a href="https://www.facebook.com/profile.php?id=100064374721066">Facebook</a>
          <a href="https://www.instagram.com/kaltonak/">Instagram</a>
          <a href="mailto:kaltonak.sesipak@gmail.com">Correo</a>
        </div>
      </div>
      <p className='footer_disclaimer'>Kaltonak 2023</p>
    </footer>

  )
}