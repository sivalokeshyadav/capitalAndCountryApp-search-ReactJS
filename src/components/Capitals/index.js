import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeImgId: countryAndCapitalsList[0].id}

  onClickChangeCountry = event => {
    this.setState({activeImgId: event.target.value})
  }

  getCountry = () => {
    const {activeImgId} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeImgId,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {activeImgId} = this.state
    const country = this.getCountry(activeImgId)

    return (
      <div className="app-container">
        <div className="mini-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="label-select-container">
            <select
              id="status"
              className="select-container"
              onChange={this.onClickChangeCountry}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option key={eachCountry.id} value={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <label className="label-container" htmlFor="status">
              is capital of which country?
            </label>
          </div>
          <p className="para-country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
