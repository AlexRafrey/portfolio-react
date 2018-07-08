import React, {Component} from 'react';
import {  Grid, Cell  } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component{
	state = {
		array: '',
	};

	
	render() {
		const {count} = this.state;
		return(
			<div className='resume'>
				<Grid>
				<Cell col={4} className='resume-left'>
					<img style ={{height: '200px'}} src="https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-boy-389cd1eb1d503149-512x512.png" alt="ava"/>
					<h2>Alex Rafrey</h2>
					<h4>Programmer</h4>
					<hr/>
					<p style={{paddingTop: '1rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde eaque sunt pariatur, illum ipsa fugit veniam asperiores excepturi culpa minus rerum aperiam maiores dolorem deserunt deleniti eius animi cupiditate.</p>
					<hr/>
					<h5>Address</h5>
					<p>Hacker avenu, 999</p>
					<h5>Phone</h5>
					<p>(123) 456-7890</p>
					<h5>email</h5>
					<p>alex@gmail.com</p>
					<hr/>
				</Cell>
				<Cell col={8} className='resume-right'>
					
					<Education className='resume-right-info'
						startY='2013'
						endY='2017'
						experience='University Hight Devel 99'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, molestiae! At voluptas pariatur excepturi alias illum eum numquam libero repudiandae?  consectetur adipisicing elit. Tempore, molestiae! At voluptas pariatur excepturi alias illum eum numquam libero repudiandae?'
					/>

					<Experience 
						startY='2017'
						endY='2018'
						experience='6 war projects'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, molestiae! At voluptas pariatur excepturi alias illum eum numquam libero repudiandae? consectetur adipisicing elit. Tempore, molestiae! At voluptas pariatur excepturi alias illum eum numquam libero repudiandae? consectetur adipisicing elit. Tempore, molestiae! At voluptas pariatur excepturi alias illum eum numquam libero repudiandae?'
					/>
					<Cell col={12}><h1>Skills</h1></Cell>
					<Skills 
						text='Javascript'
						progress= '65'
					/>
					<Skills 
						text='React'
						progress= '55'
					/>
					<Skills 
						text='NodeJs'
						progress= '10'
					/>
				</Cell>
				</Grid>
			</div>
		);
	}
}



export default Resume;