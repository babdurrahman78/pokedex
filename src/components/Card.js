import './Card.css';

const Card = ({poke, index}) => {
    return ( 
        <a href="#" className="card">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
              alt={poke.name}
            />
            <p><b>{poke.name}</b></p> 
          </a>
     );
}
 
export default Card;