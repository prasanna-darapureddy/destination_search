// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResults = () => {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return searchResults
  }

  render() {
    const {searchInput} = this.state
    const searchResults = this.getSearchResults()

    return (
      <>
        <div className="destination-bg-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-icon"
              alt="search icon"
            />
          </div>
          <ul className="destination-lists-container">
            {searchResults.map(eachItem => (
              <DestinationItem
                eachDestinationDetails={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }
}
export default DestinationSearch
