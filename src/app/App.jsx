import { useDispatch, useSelector } from 'react-redux'
import { Input } from '../Components/Input/Input'

import './style/App.css'

function App() {
  const dispatch = useDispatch()

  const { count } = useSelector((state) => state.counterReducer)

  return (

    <div className="header">


      <div className="container">
        <div className="countBox">
          <h2>{count}</h2>
          <button onClick={() => dispatch({ type: "INC" })}> +</button>

        </div>


        <section >
          <div className="container">
            <Input dispatch={dispatch} />
          </div>
        </section>
      </div>

    </div>



  )
}

export default App
