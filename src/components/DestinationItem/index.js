// Write your code here
import './index.css'

const DestinationItem = props => {
  const {eachDestinationDetails} = props
  const {imgUrl, name} = eachDestinationDetails

  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="image" />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem
