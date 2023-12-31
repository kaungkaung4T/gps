import React, {useEffect, useState, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
// import DeckGL from '@deck.gl/react'
// import {LineLayer} from '@deck.gl/layers'
import { Map, Marker } from "pigeon-maps"




function App() {


  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const inputRef = useRef()

  useEffect(fun, [])

  function fun () {
    fetch("/db")
    .then(res => res.json())
    .then(d => setData(d))
  }

  function submit (e) {
    // e.preventDefault();
    axios.post("/create", {name})
    .then( (data) => {
      console.log(data)
      window.location.reload();
    })
    .catch(err => console.log(err))
    window.location.reload();
  }





  return (

    <div>


      <br></br>
      <br></br>
      <br></br>

      <div style={{width: "170px", margin: "auto"}}>
        <form onSubmit={submit}>

          <label>Name</label>
          {/* <input type='text' className='form-control' onChange={e => setName(e.target.value)} style={{width: "270px", marginBottom: "20px", marginTop: "10px"}} /> */}
          <input type='file' accept='video/*' className='form-control' onChange={ () => setName(inputRef.current.files[0].name)} ref={inputRef} style={{width: "270px", marginBottom: "20px", marginTop: "10px"}} required />
          <label class='form-text' style={{marginBottom: "14px"}}>Need to refresh after submit.</label><br></br>
        <button className="btn btn-sm btn-primary">SUBMIT</button>

        </form>
        </div>

        <br></br>
      <br></br>


      <div style={{width: "470px", margin: "auto"}}>
        { 
      data.map((d, i) => (

        <Map key={i} height={300} defaultCenter={[d.latitude, d.longitude]} defaultZoom={5}>
      <Marker width={50} anchor={[d.latitude, d.longitude]} />
    </Map>

      ))
      }
      </div>


        <div style={{width: "170px", margin: "auto"}}>

{/* {JSON.stringify(data)} */}
      {/* {data.name} */}
      <br></br>
      <br></br>
      <br></br>
      {/* {data.work} */}


      { 
      data.map((d, i) => (
        <p key={i}>

          {d.name}<br></br>
          {d.latitude}<br></br>
          {d.longitude}<br></br>
        
        </p>

      ))
      }
    
    </div>



    </div>
  )
}


export default App
