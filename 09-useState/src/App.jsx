import { useState } from "react"

const App = () => {

     const [num, setnum] = useState(0)
     function increaseNum(){
        setnum(num+1)
        
     }

     function decreaseNum(){
        setnum(num-1)
       
     }
      function JumpF(){
        setnum(num+5)
       
     }
      function DeJumpF(){
        setnum(num-5)
       
     }
      function Zero(){
        setnum(0)
       
     }
     
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={Zero}>Zero</button>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={JumpF}>+5</button>
      <button onClick={DeJumpF}>-5</button>
    </div>
  )
}

export default App