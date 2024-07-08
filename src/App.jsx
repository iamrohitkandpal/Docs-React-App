// eslint-disable-next-line no-unused-vars
import React from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'

const App = () => {
  
  return (
    <div className='w-full relative h-screen bg-zinc-800'>
      <Background />
      <Foreground />
    </div>
  )
}

export default App