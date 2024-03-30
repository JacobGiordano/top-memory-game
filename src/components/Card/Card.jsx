import "./Card.css";

function Card({ characterData, handleCardClick }) {
  const imageUrl = `${characterData.thumbnail.path}.${characterData.thumbnail.extension}`;
  return (
    <div
      className='character-card'
      data-character-name={characterData.name}
      onClick={handleCardClick}
    >
      <img
        src={imageUrl}
        alt={characterData.name}
        className='character-card-image'
        draggable='false'
      />
      <div className='character-card-name'>{characterData.name}</div>
    </div>
  );
}
export default Card;
