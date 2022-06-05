import './App.css';
import { fetchAllProducts } from './actions/productAction';
import{ useEffect} from 'react'
import {useDispatch} from 'react-redux'

function App() {
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])
  
  return (
    <div className="App">
      <h1>Welcome to BlinkIt</h1>
           
    </div>
  );
}

export default App;
