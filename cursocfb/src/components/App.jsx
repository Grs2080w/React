import { useState } from 'react'
import Btn from './btn'
import Link from './link'

function App() {

  const [btn, setBtn] = useState(false)

  return (
    <div>
      <Btn btn={btn} setBtn={setBtn} />
      <Link btn={btn} />
      
    </div>
  )
}

export default App
