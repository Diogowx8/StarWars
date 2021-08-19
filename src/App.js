import React from 'react';
import Home from './pages/Home';
import Films from './pages/Films';
import Starships from './pages/Starships';
import People from './pages/People';
import Planets from './pages/Planets';
import Species from './pages/Species';
import Login from './pages/Login';
import {HashRouter, Switch, Route} from 'react-router-dom';


function App() {

	return(
		<>
		<HashRouter>
        	<Switch>
            	<Route path="/" exact={true} component={Home} />
				<Route path="/films" exact={true} component={Films} />
				<Route path="/starships" exact={true} component={Starships} />
				<Route path="/people" exact={true} component={People} />
				<Route path="/planets" exact={true} component={Planets} />
				<Route path="/species" exact={true} component={Species} />
				<Route path="/login" exact={true} component={Login} />
			</Switch>
		</HashRouter>	
		</>
	)

}

export default App;