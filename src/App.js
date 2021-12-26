import Header from './components/Header'
import Card from './components/Card'

import './App.css'
import data from './data'

function App() {
  const cards = data.map((card) => {
    return <Card key={card.id} {...card} />
  })

  return (
    <div>
      <Header />
      <section>{cards}</section>
    </div>
  )
}

export default App
