
import './App.css';
import './style/fonts.css'
import Navbar from './componets/navbar';
import Hero from './componets/hero';
import Card from './componets/card';
import data from './componets/data'

function App() {
  const bnbData = data.map(card => {
    return (
      <Card
        key={card.id}
        {...card}
      />
    )
  })

  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        <Hero />
        <div className='card--container'>
          {bnbData}
        </div>
      </div>
    </div>
  );
}



export default App;
