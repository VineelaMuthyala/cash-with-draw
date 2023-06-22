import './index.css'

const DenominationItem = props => {
  const {amount, addAmount} = props
  const {value} = amount

  const amountToAdd = () => {
    addAmount(value)
  }

  return (
    <li className="buttons-container">
      <button className="button" type="button" onClick={amountToAdd}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
