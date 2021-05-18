import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChnageSearchInputValue = event => {
    this.setState({searchInput: event.target.value})
  }

  renderDestinationItem = () => {
    const {searchInput} = this.state
    if (searchInput === '') {
      const {initialDestinationsList} = this.props
      return initialDestinationsList.map(eachPlace => (
        <DestinationItem destinationList={eachPlace} key={eachPlace.id} />
      ))
    }
    const {initialDestinationsList} = this.props
    const filteredData = initialDestinationsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return filteredData.map(eachPlace => (
      <DestinationItem destinationList={eachPlace} key={eachPlace.id} />
    ))
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="search-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              className="search-input"
              placeholder="search"
              value={searchInput}
              onChange={this.onChnageSearchInputValue}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="lists-container">{this.renderDestinationItem()}</ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
