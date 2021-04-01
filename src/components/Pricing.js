import './Pricing.css';
import jsonData from '../components/Data.json'

const Pricing = ({setCardData, setIsAnnual, isAnnual}) => {

  const monthlyCardData = [
    {type: 'Basic', 
    price: 19.99, 
    features: ['500gb Storage', '2 Users Allowed', 'Send up to 3GB'],
    id: 1 },
  
    {type: 'Professional', 
    price: 24.99,
    features: ['1TB Storage', '5 Users Allowed', 'Send up to 10GB'],
    id: 2 },
  
    {type: 'Master', 
    price: 39.99, 
    features: ['2TB Storage', '10 Users Allowed', 'Send up to 20GB'],
    id: 3 }
  ]  

  const handleClick = () => {
    if(isAnnual) {
      setCardData(monthlyCardData)
      setIsAnnual(false)
    }
    else {
      setCardData(jsonData)
      setIsAnnual(true)
    }
  }
 
  return (
    <div className="pricing-container">
      <h1>Our Pricing</h1>
      <div>
        <p>Annually</p>
        <label>
          <input type="checkbox"/>
          <span onClick={handleClick} className='check'></span>
        </label>
        <p>Monthly</p>
      </div>
    </div>
  );
}
 
export default Pricing;