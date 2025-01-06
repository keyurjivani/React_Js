import { useState } from 'react'

import Productlist from './Productlist'
import Timer from './Timer'
import Fakeai from './Fakeai'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Productlist/>
    // <Fakeai/>
    // <Timer/>
  )
}

export default App
