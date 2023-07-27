import { useState, useEffect } from 'react'
import { Course } from './components/Course'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import './styles/app.css'
import { products } from './types and consts/porducts'

export const App = () => {
  const [device, setDivice] = useState<string>('')

  function manageResize () {
    const windowWidth = window.innerWidth
    
    if(windowWidth <= 768) {
      setDivice('mobile')
    }else if(windowWidth > 768) {
      setDivice('desktop')
    }
  }

  window.addEventListener('resize', manageResize)
  useEffect(()=> {
    const initialState = window.innerWidth <= 768 ? 'mobile' : 'desktop'
    
    setDivice(initialState)
  }, [])

  return (
    <>
    <Header device={device} />
    <Home />
    <main className='courses_section' id='Cursos'>
      <h2 className='courses_title'>Cursos 2023</h2>
      <ul className="courses_list">
        {
          products.map(product => (
            <li key={crypto.randomUUID()}>
              <Course
                image={product.image}
                title={product.title}
                description={product.description}
                schedules={product.schedules}
                startingDate={product.startingDate}
                sesions={product.sesions}
                teacher={product.teacher}
                cost={product.cost}
                key={crypto.randomUUID()}
              />
            </li>
          ))
        }
      </ul>
    </main>
    <Footer />
    </>
  )
}