import React, {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState([]);

  useEffect(
    () => {
      fetch("/home")
    
    .then(res => res.json())
    
    .then(d => setData(d))

    }, [])


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
