import {useState} from 'react'
import jsonData from './components/Data.json'
import './App.css';

import Pricing from './components/Pricing';
import Card from './components/Card';

const App = () => {

  const [cardData, setCardData] = useState(jsonData)
  const [isAnnual, setIsAnnual] = useState(true)
  
  return (
    <div className="container">
      <Pricing 
      setCardData={setCardData} 
      setIsAnnual={setIsAnnual} 
      isAnnual={isAnnual}
      />
      <div className="card-container">
        {cardData.map(data => (
          <Card key={data.id} data={data}/>
        ))}
      </div>
    </div>
   
  );
}

export default App;