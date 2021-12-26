import Header from './components/Header'
// import Footer from './components/Footer'
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
      {/* <Footer /> */}
    </div>
  )
}

export default App
