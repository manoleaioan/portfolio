import React from 'react';
import { motion } from "framer-motion";
import TextEffect from '../text-effects/TextEffect';

const titleVariants = {
    hidden: { opacity: 0, y: 0, filter: 'blur(5px)' },
    show: () => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 1,
            ease: 'easeOut',
            delay: 0.25,
        },
    }),
};


const SectionTitle = ({ title, subtitle }) => {
    const [subtitleFirst, subtitleSecond] = subtitle.split(' ');

    return (
        <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 1 }}
        >
            <h2 className='title'>{title}</h2>
            <div className="subtitle">
                    <span className='accent'>{subtitleFirst}</span> <span className='caveat'>{subtitleSecond}</span>
                <TextEffect per='word' delay={0.5} duration={0.5} transition={{ duration: 0.5 }}>
                </TextEffect>
            </div>
        </motion.div>
    )
}

export default SectionTitle;