import './index.css'

const DestinationItem = props => {
  const {destinationList} = props
  const {imgUrl, name} = destinationList
  return (
    <li className="list-container">
      <img src={imgUrl} alt={name} className="list-img" />
      <h1 className="list-heading">{name}</h1>
    </li>
  )
}

export default DestinationItem
