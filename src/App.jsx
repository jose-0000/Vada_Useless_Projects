import { useState } from 'react'
import Score from './Score/Score.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Vada eating Game</h1>
        <Score/>
      </div>
    </>
  );
}

export default App
