import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

function App() {

  const [data, setData] = useState([])
  const [name, setName] = useState('')

  useEffect(fun, [])

  function fun () {
    fetch("/db")
    .then(res => res.json())
    .then(d => setData(d))
  }

  function submit (e) {
    // e.preventDefault();
    axios.post("/create", {name})
    .then(res => console.log(res.json()))
    .catch(err => console.log(err))
  }


  return (

    <div style={{width: "170px", margin: "auto"}}>
      <br></br>
      <br></br>
      <br></br>


        <form onSubmit={submit}>
          <label>Name</label>
          <input type='text' className='form-control' onChange={e => setName(e.target.value)} style={{width: "270px", marginBottom: "20px", marginTop: "10px"}} />
          <input type='file' accept='video/*' className='form-control' onChange={e => setName(e.target.value)} style={{width: "270px", marginBottom: "20px", marginTop: "10px"}} required />
        <button className="btn btn-sm btn-primary">SUBMIT</button>
        </form>


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
