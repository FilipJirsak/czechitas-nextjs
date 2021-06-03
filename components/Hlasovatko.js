import { useState } from 'react'

const Hlasovatko = ({ symbol, initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes)

  return (
    <button onClick={() => setVotes(votes => votes + 1)}>{symbol} {votes}</button>
  )
}

export default Hlasovatko