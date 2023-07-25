import { AboutCourseTypes } from "../types/types"
import '../styles/course.css'

export const Course: React.FC<AboutCourseTypes> = ({ image, title, description, schedules, startingDate, teacher, sesions, cost }) => {
  
  return (
    <div className="course">
    <img src={image.src} alt={image.alt} className="course_image" />
    <div className="course_details">
      <h2 className="course_title">{title}</h2>
      <p>{description}</p>
      <p>Horario: {schedules}, inicia el {startingDate}</p>
      <p>Imparte: {teacher}</p>
      <p>Duración: {sesions} sesiones</p>
      <p><strong>Costo: ${cost} mxn</strong></p>
      <button>Añadir al carrito</button>
    </div>
  </div>
  )
}