
import './App.css';
import React,  {useState} from 'react';

function App() {
  const [ hour, setHour] = useState('')
  const hourly = async () => {
    let url = "api.openweathermap.org/data/2.5/weather?q=Beijing&appid=1f89da47fe4d0be6bbbf376af70bdb58";
    
    const requestOptions = {
      method: 'GET',
      headers: { "Content-type": "application/json" },
    }

    const request = await fetch(url, requestOptions);
    console.log(request, '<--- request')
    const data = await request.json();
    console.log(data, '<--- data')
    setHour(data)
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={hourly}></button>
        <p>{JSON.stringify(hour)}</p>
      </header>
    </div>
  );
}

export default App;
