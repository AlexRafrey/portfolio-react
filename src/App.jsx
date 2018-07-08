import React, {Component} from 'react';
import {
	BrowserRouter ,
	Route,
	Link,
	Switch
  } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Resume from './components/Resume';
import Projects from './components/Projects';
import LandingPage from './components/Landingpage';
import Contact from './components/Contact';
import About from './components/About';

class App extends Component{
	constructor(props){
		super();
		this.state = {
			recipes: [],
		}
	
	}

//реальные пути физически
	render(){	
		return(
			<div className="app">
				<Header></Header>
				<Switch>
					<Route exact path='/' component={LandingPage}></Route>
					{/* <Route exact path='/about' component={About}></Route> */}
					<Route exact path='/contact' component={Contact}></Route>
					<Route exact path='/projects' component={Projects}></Route>
					<Route exact path='/resume' component={Resume}></Route>
				</Switch> 
			</div>
			
		);
	}
}

export default App;