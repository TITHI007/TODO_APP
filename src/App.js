import './App.css';
import { Heading } from '@chakra-ui/react';
import  Todolist from './components/Todolist';
import  Addtodo from './components/Addtodo';
import {VStack , IconButton, useColorMode} from '@chakra-ui/react';
import {FaSun,FaMoon} from 'react-icons/fa';
import {useState, useEffect} from 'react';

function App() {
//   const initialTodos = [
//     {
//         id: 1,
//         body: 'complete chakra',
//     },
//     {
//         id: 2,
//         body: 'complete todo',
//     },
//  ];

 const savedtodo = JSON.parse(localStorage.getItem('todos'));
 const [todos,setTodos]=useState(savedtodo || []  );

 useEffect(()=>{
  localStorage.setItem('todos',JSON.stringify(todos));
 },[todos]);

 function deletetodo(id){
   const newTodos=todos.filter(todo=>{
     return todo.id !== id;
   });
   setTodos(newTodos);
 }
 function addTodo(todo){
   setTodos([...todos,todo])
 }

const{colorMode , toggleColorMode} =useColorMode();

  return(
    <VStack p={4}>{/* padding of 16 px  */}
       <IconButton 
        icon={ colorMode==='light' ? <FaSun/> : <FaMoon/>} 
        isRound="true" 
        size="lg" 
        alignSelf="flex-end"
        onClick= {toggleColorMode }
      />
      <Heading 
        mb="8" 
        fontWeight="bold" 
        size='2xl' 
        bgGradient="linear(to-l,teal.600,teal.500,purple.500 )"
        bgClip="text">
          TODO APPLICATION
      </Heading>
      <br/>
      <Todolist todos={todos}  deletetodo={deletetodo} />
      <Addtodo addTodo={addTodo}/>
    </VStack>
  ); 
}

export default App;
