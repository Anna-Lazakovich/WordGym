import './Card.css';

function Card(props) {
    return (
      <div className="card">
        <header>Question</header>
        <div className="card__body">
          <h3>{props.title}</h3>       
          <p>{props.description}</p>
        </div>    
      </div>
    );
  }
  
  export default Card;