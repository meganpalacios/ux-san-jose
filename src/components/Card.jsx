export default function Card({ title, description, imgUrl, link }) {
  return (
    <div>
      <div>
        <img src={imgUrl} alt={title} />
        <h3>{title}</h3>
      </div>
      <div>
        <p>{description}</p>
        <a href={link}>Saber más</a>
      </div>
    </div>
  )
}