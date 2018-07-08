import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton   } from 'react-mdl';

class Projects extends Component{
	state = {
		activeTab: 0,
	};

	toggleCategories(){
		if (this.state.activeTab === 0) {
			return(
				<Card shadow={0} style={{width: '400px', margin: 'auto', marginTop: '50px'}}>
					<CardTitle style={{color: '#fff', height: '200px', background: 'url(https://i0.wp.com/technoetics.in/wp-content/uploads/2016/10/reactnative.png?resize=638%2C359) center / cover'}}>Project #</CardTitle>
					<CardText>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim recusandae officia repellat facilis ex?
					</CardText>
					<CardActions border style={{display: 'flex', justifyContent: 'space-around'}}>
						<Button colored >GitHub</Button>
						<Button colored >CodePen</Button>
						<Button colored >LiveDemo</Button>
					</CardActions>
					<CardMenu style={{color: '#fff'}}>
						{/* <IconButton name="share" /> */}
					</CardMenu>
				</Card>
			)
		}else if(this.state.activeTab === 1){
			return(
				<Card shadow={0} style={{width: '400px', margin: 'auto', marginTop: '50px'}}>
					<CardTitle style={{color: '#000', height: '200px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png) center / contain'}}>Project #</CardTitle>
					<CardText>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim recusandae officia repellat facilis ex?
					</CardText>
					<CardActions border style={{display: 'flex', justifyContent: 'space-around'}}>
						<Button colored >GitHub</Button>
						<Button colored >CodePen</Button>
						<Button colored >LiveDemo</Button>
					</CardActions>
					<CardMenu style={{color: '#fff'}}>
						{/* <IconButton name="share" /> */}
					</CardMenu>
				</Card>
			)
		}else if(this.state.activeTab === 2){
			return(
				<Card shadow={0} style={{width: '400px', margin: 'auto', marginTop: '50px'}}>
					<CardTitle style={{color: '#000', height: '200px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mongo-db-logo.png/310px-Mongo-db-logo.png) center / cover'}}>Project #</CardTitle>
					<CardText>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim recusandae officia repellat facilis ex?
					</CardText>
					<CardActions border style={{display: 'flex', justifyContent: 'space-around'}}>
						<Button colored >GitHub</Button>
						<Button colored >CodePen</Button>
						<Button colored >LiveDemo</Button>
					</CardActions>
					<CardMenu style={{color: '#fff'}}>
						{/* <IconButton name="share" /> */}
					</CardMenu>
				</Card>
			)
		}
	}

	render() {
		return(
			<div>
				<Tabs type="text" onChange={(tabId) => this.setState({ activeTab: tabId})}>
					<Tab>REACT</Tab>
					<Tab>NodeJs</Tab>
					<Tab>MongoDB</Tab>
				</Tabs>
				<section className='project'>
					<Grid className='project-grid'>
						<Cell col={12}>
							<div className="project-grid-content">{this.toggleCategories()}</div>
						</Cell>
					</Grid>
					
				</section>
			</div>
		);
	}
}



export default Projects;