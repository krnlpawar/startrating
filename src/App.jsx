import { useState } from 'react'
import './App.css'

function App() {
  const [rating, setRating] = useState(0)

  const handleRating = (e) => {
    setRating(e.target.dataset.rating)
  }

  return (
    <>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          return <span className={index < rating ? 'star rated' : 'star'} data-rating={index + 1} onClick={handleRating}>&#9733;</span>
        })}
      </div>
    </>
  )
}

export default App
