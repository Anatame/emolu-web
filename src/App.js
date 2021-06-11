
import './App.css';


import {useState, useRef} from 'react'
import CardItem from './components/CardItem'
import CardList from './components/CardList'
import Navbar from './components/Navbar/Navbar';

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
      <Navbar />
      {data.length > 0 ? (<CardList data={data} onDelete={deleteCard }/>) : ("No cards yet")}
      <button className="add" style={styles.add} onClick={()=> add()}>Add</button>

    </div>
  );
}

const styles = {
  add: {
     margin: 50,
     
  },

}

export default App;
