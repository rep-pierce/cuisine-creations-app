import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RecipePage from "./components/RecipePage";
import LogInPage from "./components/LogInPage";

function App() {
  const [count, setCount] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		fetch("/hello")
			.then((r) => r.json())
			.then((data) => setCount(data.count));
  }, []);
  
  
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);


	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route path="/login">
						<LogInPage currentUser={currentUser} setCurrentUser={setCurrentUser} />
					</Route>
					<Route path="/">
						<RecipePage currentUser={currentUser} setCurrentUser={setCurrentUser} />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
