import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RecipePage from "./components/RecipePage";
import LogInPage from "./components/LogInPage";
import NavBar from "./components/NavBar";
import RecipeView from "./components/RecipeView";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    fetch("/auth")
	.then((r) => {
      if (r.ok) {
        r.json()
		.then((user) => setCurrentUser(user));
      }
    });
  }, []);


	return (
		<BrowserRouter>
			<div className="App">
				<NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
				<Switch>
					<Route path="/userlogin">
						<LogInPage currentUser={currentUser} setCurrentUser={setCurrentUser} />
					</Route>
					<Route path="/recipe/:id">
						<RecipeView currentUser={currentUser}/>
					</Route>
					<Route path="/">
						<RecipePage/>
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;