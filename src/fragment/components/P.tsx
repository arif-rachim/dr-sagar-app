import {CSSProperties, HTMLAttributes, PropsWithoutRef, RefAttributes} from "react";
import {motion, MotionProps} from "framer-motion";

type HTMLAttributesWithoutMotionProps<Attributes extends HTMLAttributes<Element>, Element extends HTMLElement> = {
    [K in Exclude<keyof Attributes, keyof MotionProps>]?: Attributes[K];
};

type Props =
    PropsWithoutRef<HTMLAttributesWithoutMotionProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> & MotionProps>
    & RefAttributes<HTMLParagraphElement>;


export function P(props: Props) {
    const style: CSSProperties = {wordSpacing: '0.1rem', fontWeight: 400, fontSize: '1.1rem', color: '#555'};
    return <motion.p style={style} {...props} initial={{opacity: 0.5,y:50}} whileInView={{opacity: 1,y:0}}
                     transition={{duration: 0.3,bounce:0}} viewport={{once:true}}>{props.children}</motion.p>
}