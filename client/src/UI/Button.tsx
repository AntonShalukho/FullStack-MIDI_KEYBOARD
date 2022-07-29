import React, { Children } from 'react'
import { RouteObject } from 'react-router-dom'

type Props = {
    buttClass: string,
    text: string,
    children?: RouteObject,
    toggle?: () => void
}

const Button = (props: Props) => {
  return (
    <div className={props.buttClass} onClick={() => props.toggle?.()}>{props.text}</div>
  )
}

export default Button