import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

const destinationsList = [
  {
    id: 1,
    name: 'Melaka Mosque',
    imgUrl: '',
  },
  {
    id: 2,
    name: 'Shrubland',
    imgUrl: '',
  },
  {
    id: 3,
    name: 'New Yark',
    imgUrl: '',
  },
  {
    id: 4,
    name: 'Escarpment',
    imgUrl: '',
  },
  {
    id: 5,
    name: 'Westminster Abbey',
    imgUrl: '',
  },
  {
    id: 6,
    name: 'SouthDowns National Park',
    imgUrl: '',
  },
  {
    id: 7,
    name: 'National Historical Site',
    imgUrl: '',
  },
  {
    id: 8,
    name: 'Tower Bridge',
    imgUrl: '',
  },
  {
    id: 9,
    name: 'Arc Here',
    imgUrl: '',
  },
  {
    id: 10,
    name: 'Steeple',
    imgUrl: '',
  },
  {
    id: 11,
    name: 'Glaciokarst',
    imgUrl: '',
  },
  {
    id: 12,
    name: 'Parco Nazionale Cinque Terre',
    imgUrl: '',
  },
]
class DestinationSeach extends Component {
  stae = {
    searchInput: '',
    destinationList: destinationsList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, destinationList} = this.state
   
    const searchResult = destinationsList.filter(each=>{
       const nameInLower = each.name.toLowerCase()
        return(
   nameInLower.includes(searchInput.toLowerCase()))}),
    
    return (
      <div className="bg-container">
        <h1 className="title">Destination Search</h1>
        <div className="input-container">
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="img"
          />
        </div>
        <ul className="list-container">
          {searchResult.map(eachItem => (
            <DestinationItem destinationDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
