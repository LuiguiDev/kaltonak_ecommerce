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
          <h3>Contactanos</h3>
          <div className="social_media">
            <a href="https://www.facebook.com/profile.php?id=100064374721066">Facebook</a>
            <a href="https://www.instagram.com/kaltonak/">Instagram</a>
            <a href="mailto:kaltonak.sesipak@gmail.com">Correo</a>
          </div>
        </div>
      </div>
      <p className='footer_disclaimer'>
        <small>Kaltonak 2023 © Derechos reservados.</small>
      </p>
    </footer>

  )
}