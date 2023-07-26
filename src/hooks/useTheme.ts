import { theme_type } from '../types and consts/types'
import { useEffect, useState } from 'react'

export function useTheme() {
  const body = document.querySelector('body')
  const getLocalStorege = localStorage.getItem('theme') as theme_type
  const [theme, setTheme] = useState(getLocalStorege)

  function changeTheme(theme: theme_type) {
    setTheme(theme)
    body?.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }
  
  useEffect(() => {
    if (!getLocalStorege) {
      changeTheme('dark')
      return
    }
    changeTheme(theme)
  }, [])

  return {changeTheme, theme}
}