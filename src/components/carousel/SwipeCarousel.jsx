import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useAnimation } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "./SwipeCarousel.scss";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 5;

const TRANSITION = {
    type: "easeInOut",
    duration: 0.35,
};



export const SwipeCarousel = ({ imgs = [], projectId, ...props }) => {
    const [imgIndex, setImgIndex] = useState(0);
    const dragX = useMotionValue(0);

    const intervalRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const isDragRef = useRef(false);

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            if (dragX.get() === 0) {
                setImgIndex((i) => (i === imgs.length - 1 ? 0 : i + 1));
            }
        }, AUTO_DELAY);
    };

    useEffect(() => {
        startAutoSlide();
        return () => {
            clearInterval(intervalRef.current)
        };
    }, []);

    const onDragEnd = () => {
        const x = dragX.get();
        isDragRef.current = Math.abs(x) > DRAG_BUFFER;


        if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
            setImgIndex((i) => i + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((i) => i - 1);
        }

        setTimeout(() => {
            isDragRef.current = false;
        }, 0);

        clearInterval(intervalRef.current);
        startAutoSlide();
    };

    const onDotClick = (idx) => {
        setImgIndex(idx);
        clearInterval(intervalRef.current);
        startAutoSlide();
    }

    const openGallery = (index) => {
        if (isDragRef.current) {
            isDragRef.current = false;
            return;
        }
        setPhotoIndex(index);
        setOpen(true);
    }

    return (
        <motion.div className="carousel pic" {...props}>
            <motion.div
                drag="x"
                dragElastic={0.1}
                dragConstraints={{ left: 0, right: 0 }}
                style={{ x: dragX }}
                // animate={{ translateX: `-${imgIndex * 100}vw` }}
                // transition={TRANSITION}
                onDragStart={() => { isDragRef.current = true; }}
                onDragEnd={onDragEnd}
                className="carousel-track"
            >
                <Images imgs={imgs} imgIndex={imgIndex} onClick={openGallery} projectId={projectId} />
            </motion.div>

            <div className="carousel-dots" style={{ zIndex: 3 }}>
                {imgs.map((_, idx) => (
                    <motion.div
                        key={idx}
                        onClick={() => onDotClick(idx)}
                        className={`carousel-dot ${imgIndex === idx ? "active" : ""}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: 'easeInOut', duration: 0.35, delay: 0.5 }}
                    >
                        <motion.div className="indicator" />
                    </motion.div>
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[...(imgs.map((i) => ({ src: `${process.env.PUBLIC_URL}/${i}` })))]}
                index={photoIndex}
                plugins={[Zoom]}
            />

        </motion.div>
    );
};


const Images = ({ imgs, imgIndex, onClick, projectId }) => {

    return <AnimatePresence initial={false} mode='sync'>
        {
            imgs.map((imgSrc, idx) => imgIndex === idx && (
                <motion.div
                    key={idx}
                    className="carousel-image"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/${imgSrc})`,
                        position: 'absolute',
                        left: 0,
                        bottom: 0
                    }}
                    transition={TRANSITION}
                    layoutId={`${projectId}-bg`}
                    onClick={() => onClick(idx)}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            ease: 'easeIn',
                            duration: 0.5,
                        },
                    }}
                    exit={{
                        opacity: 0,
                        transition: {
                            ease: 'easeIn',
                            duration: 0.5,
                            delay: 0.3,
                        },
                    }}
                />
            ))}
    </AnimatePresence>
};

