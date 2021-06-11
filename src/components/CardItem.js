import React, { StyleSheet } from 'react';

function CardItem({text, title, id, items, onDelete}) {

   // function delete(arr, id){
   //    arr.filter((data)=> data.id != id )
   // }

   return (
      <div style={styles.container}>
         <div style={styles.headContainer}>
            <h2 style={styles.headText}>{text} { id }</h2>
         </div>

         <div style={styles.itemsContainer}>
            {items.map((item) => <h4 style={styles.item}>{item.item}  {item.price}</h4>)}
            {console.log(items)}
         </div>
         <button onClick={()=> onDelete(id)}>delete</button>

         
      </div>
   );
}

const styles = {
   container: {
      width: 300,
      height: 200,
      backgroundColor: 'blue',
      margin: 20,
      border: '1px solid white',
      backgroundColor: '#3E3E3E'
   },

   headContainer: {
      borderBottom: '1px solid white',
   },

   headText: {
      color: 'white',
   },

   itemsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: 24
   },

   item: {
      margin: 20,
      color: 'white',
   },

}

export default CardItem;