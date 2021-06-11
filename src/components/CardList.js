import React, { StyleSheet } from 'react';
import CardItem from './CardItem'

function CardList({data, onDelete}) {
   return (
      <div style={styles.container}>

         {data.map((d) =>  <CardItem key={d.id} text={d.text} title={d.title} id={d.id} items={d.items} onDelete={onDelete}/> )}
         {console.log(data)}
      </div>

    
   );
}

const styles = {
   container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
   }
}

export default CardList;