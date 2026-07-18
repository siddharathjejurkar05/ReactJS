import React, { useState } from 'react'

const App = () => {

  //  const [num, setnum] = useState({user:'Rishi',age:17})
  const [num, setnum] = useState(10)

  const btnClicked = () => {
    // setnum(num+5)
    // console.log(num);
    //  setnum(num+1)
    //   const newNum = {...num};
    //   newNum.user = 'Aman'
    //   newNum.age = 30;
    // setnum(newNum)
    // const newArr = [...num]
    // newArr.push(99)
    // console.log(newArr);
    // setnum(newArr)

    //  setnum(prev=>({...prev,age:50}))
    // setnum(prev => (prev + 1))
    // setnum(prev => (prev + 1))
    // setnum(prev => (prev + 1))


  }
  return (
    <div>
      {/* <h1>{num.user}, {num.age}</h1> */}
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App