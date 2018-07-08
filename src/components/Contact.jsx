import React, {Component} from 'react';
import {  Grid, Cell, ListItem, ListItemContent , List  } from 'react-mdl';

class Contact extends Component{
	state = {
		array: '',
	};

	render() {
		const {count} = this.state;
		return(
			<div className='contact'>
				<Grid className='contact-grid'>
					<Cell col={6}>
						<h2>Alex Rafrey</h2>
						<img src="https://beginschool.ru/img/avatars/xsuve.png" alt="" style={{height: '200px'}}/>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum voluptatem magni a reprehenderit necessitatibus totam ratione esse quis perferendis eos.</p>
					</Cell>
					<Cell col={6}>
						<h2>Contact me</h2>
						<hr/>
						<div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent  className='icon'>
										<i className="fas fa-phone"></i>
										(123) 456 - 8761
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent  className='icon'>
									<i class="fab fa-angellist"></i>
										More then 50 + open projects
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent  className='icon'>
									<i class="fas fa-envelope-open"></i>
										Alexshul@gmail.com
									</ListItemContent>
								</ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
				
			</div>
		);
	}
}



export default Contact;