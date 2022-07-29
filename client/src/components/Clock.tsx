import React, { FC, useEffect, useState } from 'react'


const Clock: FC = () => {

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