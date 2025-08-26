import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import useIsMobile from '../../hooks/useIsMobile';

const Card = ({ children, index, delay = 0.25, inViewMargin = "0px 0px 50px 0px", back, ...otherProps }) => {
    const isMobile = useIsMobile();

    const controls = useAnimation();
    const ref = useRef();

    const inView = useInView(ref, { once: true, margin: inViewMargin })

    const cardVariants = {
        hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
        show: (i = 0) => ({
            opacity: 1,
            y: back ? 0 : 0,
            filter: 'blur(0px)',
            transition: {
                duration: 1,
                ease: 'easeOut',
                delay: delay + (isMobile ? i * 0.05 : i * 0.05),
            },
        }),
    };


    useEffect(() => {
        if (inView) controls.start("show");
    }, [inView, controls, ref]);

    return (
        <motion.div
            className='card'
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            custom={index}
            ref={ref}  // Attach the ref from useInView
            {...otherProps}
        >
            {children}
        </motion.div>
    );
};

export default Card;
