import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSeach extends Component {
  const destinationsList = props
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
