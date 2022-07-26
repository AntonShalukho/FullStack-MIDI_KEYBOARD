import React, { useEffect, useState } from 'react'

type Props = {}

const Clock = (props: Props) => {

    const [clock, setClock] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        let clock = clockInterval()
        return () => {clearInterval(clock)}
    })

    function clockInterval() {
        return setInterval(() => setClock(new Date().toLocaleTimeString()), 1000);
    }


  return (
    <div className="clock">{clock}</div>
  )
}

export default Clock