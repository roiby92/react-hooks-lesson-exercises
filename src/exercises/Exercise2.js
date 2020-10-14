import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Exercise2() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5')
      .then((res) => {
        const users = res.data.results.map(u => {
          return {
            name: `${u.name.title} ${u.name.first} ${u.name.last}`,
            img: u.picture.medium
          }
        })
        setUsers(users)
      })
      .catch(e => console.log(e))
  }, [])

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {users.map(u => <div><img src={u.img} /> <div>{u.name}</div></div>)}
      </div>
    </div>
  )
}
// kfirjz@gmail.com
// https://www.serverless.com/blog/node-rest-api-with-serverless-lambda-and-dynamodb
// https://docs.aws.amazon.com/lambda/latest/dg/with-ddb-example.html
// https://docs.aws.amazon.com/lambda/latest/dg/with-sns.html
