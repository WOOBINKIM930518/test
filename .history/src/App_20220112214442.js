import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App">
        <h1>COVID-19 </h1>
        <select>
        <option>국내</option>          
        <option>세계</option>          
        </select>
      </header>
      <section>
        <h2>국내 코로나 현황</h2>
        <div className="contents"></div>
      </section>
    </div>
  );
}

export default App;
