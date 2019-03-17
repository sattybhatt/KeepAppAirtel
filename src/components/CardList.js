import React, { Component } from 'react';
import Cardnew from './Cardnew';
class CardList extends React.Component{
    constructor(props){
        super(props);
      }
      render(){
          console.log(this.props.tasks);
          return(
              <div>{this.props.tasks.map(todo => <Cardnew handleForDelete={this.props.handleForDelete}  key={todo.id} keynew={todo.id} desc={todo.noteDescription} title={todo.noteTitle} todo={todo}/>)}</div>
        )
}
}
export default CardList