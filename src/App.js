import './App.css';
import axios from 'axios'
import {useState} from 'react'
function App() {
  const [name, setname] = useState('')
  const [Input, setInput] = useState('')
  const get=()=>{
    axios.get('https://namestest.herokuapp.com/name')
    .then((res)=>(
      // setname(res)
     setname(res.data.map(item=>item.name))
    ));
  }
  const HandleSubmit=(event)=>{
    event.preventDefault();
    axios.post('https://namestest.herokuapp.com/name',{name:Input}).then((res)=>console.log("add"))
  }

  return (
    <div className="App">
      <h1>{name}</h1>
      <input type="text" value={Input} onChange={(e)=>setInput(e.target.value)} />
      <button type='submit' onClick={HandleSubmit}>Input</button>
      <button onClick={get}>Get </button>
    </div>
  );
}

export default App;
