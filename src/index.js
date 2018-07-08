import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/main.css";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

ReactDOM.render(
	<BrowserRouter><App /></BrowserRouter>, 
	
document.getElementById('root'));

// document.querySelectorAll('a').forEach(element => {
// 	element.addEventListener('click', (e)=>{
// 		e.preventDefault(); 
// 	})
// });
