import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
     <Card user='Aman' age={38} img='https://images.unsplash.com/photo-1628563694622-5a76957fd09c?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D' />
     <Card user='Sarthak' age={28} img='https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D' />
     <Card user='aditya' age={28} img='https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D' />
     <Card user='Aniket' age={18} img='https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' />
     <Card user='Vivek' age={18} img='https://plus.unsplash.com/premium_vector-1711987375329-6babe1ec0351?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D' />
     <Card user='Ankita' age={21} img='https://plus.unsplash.com/premium_vector-1724386569020-91314456a5f4?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

    </div>
  )
}

export default App
