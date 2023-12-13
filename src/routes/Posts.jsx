import Post from '../components/Post.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Posts() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((res) => { setTodos(res.data); });
    }, []);

    return (
        <>
            <main>
                <h2>Posts</h2>
                <div className='posts'>
                    {todos.map((todo) => <Post key={todo.id} {...todo} />)}
                </div>
            </main>
        </>
    );
}

export default Posts