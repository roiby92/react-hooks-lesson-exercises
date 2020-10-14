import React, { useState } from 'react'

export default function Exercise1() {
  // your code here

  const [user, setUser] = useState({ name: '', city: '', country: '' })

  const handleChange = event => {
    const {name,value}= event
    setUser({...user,[name]:value})
  }

  const countries = ['united states', 'china', 'united kingdom', 'australia']
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <input type='text' name="name" value={user.name} onChange={e => handleChange(e.target)} />
        <input type='text' name="city" value={user.city} onChange={e => handleChange(e.target)} />
        <select name="city" value={user.city} onChange={e => handleChange(e.target)}>
          {countries.map(c => <option>{c}</option>)}
        </select>
      </div>
    </div>
  )
}