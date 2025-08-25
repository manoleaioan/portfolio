import { delay, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import useIsMobile from "../../hooks/useIsMobile";

const fadeInVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 }
};

const fadeOutVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 0 },
};

const popVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
}

const variantMap = {
    fadeIn: fadeInVariants,
    fadeOut: fadeOutVariants,
    pop: popVariants,
};


const AnimatedDiv = ({
    children,
    className = "",
    type = "fadeIn",
    transition = { type: "easeInOut", duration: 0.5 },
    initial = "initial",
    whileInView = "animate",
    viewport = { once: true, amount: 0.25 },
    inViewMargin = "0px 0px -100px 0px",
    delay = 0.05,
    wideScreenOnly = false,
    ...rest
}) => {
    const variants = variantMap[type] || fadeInVariants;
    const controls = useAnimation();
    const ref = useRef();
    const inView = useInView(ref, { once: true, margin: inViewMargin });
    const isMobile = useIsMobile();

    useEffect(() => {
        if (inView) controls.start("animate");
    }, [inView, controls, ref]);

    return (
        <motion.div
            className={className}
            variants={variants}
            initial={(wideScreenOnly && !isMobile) ? whileInView : initial}
            animate={controls}
            transition={{ ...transition, delay }}
            ref={ref}
            {...rest}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedDiv;
