import PropTypes from 'prop-types'

export function CurrencyInput(props) {
  return (
    <div className='w-[180px] ml-auto mr-auto mt-6 grid grid-cols-2'>
      <input className='bg-gray-700 hover:animate-pulse text-white font-mono outline-0' type="text" value={props.amount} onChange={e => props.onAmountChange(e.target.value)} placeholder='Enter currency...'/>
      <select className='bg-gray-800 hover:animate-pulse text-white font-mono p-2' value={props.currency} onChange={e => props.onCurrencyChange(e.target.value)}>
        {props.currencies.map((currency => (
          <option value={currency}>{currency}</option>
        )))}
      </select>
    </div>
  )
}

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
}