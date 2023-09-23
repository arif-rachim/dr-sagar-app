import {motion, useScroll} from "framer-motion";

export function ProgressBar() {
    const {scrollYProgress} = useScroll()

    return <motion.div style={{
        backgroundColor: 'red', position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: '#257C79',
        zIndex: 2,
        transformOrigin: '0%', scaleX: scrollYProgress
    }}></motion.div>
}