import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { colRed } from './store/slice/cartSlice';

function App() {
  const[name,setName] = useState('')
  const dispatch = useDispatch()
  const {todos} = useSelector(state=>state.svet)


  useEffect(()=>{
    dispatch(colRed(name))
  },[name])

  return (
    <div className="App">
      Sadyr
      <input onChange={(e)=>setName(e.target.value)}></input>
        <div style={{backgroundColor:todos,width:'200px',height:'200px',border:'1px solid black'}}></div>
    </div>
  );
}

export default App;
