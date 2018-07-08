import React, {Component} from 'react';


class About extends Component{
	state = {
		array: '',
	};

	
	render() {
		const {count} = this.state;
		return(
			<div >
				<h2>About</h2>
			</div>
		);
	}
}



export default About;