import React, { useState } from 'react'

export default function SpotCheck1() {

  const [number, setNumber] = useState(0)
  const increment = () => setNumber(number + 1)
  const sub = () => setNumber(number - 1)

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
        <div>{number}</div>
        <button onClick={increment}>Inc</button>
        <button onClick={sub}>Sub</button>

      </div>
    </div>
  )
}