import React from 'react'
import HabitCard from './components/HabitCard'

const Home = () => {
  return (
    <div>
      <h1>Hello Worldss</h1>
      <div className="flex gap-4">
        <HabitCard />
        <HabitCard />
      </div>
    </div>
  )
}

export default Home