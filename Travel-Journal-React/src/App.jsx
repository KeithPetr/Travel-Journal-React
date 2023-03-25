import React from "react"
import Header from "./Header.jsx"
import Card from "./Card.jsx"
import data from './data.js';

export default function App() {
  const cards = data.map(card => {
    return (
        <Card
            {...card}
        />
    )
})
  return (
    <div className="app-container">
      <Header />
      {cards}
    </div>
  )
}

