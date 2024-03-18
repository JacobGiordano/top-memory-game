import "./Card.css";

function Card({ characterData }) {
  const imageUrl = `${characterData.thumbnail.path}.${characterData.thumbnail.extension}`;
  return (
    <div className='character-card'>
      <img src={imageUrl} alt={characterData.name} className='card-image' />
      <div className='character-name'>{characterData.name}</div>
    </div>
  );
}
export default Card;
