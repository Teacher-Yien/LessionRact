
import React from 'react'
import { useState } from 'react';

export const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState('');
	const [editingId, setEditingId] = useState(null);
	const addItem = (e) => {
  e.preventDefault();
  if (newTodo.trim() !== '') {
    if (editingId) {
      setTodos(todos.map(todo => todo.id === editingId ? {...todo, text: newTodo} : todo));
      setEditingId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
    }
    setNewTodo('');
  }
};
		const editItem = (id) => {
			const itemToEdit = todos.find(todo => todo.id === id);
			setNewTodo(itemToEdit.text);
			setEditingId(id);
	};
		const remove = (id) => {
			setTodos(todos.filter((e) => e.id !== id));
	};
		return (
				<div className=' p-5'>
					<h2 className=' text-3xl font-semibold text-center'>TodoList</h2>
					<form className=' w-[400px] h-[200px] shadow m-auto p-3'>
						 <label htmlFor="item" className=' w-[100%]'>Add Item</label>
							<input 
							type="text" 
							placeholder='Enter item...' 
							value={newTodo}
       onChange={(e) => setNewTodo(e.target.value)}
							className='w-[100%] p-3 rounded-md border focus:border-separate'
							 />
							<button disabled={!newTodo.trim()} onClick={addItem} className=' bg-blue-400 rounded text-white p-2 mt-2'>Add Item</button>
					</form>
					<ul className="mt-4 max-w-md m-auto">
        {todos.length === 0 ? (
          <li className="text-gray-500 text-center">No items yet</li>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} className="p-2 border-b  flex justify-between  ">
              <p>{todo.text}</p>
														<div className='flex gap-2 '>
															<button  onClick={() => editItem(todo.id)} className=' text-white bg-yellow-400 rounded p-2'>Edit</button>
															<button onClick={()=>remove(todo.id)} className=' text-white bg-red-400 rounded p-2'>remove</button>
														</div>
            </li>
          ))
        )}
      </ul>
					</div>
		)
}


