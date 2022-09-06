import React, { useContext as UseContext } from 'react'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../context'

import './toogle.css'
const toogle = () => {
  const theme = UseContext(themeContext);
  const darkMode = theme.state.darkMode;
  const toogleHandle = ()=>{
    theme.dispatch({type:'toogle'})
  }

  return (
    <div className='toogle' onClick={toogleHandle}>
        <Moon />
        <Sun/>
        <div className="t-button"
        style={darkMode? {left: '2px'}: {right: '2px'}}
        >
           
        </div>
    </div>
  )
}

export default toogle