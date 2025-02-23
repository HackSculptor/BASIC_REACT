import { useState } from 'react'
import Button from './button'

function App() {

  let [color,setColor]=useState('olive');

  function change(newcolor){
    setColor(newcolor)
  }
  return (
    <>
      <div className="container" style={{ backgroundColor: color }}>
        <div className="container-2 display" class="flex justify-center items-center h-screen gap-2" >
          <Button onClick={()=> change('red')} color="red" label="red"/>
          <Button  onClick={()=> change('blue')} color="blue" label="blue"/>
          <Button  onClick={()=> change('green')} color="green" label="green"/>

        </div>
      </div>
    </>
  )
}

export default App
