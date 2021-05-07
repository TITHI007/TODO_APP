import React from 'react';
import {HStack,VStack,Text, IconButton, StackDivider,Spacer, Badge} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

function Todolist({todos,deletetodo}) {
    if(!todos.length){
        return(
            <Badge colorScheme="green" p='4' m='4' borderRadius='lg'>No Todos,Yay</Badge>)
    }

    return (<VStack
        divider={<StackDivider/>} 
        borderColor="gray.200"
        borderWidth='2px'
        p='4'
        borderRadius='md'
        width='100%'
        maxW={{ base:'90vw' ,sn:'80vw' ,lg:'50vw' ,xl:'40vw' }}
        alignItems='stretch'
    >
        {todos.map(todo =>(
            <HStack key={todo.id}>
                <Text>{todo.body}</Text>
                <Spacer/>
                <IconButton
                    icon={<FaTrash/>} 
                    isRound="true" 
                    onClick={() => deletetodo(todo.id)}/>
            </HStack>
        ))}
    </VStack>);
}

export default Todolist;
