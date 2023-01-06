import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RecipePage from "./components/RecipePage";
import LogInPage from "./components/LogInPage";
import NavBar from "./components/NavBar";
import Favorites from "./components/Favorites";
import UserPage from "./components/UserPage";
import RecipeView from "./components/RecipeView";
import RecipePageStyle from "./styled-components/RecipePageStyle";
import NavBarStyle from "./styled-components/NavBarStyle";
import FavoriteStyle from "./styled-components/FavoriteStyle";
import LoginStyle from "./styled-components/LoginStyle";
import UserFormStyle from "./styled-components/UserPageStyle";
import RecipeFormStyle from "./styled-components/RecipeFormStyle";
import RecipeForm from "./components/RecipeForm";
import RecipeViewStyle from "./styled-components/RecipeViewStyle";
import IngredientsPage from "./components/IngredientsPage";
import IngredientPageStyle from "./styled-components/IngredientPageStyle";
import StepPage from "./components/StepPage";

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	const [recipes, setRecipes] = useState([]);
	const [rID, setRID] = useState(null)

	useEffect(() => {
		fetch("/auth").then((r) => {
			if (r.ok) {
				r.json().then((user) => setCurrentUser(user));
			}
		});
	}, []);
	const [formData, setFormData] = useState({
		name: "",
		age: "",
		username: "",
		password: "",
		passwordConfirmation: "",
	});

	return (
		<BrowserRouter>
			<div className="App">
				<NavBarStyle />
				<NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
				<Switch>
					<Route path="/recipeform">
						<RecipeFormStyle />
						<RecipeForm currentUser={currentUser} recipes={recipes} setRecipes={setRecipes} rID={rID} setRID={setRID}/>
					</Route>
					<Route path="/userpage">
						<UserFormStyle />
						<UserPage
							currentUser={currentUser}
							setCurrentUser={setCurrentUser}
							setFormData={setFormData}
							formData={formData}
						/>
					</Route>
					<Route path="/userlogin">
						<LoginStyle />
						<LogInPage
							currentUser={currentUser}
							setCurrentUser={setCurrentUser}
						/>
					</Route>
					<Route path="/favorites">
						<FavoriteStyle />
						<Favorites currentUser={currentUser} />
					</Route>
					<Route path="/ingredientslist">
						<IngredientPageStyle />
						<IngredientsPage rID={rID} setRID={setRID} />
					</Route>
					<Route path="/steps">
						<StepPage rID={rID} setRID={setRID} />
					</Route>
					<Route path="/recipe/:id">
						<RecipeViewStyle/>
						<RecipeView recipes={recipes} setRecipes={setRecipes} currentUser={currentUser} />
					</Route>
					<Route path="/">
						<RecipePageStyle />
						<RecipePage
							recipes={recipes}
							setRecipes={setRecipes}
							currentUser={currentUser}
							rID={rID}
							setRID={setRID}
						/>
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
