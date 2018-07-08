import React, {Component} from 'react';
import {  Grid, Cell ,ProgressBar } from 'react-mdl';

class Skills extends Component{
	render(){
		return(
			<div className='resume-right-info'>
				<Grid>
					<div className="resume-right-info-prbar">
						<h5>{this.props.text}</h5>
						<ProgressBar 
							 progress={this.props.progress} 
						/>
					</div>
				</Grid>
				</div>
		)
	}
};

export default Skills;