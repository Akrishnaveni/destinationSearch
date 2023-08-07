import "./index.css"

class DestinationItem = props=>{
const {destinationDetails}=props
cont {id, name,imgUrl}=destinationDetails
return (
    <li className="destination-card-container">
        <img src={imgUrl} alt={name} className="image"/>
        <p className="description">{name}</p>
    </li>
)
}
export default DestinationItem

