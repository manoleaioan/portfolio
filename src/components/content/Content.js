import './content.scss';

import Hero from "../pages/hero/Hero";
import Projects from '../pages/portfolio/Projects';
import Contact from '../pages/contact/Contact';
import Skills from '../pages/skills/Skills';
import { AnimatePresence, motion } from "framer-motion";
import { useConsumeFirstLoad } from '../../context/FirstLoadContext';

const Content = () => {
	const isFirstLoad = useConsumeFirstLoad();

	return (
		<AnimatePresence initial={isFirstLoad}>
			<motion.main className="content">
				<section>
					<Hero />
				</section>

				<section>
					<Skills />
				</section>

				<section>
					<Projects />
				</section>

				<section>
					<Contact />
				</section>
			</motion.main>
		</AnimatePresence>
	)
}

export default Content;