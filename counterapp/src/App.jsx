import { useState } from 'react'
import './App.css'

function App() {

  let [counter , setcounter ] = useState(0) ;

  let addvalue = () => {
    if (counter >= 20){
    setcounter(counter) ;
    }else {
        setcounter(counter + 1 ) ;
    }
  }

  let removevalue = () => {
    if(counter <= 0) {
      setcounter(counter) ;
     } else {
        setcounter(counter - 1 ) ;
    }
  }
  

  return (
    <>

    <h1>Counter app 0 To 20</h1>
    <p>Counter : {counter} </p>
    <div>
      <button onClick={addvalue}>add value</button>
      <button onClick={removevalue}>remove value</button>
    </div>
    </>
  )
}

export default App
