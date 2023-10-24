import { useStore, actions } from "./store";

function App() {
	const [state, dispatch] = useStore()
	const { todos, todoInput } = state

	const handleCreateTodo = () => {
		dispatch(actions.createTodo(todoInput))
	}

  return (
	<div style={{padding: 20}}>
		<input 
			value={todoInput}
			placeholder="Enter todo"
			onChange={e => dispatch(actions.setTodo(e.target.value))}
		/>
		<button onClick={handleCreateTodo}>Create</button>
		<ul>
			{todos.map((todo, index) => (
				<li key={index}>{todo}
					<span onClick={() => dispatch(actions.deleteTodo(index))}>&times;</span>
				</li>
			))}
		</ul>
	</div>
  )
}

export default App;