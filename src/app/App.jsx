import { useDispatch, useSelector } from 'react-redux'
import { Input } from '../Components/Input/Input'

import './style/App.css'

function App() {
  const dispatch = useDispatch()
  
  const { count } = useSelector((state) => state.counterReducer)

  return (
    <>

      <li>{count}</li>
      <button onClick={() => dispatch({type:"INC"})}> +</button>

      <section >
        <div className="container">
          <Input  dispatch={dispatch} />
        </div>
      </section>


    </>
  )
}

export default App
