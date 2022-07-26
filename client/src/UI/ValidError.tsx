import React from 'react'

type Props = {
    errorsObject: object | undefined,
    errorsMessage: string | undefined
}

const ValidError = (props: Props) => {
  return (
    <div style={{height: '20px'}}>
        {props.errorsObject && <div style={{color: 'red'}}>{props.errorsMessage}</div>}
    </div>
  )
}

export default ValidError