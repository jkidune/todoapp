import React from 'react';
import './App.css';
import  ListItems from './listItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


library.add(faTrash);




class App extends React.Component{  //we choose a current state based on things that will change//
  
  constructor(props){
    super(props);               //we call our base class with super//
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      },
     }
     this.handleInput = this.handleInput.bind(this);  //we need to bind this to handleInput//
     this.addItem = this.addItem.bind(this);
     this.deleteItem = this.deleteItem.bind(this);
     this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e){
    this.setState({          //we set state and inside we put an object that contain the variable that we want to change//
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== '') {
      const items=[...this.state.items, newItem]  //add the current item then followed by new item,//
      this.setState({
        items: items,
        currentItem: {
          text:'',
          key:''
        },
      })
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key!==key);
    this.setState({
      items:filteredItems
    })
  }
  setUpdate(text, key) {
    const items = this.state.items;
    items.map(item => {
      if(item.key===key){
        item.text=text;
      }
    })
    this.setState({
      items: items
    })
  }
  render(){
    return(
      <div className="app">
        <header>
        <form id="form-input" onSubmit={this.addItem}>
        <input type="text" placeholder="Type here" value={this.state.currentItem.text} onChange={this.handleInput} ref={this.inputElement}/>
        <button type="submit">Add</button>
        </form> 
        

      </header> 
      <ListItems items={this.state.items} deleteItem ={this.deleteItem}
      setUpdate ={this.setUpdate}
      ></ListItems>
      </div>  //we simply put functions to a attribute that we want to work on//
      
      
    );
  }
}

export default App;
