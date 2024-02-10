import React, { useEffect } from 'react';
import './content.scss';

import Hero from "../hero/Hero";
import About from '../about/About';
import Skills from '../skills/Skills';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';


const Content = () => {
	useEffect(() => {
		const fetchData = async () => {
			try {
				await fetch('https://chatapp-mysql.herokuapp.com/');
				await fetch('https://strength-workout.herokuapp.com/');
			} catch (error) {
				console.error('Error fetching data:', error);
				// Handle the error, e.g., display an error message to the user
			}
		};
	
		fetchData();
	}, []);

	return (
		<main className="content">
			<Hero />
			<About />
			<Skills />
			<Portfolio />
			<Contact />
		</main>
	)
}

export default Content;