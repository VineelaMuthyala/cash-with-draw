import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amt: 2000}

  addAmount = value => {
    console.log(value)
    this.setState(prevState => ({amt: prevState.amt - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amt} = this.state

    return (
      <div className="main-container">
        <div className="bg-container">
          <div className="name-container">
            <div className="initial">S</div>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="amount-container">
            <p className="balance-text">Your Balance</p>
            <p className="amount">{amt}</p>
          </div>
          <div className="rupees-container">
            <p className="rupees-text">In Rupees</p>
          </div>
          <div className="with-draw-container">
            <p className="with-draw-text">WithDraw</p>
          </div>
          <p className="choose-text">CHOOSE SUM (IN RUPEES) </p>
          <div className="list-container">
            <ul className="ul-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  amount={eachItem}
                  key={eachItem.id}
                  addAmount={this.addAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
