import logo from './logo.svg';
import './App.css';
const singer = {id : 1, Name:"mahfuz", job:'singer'}
const containerStyle = {
  color: 'black',
  backgroundColor: 'red' ,
  padding:"30px"
};
function App() {
  return (
    <div className="App">
      <Person name="Masrafi"></Person>
      <Person name="Musfiq"></Person>
      <Person name="rubel"></Person>
      <h1>Section two </h1>
      <Nayok name="shahrukh khan" movie="ddlj"></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
    </div>
  );
}

function Person(Props){
  return (
  <div className='person'>
    <h1>Name:{Props.name}</h1>
    <h1>profesion:creketer </h1>
    <h1>id:1 </h1>
  </div>
  ) 
 
}

function Nayok(props){
  return (
    <div className='nayok'>
      <h1>{props.name}</h1>
      <h1>{props.movie} </h1>
      <h1>id:2 </h1>
    </div>
    )
}

export default App;
