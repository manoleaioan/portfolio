import { motion } from "framer-motion";
import React, { useMemo } from "react";

const TextEffect = ({
    children,
    per = "word",
    blur = false,
    duration = 1,
    delay = 0,
    resize = false,
    y = 12,
    transition
}) => {

    // Count animated spans
    const countAnimatedSpans = (node) => {
        if (typeof node === "string") {
            return node.split(per === "character" ? "" : " ").length;
        } else if (React.isValidElement(node)) {
            return React.Children.toArray(node.props.children).reduce(
                (acc, child) => acc + countAnimatedSpans(child),
                0
            );
        }
        return 0;
    };


    const count = useMemo(() => React.Children.toArray(children).reduce(
        (acc, child) => acc + countAnimatedSpans(child),
        0
    ), [children, per]);

    // Stagger dynamically based on count
    const stagger = count > 1 ? duration / count : duration;

    const parentVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: delay,
                staggerChildren: stagger
            }
        }
    };

    const childVariants = {
        hidden: {
            filter: blur ? "blur(10px)" : "blur(0)",
            opacity: 0,
            y: y,
            width:(resize?0:"unset")
        },
        visible: {
            filter: "blur(0)",
            opacity: 1,
            y: 0,
            width:(resize?"unset":"unset"),
            transition: {
                duration: stagger*4,
                ease: "easeOut",
                ...transition // allow custom transition override
            }
        }
    };

    const processChildren = (node) =>
        typeof node === "string"
            ? node.split(per === "character" ? "" : " ").map((part, index) => (
                <motion.span
                    key={index}
                    variants={childVariants}
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                    {per === "word" ? part + "\u00A0" : part}
                </motion.span>
            ))
            : React.cloneElement(node, {
                children: React.Children.map(node.props.children, processChildren)
            });

    return (
        <motion.div
            variants={parentVariants}
            initial="hidden"
            // animate="visible"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{ display: "inline" }}

        >
            {React.Children.map(children, processChildren)}
        </motion.div>
    );
};

export default TextEffect;
