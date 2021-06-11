import logo from './logo.svg';
import './App.css';

import {useState, useRef} from 'react'
import CardItem from './components/CardItem'
import CardList from './components/CardList'

function App() {
  
  let [data, setData] = useState([{
    id: '0',
    title: 'Groceries',
    text: 'Testing',
    items: [{
        id: '0',
        item: 'Apple',
        price: 15
      },
      {
        id: '1',
        item: 'Banana',
        price: 20
      }]
  },])
  
  
  let count = useRef(1);
  function add() {
  
    let n = {
      id: count.current++,
      title: 'Groceries',
      text: 'Testing',
      items: [{
        id: '0',
        item: 'Apple',
        price: 15
      },
      {
        id: '1',
        item: 'Banana',
        price: 20
      }]
    }

    console.log(count);
    setData([...data, n])

  }

  function deleteCard (id){
    console.log(id)
    setData(data.filter((data)=> data.id !== id))
  }

  return (
    <div className="App">

      {data.length > 0 ? (<CardList data={data} onDelete={deleteCard }/>) : ("No cards yet")}
      <button onClick={()=> add()}>Add</button>

    </div>
  );
}

export default App;
