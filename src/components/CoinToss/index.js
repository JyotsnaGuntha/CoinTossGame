import {Component} from 'react'
import './index.css'

const headsImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResult: 'heads',
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2) === 0 ? 'heads' : 'tails'
    this.setState(prevState => ({
      tossResult,
      headsCount:
        tossResult === 'heads'
          ? prevState.headsCount + 1
          : prevState.headsCount,
      tailsCount:
        tossResult === 'tails'
          ? prevState.tailsCount + 1
          : prevState.tailsCount,
    }))
  }

  render() {
    const {tossResult, headsCount, tailsCount} = this.state
    const resultImg = tossResult === 'heads' ? headsImg : tailsImg
    const total = headsCount + tailsCount

    return (
      <div className="coin-toss-bg">
        <div className="coin-toss-container">
          <h1 className="coin-toss-heading">Coin Toss Game</h1>
          <p className="coin-toss-subheading">Heads (or) Tails</p>
          <div className="toss-result-row">
            <img
              src={resultImg}
              alt="toss result"
              className="coin-toss-image"
            />
            <button
              className="toss-button"
              type="button"
              onClick={this.onTossCoin}
            >
              Toss Coin
            </button>
          </div>
          <div className="stats-container">
            <p>Total: {total}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
