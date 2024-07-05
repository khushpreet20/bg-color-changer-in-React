import { useState } from "react"
import Component from "./Color"
function addColor(){
    // <Component/>
    // console.log('hi')
}
function App() {
  const [color, setColor] = useState("indigo")

  return (
    <div className="w-full h-screen absolute flex justify-center flex-wrap" 
      style= {{backgroundColor: color, alignItems: "center", boxSizing: "border-box", flexDirection: 'column' }}
    >
      <div className="fixed w-20 h-2/3 right-20 rounded-md flex justify-evenly p-2 text-white" 
      style={{border: 1.5 || solid || "white", backgroundColor: "#dbae8e", flexDirection: "column", alignItems: "center"}}>

        <button onClick = {() => setColor('black')} 
        className="w-full h-1/4 m-1 rounded-xl flex justify-center"
        style={{border: 1 || solid || "black", alignItems:"center", backgroundColor: "black"}}>
          Black
        </button>
        <button onClick = {() => setColor('green')} 
        className="w-full h-1/4 m-1 rounded-xl flex justify-center"
        style={{border: 1 || solid || "black", alignItems:"center", backgroundColor: "green"}}>
          Green
        </button>
        <button onClick = {() => setColor('brown')} 
        className="w-full h-1/4 m-1 rounded-xl flex justify-center"
        style={{border: 1 || solid || "black", alignItems:"center", backgroundColor: "Brown"}}>
          Brown
        </button>
        <button onClick = {() => setColor('pink')} 
        className="w-full h-1/4 m-1 rounded-xl flex justify-center"
        style={{border: 1 || solid || "black", alignItems:"center", backgroundColor: "pink"}}>
          Pink
        </button>
        <button onClick = {() => setColor('aqua')} 
        className="w-full h-1/4 m-1 rounded-xl flex justify-center"
        style={{border: 1 || solid || "black", alignItems:"center", backgroundColor: "aqua"}}>
          Aqua
        </button>
        <div className="w-full h-1/4 m-1 rounded-xl flex justify-center"
          style={{backgroundColor: 'white', alignItems: 'center'}}>
          <button onClick={addColor}
          className="w-1/2 h-1/2 m-1 rounded-xl flex justify-center bg-cover bg-center" id="adder"
            style={{alignItems:"center"}}>
          </button>
        </div>
      </div>
      <button onClick={() => setColor('indigo')}
      className="h-12 w-20 relative top-72 rounded-md"
      style={{backgroundColor: "white"}}>
        Reset
      </button>
    </div>
    
  )
}

export default App
