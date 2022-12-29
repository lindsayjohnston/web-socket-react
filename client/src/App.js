import {useState, useEffect} from "react"
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(()=>{
    // const HOST = document.location.origin.replace(/^http/, 'wss')
    // const ws = new WebSocket(HOST)

    // ws.onmessage = (event) =>{
    //   setData(event.data)
    // }
    fetch("/api")
    .then((res) => {debugger; res.json()})
    .then((data) => setData(data.message))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Data here: {!data ? "Loading..." : data}`</p>
      </header>
    </div>
  );
}

export default App;
