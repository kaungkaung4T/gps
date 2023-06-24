import React, {useEffect, useState} from 'react'

function App() {

  const [data, setData] = useState([])

  useEffect(fun, [])

  function fun () {
    fetch("/home")
    .then(res => res.json())
    .then(d => setData(d))
  }

  return (

    <div>

      {data.name}
      <br></br>
      <br></br>
      <br></br>
      {data.work}



    </div>
  )
}


export default App
