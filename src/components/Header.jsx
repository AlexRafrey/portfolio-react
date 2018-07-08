import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Header extends Component{
	state = {
		array: '',
	};

	// handleCheck = index => event=>{
	// 	let array = this.state.test.slice();
	// 	array.forEach(element => {
	// 		element.right == element.user ? element.correct = 1 : '';
	// 	});
	// 	this.setState({test: array});
	// 	console.log(this.state.test);
	// };

// как отоброжается
	render() {
		return(
			<div className='header'>
				<nav className="nav  navbar-dark bg-dark">
					<Link className="nav-link active" to="/">about</Link>
					<Link className="nav-link" to="/projects">projects</Link>
					<Link className="nav-link" to="/resume">resume</Link>
					<Link className="nav-link " to="/contact">contact</Link>
				</nav>
			</div>
		);
	}
}



export default Header;