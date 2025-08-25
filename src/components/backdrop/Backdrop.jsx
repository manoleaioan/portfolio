import { motion } from "framer-motion";
import { useEffect } from "react";

import "./backdrop.scss";

const Backdrop = ({ children, onClick }) => {
    useEffect(() => {
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = 'fixed';


        return ()=>{
            document.body.style.position = 'unset';
        }
    }, [])

    return (
        <motion.div
            onClick={onClick}
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
};

export default Backdrop;