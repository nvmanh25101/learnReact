import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.js';
import Content from './Content.js'
import './App.css'

function App() {
  const context = useContext(ThemeContext)

  return (
		<div style={{padding: 20}}>
			<button onClick={context.toggleTheme}>Toggle</button>
			<Content />
		</div>
  );
}

export default App;