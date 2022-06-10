import React, { useEffect } from 'react';
import './content.scss';

import Hero from "../hero/Hero";
import About from '../about/About';
import Skills from '../skills/Skills';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';


const Content = () => {
	useEffect(() => {
		fetch('https://chatapp-mysql.herokuapp.com/');
		fetch('https://strength-workout.herokuapp.com/');
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