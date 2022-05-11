import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
/*
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
*/


function App() {
  const nayoks = ['Anowar', 'Salman', 'Shakib', 'Manna'];
  const products = [
    {name: 'Photoshop', price : '$90.00'}, 
    {name: 'Illustrator', price : '$100.00'},
    {name: 'Adobe XD', price : '$70.00'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React App</p>

        {
          nayoks.map( nayok => <li>{nayok}</li>)
        }

        {
          products.map( product => <li>{product.name}</li>)
        }

        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Product product = {products[2]}></Product>

        {
          products.map( pd => <Product product={pd}></Product>)
        }

        <Person name="Munna" job="Software Eng"></Person>
        <Person name="Masum" job="Jr. Software Eng"></Person>

        <Counter></Counter>
      </header>

    </div>
  ); 
}

function Product(props) {
  const productStyle={
    border : '1px gray solid',
    borderRadius : '5px',
    backgroundColor: 'lightgray',
    height: '250px',
    width: '250px',
    float: 'left',
    display:'block'
  }
  const {name, price} = props.product;
  console.log(name, price);
  return(
    <div style={productStyle}>
      <h3> {name}</h3>
      <h5> {price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  return (
    <div style={{border: '2px solid red', margin:'12px', padding: '10px', float:'left', display:'block'}}>
      <h3>Name: {props.name} </h3>
      <p>Profession: {props.job}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return(
    <div>
      <h1>Count: {count} </h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}


export default App;
