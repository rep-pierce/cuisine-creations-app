import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RecipePage from "./components/RecipePage";
import LoginForm from "./components/LoginForm";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

	useEffect(() => {
		fetch("/hello")
			.then((r) => r.json())
			.then((data) => setCount(data.count));
  }, []);
  
  
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <Login onLogin={setUser} />;


	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route path="/testing">
						<h1>Test Route</h1>
					</Route>
          <Route path="/recipespage">
            <RecipePage />
          </Route>
					<Route path="/login">
						<LoginForm />
					</Route>
					<Route path="/">
						<h1>Page Count: {count}</h1>
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
