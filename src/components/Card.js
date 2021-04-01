import './Card.css';

const Card = ({data}) => {
  return (
    <div className="card">
      <h3> {data.type} </h3>
      <h1><small>$</small> {data.price} </h1>
      {data.features.map(feature => (
        <p key={feature.toString()}> {feature} </p>
        ))
      }
      <button>Learn More </button>
    </div>
  );
}
 
export default Card;