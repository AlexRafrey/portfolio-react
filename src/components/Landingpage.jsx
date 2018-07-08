import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class Landingpage extends Component{
	state = {
		array: '',
	};

	render() {
		return(
			<div className="landing cpl-md-12">
				<div className="landing-avatar">
					<img src="https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-boy-389cd1eb1d503149-512x512.png" alt="" className='landing-avatar-img'/>
				</div>
				<div className="landing-banner">
					<h1>Full Stack Web Developer</h1>
					<hr/>
					<p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>
					<div className="landing-icons" >
					<a href="#"><i className="fab fa-youtube ic" aria-hidden="true"></i></a>
					<a href="#" ><i className="fab fa-github" aria-hidden="true"></i></a>
					<a href="#" ><i className="fab fa-gratipay" aria-hidden="true"></i></a>
				</div>
				</div>
				
			</div>
		);
	}
}



export default Landingpage;