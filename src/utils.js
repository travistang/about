import React from 'react'
import {
  faVuejs,
  faReact,
  faNode,
  faAngular,
  faPython,

} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './style'
export const asPage = (props) => {
    return (
      <div className={props.className} style={{...props.style,...style.page}}>
        {props.children}
      </div>
    )
}
export const myAge = () => {
  return new Date().getFullYear() - 1994
}

export const randomColor = () => {
  const candidates = 'primary,success,danger,warning,info'.split(',')
  return candidates[Math.floor(Math.random() * candidates.length)]
}

export const getTechIconFromName = (name) => {
  switch(name.toLowerCase().trim()) {
    case 'vue': return faVuejs
    case 'react': return faReact
    case 'node': return faNode
    case 'angular': return faAngular
    case 'python': return faPython
    default: return null
  }
}
export const getProgressColor = (val) => {
  if(val >= 90) return 'success'
  if(val >= 50) return 'info'
  if(val >= 30) return 'warning'
  return 'danger'
}
export const getTechBadgeFromName = (name,className = '',badgeStyle = {}) => {
  let icon = getTechIconFromName(name)
  return (
    <span style={badgeStyle} className={`badge ${className}`}>
      {icon &&
        (
          <div  style={{paddingLeft: 4,paddingRight: 4}}>
            <FontAwesomeIcon icon={icon}/>
          </div>
        )
      }
    </span>
  )
}
export const dateToString = (dateString) => {
  let date = new Date(dateString)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  return `${month}/${day}/${year}` // why should month go first!?!?!?
}
