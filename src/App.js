import { Outlet, Link } from "react-router-dom";
function App() {
  	return (
		<>
			<div className="App">
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/contacts">Contact</Link>
						</li>
						<li>
							<Link to="/news">News</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div>
				<Outlet />
			</div>
		</>
  )
}

export default App;