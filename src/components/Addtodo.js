import {Button , HStack , Input, useToast} from '@chakra-ui/react'
import {useState} from 'react'
import {nanoid} from 'nanoid';

function Addtodo({addTodo}) {
    const toast=useToast()
    function handleSubmit(e){
        e.preventDefault();
        if(!content){
            toast({
                title:'No Content',
                status:'error',
                duration:'2000',
                isClosable:true,
            });
            return;
        }
        const todo={
            id:nanoid(),
            body: content,
        };
        addTodo(todo);
        setContent('');
    }

    const [content, setContent] = useState('');
    return (<form onSubmit={handleSubmit}>
        <HStack mt="8">
            <Input 
                variant="filled" 
                placeholder="Enter todo" 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
            />
            <Button colorScheme="teal" px="8" type="submit">Add TODO</Button>
        </HStack>
    </form>);
}

export default Addtodo;
