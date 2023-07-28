import { AboutCourseTypes } from "../types and consts/types"
import '../styles/course.css'

export const Course: React.FC<AboutCourseTypes> = ({ image, title, description, schedules, startingDate, teacher, sesions, cost }) => {
  
  return (
    <div className="course">
      <img src={image.src} alt={image.alt} className="course_image" />
      <div className="course_details">
        <div className="details">
          <h2 className="course_title">{title}</h2>
          <p>{description}</p>
          <p>Horario: {schedules}, inicia el {startingDate}</p>
          <p>Imparte: {teacher}</p>
          <p>Duración: {sesions} sesiones</p>
        </div>
        <div className="course_addToCart">
          <p><strong>Costo: ${cost} mxn</strong></p>
          <button className="add_toCart_btn" >Añadir al carrito</button>
        </div>
      </div>
    </div>
  )
}