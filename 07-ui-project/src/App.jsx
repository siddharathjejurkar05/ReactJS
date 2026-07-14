import Section1 from "./components/Section1/Section1"

const App = () => {
  const users = [
    {
      img:'https://i.pinimg.com/736x/1b/4d/df/1b4ddf8afc6c280795f0607148fefee9.jpg',
      intro:'Prime Customer,that have access to back credit and are satisfed with the current product',
      color:'blue',
      tag:'Satisfied'
    },
    {
      img:'https://i.pinimg.com/736x/19/a2/cb/19a2cb248436651b1ec7166472b1a1d5.jpg',
      intro:'Prime Customer,that have access to back credit and are Not satisfed with the current product',
      color:'green',
      tag:'Underserved'
    },
    {
      img:'https://i.pinimg.com/1200x/d7/d3/6c/d7d36c309f73aab2cf4d3513cb9b1711.jpg',
      intro:'Customer from near-prime and sub-prime segment with no access to bank credit',
      color:'pink',
      tag:'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App