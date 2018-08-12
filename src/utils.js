import React from 'react'
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
