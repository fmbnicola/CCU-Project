import React from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Button, TouchableOpacity, Image} from 'react-native';



import Header from '../components/Header';
import InputBar from '../components/InputBar';
import TodoItem from '../components/TodoItem';

export default class FavoritesScreen extends React.Component{


  /* Note: in react native the execution loop is the following (Lifecycle Methods):
  *  
  *   constructor() -> componentWillMount() -> render() -> componentDidMount()
  *                                              ^                 |
  *                                              |_________________|
  */

  /* OLD 
  constructor(){
    super();

    this.state = {
      todoInput: '', 
      todos: [
        { id: 0, title: 'Take out the trash', done: false}, 
        { id: 1, title: 'Cook dinner', done: false}
      ]
    }
  }
  
  //this function is called to add an new element to the list
  addNewTodo(){

    //make a copy of todos to change by adding new element
    let todos = this.state.todos;
    todos.unshift({
      id: todos.length + 1,
      title: this.state.todoInput,
      done: false
    });

    //update state and clean input buffer
    this.setState({
      todos,
      todoInput: ''
    })
  }

  //this function toggles the 'done' property of a todo element
  toggleDone(item){

    //iterate through array to find the right todo and toggle it
    let todos = this.state.todos;

    todos = todos.map( (todo) => {
      if(todo.id == item.id){
        todo.done = ! todo.done;
      }

      return todo
    })
    
    //update todos
    this.setState({todos})
  }

  //this function removes a todo element
  removeTodo(item){

    let todos = this.state.todos;

    //remove any todos wit id of the item given (aka delete that todo)
    todos = todos.filter((todo) => todo.id != item.id);
    
    //update todos
    this.setState({todos})
  }

  render(){
    // status bar - only needed for ios
    const statusbar = (Platform.OS == 'android')? <View style={styles.statusbar}></View> : <View></View>

    return (
      <View style={styles.container}>

        {statusbar}
        
        <Header title = "'Bus'" ></Header>

        <InputBar 
          // here we create a function as a prop to change the text in the state
          changeTextFunc = {(todoInput) => this.setState({todoInput})}
          addNewTodo     = { () => this.addNewTodo()}
          todoInput      = {this.state.todoInput}
        ></InputBar>

        <FlatList 
          //Flatlist updates data when things are added to extraData 
          //(in this case when the state is changed)
          data         = {this.state.todos}
          extraData    = {this.state}

          keyExtractor = { (item, index) => index.toString()}
          renderItem   = { ({item, index}) => {
            return (
              <TodoItem 
                todoItem={item} 
                toggleDone = {() => this.toggleDone(item)}
                removeTodo ={ () => this.removeTodo(item)}
              />
            )
          }}
        />
      </View>
    );
  }
}


//creates the style sheet 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusbar: {
    backgroundColor: '#0055aa',
    height: 24
  }
});
*/

// NEW
  render(){
    return (
      <View style = {{flexDirection:'column', justifyContent:'space-between', position:'relative', top:'15%'}}>
        <Text style = {styles.Text}>Favoritos</Text>
        <TouchableOpacity style={styles.button}>
          <View style = {{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <Image style={styles.image} source={require('./Favorites/home.png')} />
            <Text style = {styles.buttonText}>Casa</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style = {{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <Image style={styles.image} source={require('./Favorites/work.png')} />
            <Text style = {styles.buttonText}>Trabalho</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  botoes: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
      display: 'flex',
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',

      borderBottomWidth: 0.5,
      borderBottomColor:'grey',
      borderTopWidth: 0.5,
      borderTopColor:'grey',
      backgroundColor: '#f2f2f2',
      shadowColor: '#2AC062',
      shadowOpacity: 0.4,
      shadowOffset: { height: 10, width: 0 },
      shadowRadius: 20,
  },
  buttonText: {
     fontSize: 18,
     width:200,
     //textTransform: 'uppercase',
     color: 'grey',
     textAlign:'left',
 },
 image:{
   position:'relative',
   right:30,
   width:25,
   height:25,
   margin:30,
 },
 Text: {
  fontSize: 28,
  width:350,
  color: 'grey',
  textAlign:'center',
  position: 'relative',
  top: -30,
},

});