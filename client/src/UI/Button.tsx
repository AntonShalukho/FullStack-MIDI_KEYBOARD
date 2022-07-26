import React from 'react'

type Props = {
    buttClass: string,
    text: string,
    toggle?: () => void
}

const Button = (props: Props) => {
  return (
    <div className={props.buttClass} onClick={() => props.toggle?.()}>{props.text}</div>
  )
}

export default Button