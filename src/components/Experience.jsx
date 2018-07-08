import React, {Component} from 'react';
import {  Grid, Cell  } from 'react-mdl';

class Experience extends Component{
	render(){
		return(<div className='resume-right-info'>
				<Grid>
					<Cell col={12}><h1>Experience</h1></Cell>
					<Cell col={4}>
						<p>{this.props.startY} - {this.props.endY}</p>
					</Cell>
					<Cell col={8}>
						<h4 style={{marginTop: '0px'}}>{this.props.experience}</h4>
						<p>{this.props.description}</p>
					</Cell>
					<Cell col={12}><hr/></Cell>
				</Grid>
				</div>
		)
	}
};

export default Experience;