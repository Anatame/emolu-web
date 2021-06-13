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
  
         
         <div style={styles.bottomContainer}>
            <h3 style={styles.bottomText}>Spent total - Rs. 150</h3>
         </div>

         <button onClick={() => onDelete(id)}>delete</button>
      </div>
   );
}

const styles = {
   container: {
      width: 300,
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
      position: 'relative',
      left: 15,
      textAlign: 'start',
   },

   itemsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
   },

   item: {
      margin: 20,
      color: 'white',
   },

   bottomContainer: {
      borderTop: '1px solid white',
   },
   bottomText: {
      textAlign: 'center',
      color: 'white',
   }
}

export default CardItem;