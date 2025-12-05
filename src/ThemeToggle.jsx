import React from 'react'
import { useState,useEffect } from 'react'

const ThemeToggle = () => {
    const [theme,setTheme]=useState('light');
    useEffect(()=>{
        document.documentElement.setAttribute("data-bs-theme",theme);
        document.documentElement.style.setProperty('--theme-color',theme==='light'?'#ffffff':'#212529');
        console.log(document.body);
    },[theme])

    const toggleTheme=()=>{
        setTheme(theme==='light'?'dark':'light');
    }


  return (
    <div><button className='btn btn-secondary' onClick={()=>{toggleTheme()}}>{theme}</button></div>
  )
}

export default ThemeToggle