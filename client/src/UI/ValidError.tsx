import React from 'react'

type Props = {
    errorsObject: object | undefined,
    errorsMessage: string | undefined,
    class?: string 
}

const ValidError = (props: Props) => {
  return (
    <div style={{height: '20px'}} className={props.class}>
        {props.errorsObject && <div style={{color: 'red'}}>{props.errorsMessage}</div>}
    </div>
  )
}

export default ValidError