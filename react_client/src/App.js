import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [data, setData] = useState([])

  useEffect(fun, [])

  function fun () {
    fetch("/db")
    .then(res => res.json())
    .then(d => setData(d))
  }

  return (

    <div>

<button className="btn btn-sm btn-primary">SUBMIT</button>

{/* {JSON.stringify(data)} */}
      {/* {data.name} */}
      <br></br>
      <br></br>
      <br></br>
      {/* {data.work} */}


      {
      data.map((d, i) => (
        <p key={i}>{d.name}</p>
      ))
      }


    </div>
  )
}


export default App
