import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React App
        </p>
        <Component></Component>
        <Person nayok="Manna" nayika="Tanna"></Person>
        <Person nayok="bapparaz" nayika="Sabnaz"></Person>
        <Person nayok="Jasim" nayika="Sabana"></Person>
        <Person nayok="Salman" nayika="Sah"></Person>
      </header>

    </div>
  );
}

function Component() {
  return (
    <div style={{border: '2px solid red', margin:'12px', padding: '10px'}}>
      <h1>I am H1 html tag</h1>
      <h3>I am H3 html tag</h3>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border: '2px solid red', 
    margin:'12px', 
    padding: '10px'
  }
  return (
    <div style = {personStyle}>
      <h1>Name of Nayok: {props.nayok} </h1>
      <h3>name of nayika: {props.nayika} </h3>
    </div>
  )
}
export default App;
