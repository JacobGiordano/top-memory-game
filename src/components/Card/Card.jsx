import "./Card.css";

function Card({ characterData }) {
  const imageUrl = `${characterData.thumbnail.path}.${characterData.thumbnail.extension}`;
  return (
    <div className='character-card'>
      <img
        src={imageUrl}
        alt={characterData.name}
        className='character-card-image'
      />
      <div className='character-card-name'>{characterData.name}</div>
    </div>
  );
}
export default Card;
