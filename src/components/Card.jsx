import cardStyle from '../styles/card.module.css'

const Card = ({artist, song}) => {
  return (
    <div className={cardStyle.cardContainer}>
      <h1>Buena elección de canción</h1>
      <p>Guardaremos {song} en la lista de tus canciones favoritas de {artist}</p>
    </div>
  )
}

export default Card;